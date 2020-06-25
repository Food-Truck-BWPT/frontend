import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import axiosWithAuth from "../../utils/axiosWithAuth";
import {useHistory} from "react-router-dom"
import {connect} from 'react-redux'
import {checkVendor} from '../../actions'
// STYLING ************
const LoginSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
  h2{
    font-size: 3rem;
    margin: 1%;
  }
`;

const LoginForm = styled.form`
  /* border: 1px solid black; */
  label {
    font-size: 2.5rem;
  }
  input {
    background-color: white;
    margin: 1rem;
  }
  button {
    font-size: 2rem;
    padding: .5rem;
    :disabled {
      background: #c0c0c0;
      color: #e8e8e8;
    }
  }
`;

// CODE *********
const Login = (props) => {
  const {push} = useHistory()
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
  }, [formSchema, login]);

  const [buttonDisabled, setButtonDisabled] = useState(true);

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

  const submitLogin = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("auth/login", login)
      .then((res) => {
        console.log(res);
        props.checkVendor(res.data.isVendor);
        localStorage.setItem("token", res.data.token);
        push("/profile")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <LoginSection>
      <h2>User Login</h2>
      <LoginForm onSubmit={submitLogin}>
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

        <button disabled={buttonDisabled}>Submit</button>
      </LoginForm>
      <div>
        {errors.username.length > 0 ? (
            <p className="error">{errors.username}</p>
          ) : null}
        {errors.password.length > 4 ? (
            <p className="error">{errors.password}</p>
          ) : null}
      </div>
    </LoginSection>
  );
};
const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(
  mapStateToProps,
  {checkVendor}
)(Login)
