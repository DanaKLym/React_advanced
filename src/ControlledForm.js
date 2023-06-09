import "./ControlledForm.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function ControlledForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const changePassword = (e) => {
    setPassword({...password, isTouched: true});
    //finish
  }

  const getIsFormValid = (e) => {
    if(!firstName && !email && password.lenth < 8) {
        return true;
    } else {
        return false;
    }
    //resolve
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
   //finish
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last name" />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input value={password} onChange={changePassword} placeholder="Password" type="password"/>
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default ControlledForm;
