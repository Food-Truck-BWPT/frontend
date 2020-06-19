import React, { useState, useEffect } from "react"

function Login() {
const [loginInputs, setLoginINputs] = useState({})
 return (
     <div className="login">
         <form>
            <label>Username:</label>
            <input></input>
            <label>Email:</label>
            <label>Username:</label>
         </form>
     </div>
 )
}

export default Login;