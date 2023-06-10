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
    setPassword({...password, value: e.target.value});
  }

  //to check if the user clicked on the field at least once, in the HTML code we call this function within the onBlur event, which is called whenever the input loses focus, so that guarantees the user has interacted with the password input at least once
  const isUserInteracted = () => {
    setPassword({...password, isTouched: true});
  }

  const getIsFormValid = () => {
    if(firstName && lastName && validateEmail(email) && (password.value.length >= 8) && (role === "individual" || role === "business")) {
      return true;
    } else {
        return false;
    };
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setRole("role");
   setPassword({...password,
    value: "",
    isTouched: false,
   });
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
            <input value={password.value} onChange={changePassword} onBlur={isUserInteracted} placeholder="Password" type="password"/>
            {password.isTouched && password.value.length < 8 ? <PasswordErrorMessage/> : null}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
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
