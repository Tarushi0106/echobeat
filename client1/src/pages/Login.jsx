import React from 'react';;
import{ useNavigate} from "react-router-dom";
import { toast } from 'react-toastify'; // Correct import
import 'react-toastify/dist/ReactToastify.css'; 
import './Login.css'; // Ensure this file exists in the same directory
import { useState } from 'react';

const URL = "http://localhost:5000/api/auth/login"
export const Login = () => {
  const [user , setUser] = useState({
    username : "",
    password:"",
})

const navigate = useNavigate();
const handleInput = (e) => {
  let name = e.target.name;
  let value = e.target.value;

  setUser({
    ...user,
    [name]: value,
  });
};
const handleSubmit =async  (e) =>{
  e.preventDefault();
  try{
const response = await fetch (URL,{
  method:"POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(user),
});
console.log("login form", response);
if(response.ok){
  alert("login successfull");
  const res_data = await response.json();
        console.log("res from server", res_data);
        storetokeninls(res_data.token); 
  setUser({
    email: "",
    password: "",
  });
 navigate("/ ");
}
else{
  alert("invalid credentials");
}
  }
  catch(error){
  console.log(error);
}
};

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className="title login"> <h4>Login</h4></div>
        {/* <div className="title signup">Signup</div> */}
      </div>
      <div className="form-container">
        {/* <div className="slide-controls"> */}
          {/* <input type="radio" name="slide" id="login" defaultChecked /> */}
          {/* <input type="radio" name="slide" id="signup" /> */}
          {/* <label htmlFor="login" className="slide login">Login</label> */}
          {/* <label htmlFor="signup" className="slide signup">Signup</label>
          <div className="slider-tab"></div> */}
        {/* </div> */}
        <div className="form-inner">
          <form action="#" className="login">
            <div className="field">
              <input type="text" placeholder="Email Address" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="pass-link"><a href="#">Forgot password?</a></div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Submit" />
            </div>
            <div className="signup-link">Don't have an account? <a href="">Signup now</a></div>
          </form>
          <form action="#" className="signup">
            {/* <div className="field">
              <input type="text" placeholder="Name" required />
            </div> */}
            <div className="field">
              <input type="text" placeholder="Email Address" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required />
            </div>
            {/* <div className="field">
              <input type="password" placeholder="Confirm password" required />
            </div> */}
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Signup" />
            </div>
            <div className="signup-link">Already have an account? <a href="">Login</a></div>
          </form>
        </div>
      </div>
    </div>
  );
};