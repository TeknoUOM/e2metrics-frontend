import React from "react";
import { useState, useEffect } from "react";
import "react-phone-number-input/style.css";
import Swal from "sweetalert2";
import PhoneInput from "react-phone-number-input";
import Sidebar from "../Sidebar";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function MyDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  useEffect(() => {
    setIsEditable(false); // Set isEditable to false on initial load
  }, []);

  const handleEdit = () => {
    setIsEditable(true); // Set isEditable to true when edit button is clicked
  };

  const handleChangePassword = () => {
    Swal.fire({
      title: "Change Password",
      html:
        '<input type="password" placeholder="Old password" id="oldPassword"  class="swal2-input">' +
        '<input type="password" placeholder="New password" id="newPassword"  class="swal2-input">' +
        '<input type="password" placeholder="Confirm new password" id="confirmPassword" class="swal2-input">',
      focusConfirm: false,
      preConfirm: () => {
        const oldPassword = Swal.getPopup().querySelector("#oldPassword").value;
        const newPassword = Swal.getPopup().querySelector("#newPassword").value;
        const confirmPassword =
          Swal.getPopup().querySelector("#confirmPassword").value;

        if (!oldPassword || !newPassword || !confirmPassword) {
          Swal.showValidationMessage("Please fill in all fields");
        } else if (newPassword !== confirmPassword) {
          Swal.showValidationMessage("Passwords do not match");
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,30}$/.test(newPassword)) {
            Swal.showValidationMessage("New password must be between 8 and 30 characters and include at least 1 uppercase, 1 lowercase, 1 number, and 1 special character");
        }
  

        return { oldPassword: oldPassword, newPassword: newPassword };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { oldPassword, newPassword } = result.value;
        Swal.fire(
          "Password Changed",
          "Your password has been changed.",
          "success"
        );
      }
    });
  };

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

    setIsEditable(false);
  };

  return (
    <>
      <Sidebar>
        <div className="profilePage">
          <div className="form-box">
            <div className="gradient-box">
              <img
                className="profile-pic"
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt=""
              />
            </div>

            <form
              className="mydetails-container"
              onSubmit={isEditable ? handleSubmit : undefined}
            >
              <div class="field" >
                <div className="row column-justify" >
                  <div class="column is-one-third is-paddingless is-grouped " >
                    <label  for="Fname">First Name:</label>
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input is-primary"
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                          setFirstNameError("");
                        }}
                        readOnly={!isEditable}
                      />
                      {firstNameError && (
                        <p className="help is-danger">{firstNameError}</p>
                      )}
                    </div>
                  </div>
                  <div className="column is-one-third ">
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
                        readOnly={!isEditable}
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
                    <div className="control ">
                      <label for="Mobile">Mobile Number:</label>
                      <PhoneInput
                        class="input is-primary"
                        placeholder="Enter phone number"
                        value={mobile}
                        onChange={setMobile}
                        defaultCountry="LK"
                        readOnly={!isEditable}
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
                        type={isPasswordVisible ? "text" : "password"}
                        id="password"
                        placeholder="password"
                        value={"abcdef"}
                        readOnly={true}
                      />
                      {isEditable && (
                        <div
                          style={{
                            position: "absolute",
                            top: "70%",
                            transform: "translateY(-50%)",
                            right: "10px",
                            cursor: "pointer",
                          }}
                          onClick={handleTogglePasswordVisibility}
                        >
                          {isPasswordVisible ? < FaEye/> : <FaEyeSlash />}
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={handleChangePassword}
                      className="changepwd"
                    >
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
                        className="input is-primary"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setEmailError("");
                        }}
                        readOnly={!isEditable}
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
                  {!isEditable && (
                    <button
                      type="button"
                      class="button is-primary is-outlined"
                      onClick={handleEdit}
                    >
                      Edit
                    </button>
                  )}
                  {!isEditable ? (
                    <button type="button" onClick={handleEdit}></button>
                  ) : (
                    <>
                      <button
                        type="submit"
                        class="button is-primary is-outlined"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        class="button is-link is-outlined"
                        onClick={() => setIsEditable(false)}
                      >
                        Cancel
                      </button>
                    </>
                  )}
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
