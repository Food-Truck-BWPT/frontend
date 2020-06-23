import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as Yup from "yup";

// STYLING ************


const LoginForm = styled.form`
  /* border: 1px solid white; */
  display: flex;
  align-items: center;
  justify-content: space-around;

  label {
    font-size: 2.5rem;
  }
  input {
    background-color: white;
    font-size: 2rem;
  }
  button {
    font-size: 2rem;
    :disabled {
      background: #c0c0c0;
      color: #e8e8e8;
    }
  }
`;

// CODE *********

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  //Form Validation
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const formSchema = Yup.object().shape({
    username: Yup.string().required("Must include a valid username."),
    password: Yup.string()
      .min(4, "Passwords must be at least 4 characters long.")
      .required("Password is required."),
  });

  useEffect(() => {
    formSchema.isValid(login).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [login]);
  
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
  };


  // method handlers
  const handleChange = (e) => {
    e.persist();
    Yup.reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });

    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };



  return (
    <div>
      <h2>User Login</h2>
      <LoginForm onSubmit={handleSubmit}>
        <label>
          UserName:
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={login.username}
            onChange={handleChange}
          />
        </label>
        {errors.username.length > 0 ? (
          <p className="error">{errors.username}</p>
        ) : null}
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={login.password}
            onChange={handleChange}
          />
        </label>
        {errors.password.length > 4 ? (
          <p className="error">{errors.password}</p>
        ) : null}
        <button disabled={buttonDisabled}>Submit</button>
      </LoginForm>
    </div>
  );
};

export default Login;
