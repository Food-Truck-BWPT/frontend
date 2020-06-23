import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as Yup from "yup";

// STYLING ************
const SignupForm = styled.form`
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

const Signup = () => {
  const [signup, setSignup] = useState({
    username: "",
    email: "",
    password: "",
    isVendor: false,
  });

  // Form Validation
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    isVendor: "",
  });

  const formSchema = Yup.object().shape({
    username: Yup.string().required("Must include a valid username."),
    email: Yup.string().required("email is required.")
    .min(10, "Emails must be at least 10 characters long.")
    ,
    password: Yup.string()
      .min(4, "Passwords must be at least 4 characters long.")
      .required("Password is required."),
    isVendor: Yup.boolean()
  });

  useEffect(() => {
    formSchema.isValid(signup).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [signup]);
  
  
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // method handlers
  const handleCheck = (e) => {
    setSignup({
      ...signup,
      isVendor: !signup.isVendor,
    });
  };

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

    setSignup({
      ...Signup,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>User Signup</h2>
      <SignupForm onSubmit={handleSubmit}>
        <label>
          UserName:
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={signup.username}
            onChange={handleChange}
          />
        </label>
        {errors.username.length > 0 ? (
          <p className="error">{errors.username}</p>
        ) : null}
        <label>
          Email:
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={signup.email}
            onChange={handleChange}
          />
        </label>
        {errors.email.length > 10 ? (
          <p className="error">{errors.email}</p>
        ) : null}
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signup.password}
            onChange={handleChange}
          />
        </label>
        {errors.password.length > 4 ? (
          <p className="error">{errors.password}</p>
        ) : null}
        <label>
          Vendor?:
          <input
            type="checkbox"
            name="isVendor"
            value={signup.isVendor}
            onChange={handleCheck}
          />
        </label>
        <button disabled={buttonDisabled}>Submit</button>
      </SignupForm>
    </div>
  );
};

export default Signup;
