import React from "react";
import { useState } from "react";
import "react-phone-number-input/style.css";
import Swal from 'sweetalert2';
import PhoneInput from "react-phone-number-input";
import Sidebar from "../Sidebar";

function MyDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChangePassword = () => {
    Swal.fire({
      title: 'Change Password',
      html:
        '<input type="password" placeholder="Old password" id="oldPassword"  className="swal2-input">' +
        '<input type="password" placeholder="New password" id="newPassword" className="swal2-input">' +
        '<input type="password" placeholder="Confirm new password" id="confirmPassword" className="swal2-input">',
      focusConfirm: false,
      preConfirm: () => {
        const oldPassword = Swal.getPopup().querySelector('#oldPassword').value;
        const newPassword = Swal.getPopup().querySelector('#newPassword').value;
        const confirmPassword = Swal.getPopup().querySelector('#confirmPassword').value;
  
        if (!oldPassword || !newPassword || !confirmPassword) {
          Swal.showValidationMessage('Please fill in all fields');
        } else if (newPassword !== confirmPassword) {
          Swal.showValidationMessage('Passwords do not match');
        }
  
        return { oldPassword: oldPassword, newPassword: newPassword };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const { oldPassword, newPassword } = result.value;
        Swal.fire(
          'Password Changed',
          'Your password has been changed.',
          'success'
        )
      }
    })
  }
  
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation rules
    const firstNameRegex = /^[a-zA-Z]+$/;
    const lastNameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation messages
    const firstNameError = "Name can only contain letters";
    const lastNameError = "Name can only contain letters";
    const emailError = "Please enter a valid email address";

    // Validate first name
    if (!firstName.match(firstNameRegex)) {
      setFirstNameError(firstNameError);
      return;
    }

    // Validate last name
    if (!lastName.match(lastNameRegex)) {
      setLastNameError(lastNameError);
      return;
    }

    // Validate email
    if (!email.match(emailRegex)) {
      setEmailError(emailError);
      return;
    }

    // Confirmation alert
    if (window.confirm("Are you sure you want to submit?")) {
      alert("Form submitted");
    }
  };

  return (
    <>
    <Sidebar>
    <div className="profilePage">
        <div className="form-box">
          <div className="gradient-box">
          <img className="profile-pic"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt=""
            />
          </div>

          <form className="mydetails-container" onSubmit={handleSubmit}>
            <div className="field">
              <div className="row">
                <p>Name</p>
                <div className="column is-one-third">
                  <label for="Fname">First Name:</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className="input is-primary"
                      type="text"
                      placeholder="Fist Name"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                        setFirstNameError("");
                      }}
                    />
                    {firstNameError && (
                      <p className="help is-danger">{firstNameError}</p>
                    )}
                  </div>
                </div>
                <div className="column is-one-third">
                  <div className="control has-icons-left has-icons-right">
                    <label for="Lname">Last Name:</label>
                    <input
                      className="input is-primary"
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                        setLastNameError("");
                      }}
                    />
                    {lastNameError && (
                      <p className="help is-danger">{lastNameError}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="field">
              <div className="columns">
                <div className="column is-half">
                  <div className="control has-icons-left has-icons-right">
                    <label for="Mobile">Mobile:</label>
                    <PhoneInput
                      className = "input is-primary"          
                      placeholder="Enter phone number"
                      value={mobile}
                      onChange={setMobile}
                      defaultCountry = "LK"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="field">
              <div className="columns">
                <div className="column is-half">
                  <div className="control has-icons-left has-icons-right">
                    <label for="Password"> Password:</label>
                    <input
                      className="input is-primary"
                      type="password"
                      id="password"
                      placeholder="password"
                    />
                  </div>

                  <button className="button is-small" type="button" onClick={handleChangePassword} >
                    Change Password
                  </button>
                </div>
              </div>
            </div>

            <div className="columns">
              <div className="column is-half">
                <div className="field">
                  <div className="control has-icons-left has-icons-right">
                    <label htmlFor="email">Email:</label>
                    <input
                     className ="input"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError("");
                      }}
                    />
                    {emailError && (
                      <p className="help is-danger">{emailError}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-grouped buttons">
              <p className="control">
                <button className="button is-primary is-outlined" type="submit">
                  Submit
                </button>
              </p>
              <p className="control">
                <button className="button is-link is-outlined" type="reset">
                  Cancel
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Sidebar>
    </>
  );
}

export default MyDetails;
