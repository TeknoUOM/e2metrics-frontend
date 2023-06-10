import React from "react";
import { useState, useEffect } from "react";
import "react-phone-number-input/style.css";
import Swal from "sweetalert2";
import axios from "axios";
import ImageUpload from "./changePic";
import Loading from "../../../../common/Loading/Loading";

function MyDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [loading, setLoading] = useState(false);
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_CHOREO_URL}/user/getUserDetails?userId=${userId}`
      )
      .then((response) => {
        console.log(response);
        setEmail(response.data.emails[0]);
        setFirstName(response.data.name.givenName);
        setLastName(response.data.name.familyName);
        setMobile(response.data.phoneNumbers[0].value);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsEditable(false); // Set isEditable to false on initial load
  }, []);

  const handleEdit = () => {
    setIsEditable(true); // Set isEditable to true when edit button is clicked
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
    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_CHOREO_URL}/user/changeUserDetails`,
        {
          firstName: firstName,
          lastName: lastName,
          mobile: mobile,
          email: email,
          userId: userId,
        }
      )
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        setLoading(false);
      });

    setIsEditable(false);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="profilePage">
            <div className="form-box">
              <div className="gradient-box">
                <div className="profilepic">
                  <ImageUpload></ImageUpload>
                </div>
              </div>

              <form
                className="mydetails-container"
                onSubmit={isEditable ? handleSubmit : undefined}
              >
                <div class="">
                  <div className="row column-justify">
                    <div class="column is-one-third is-paddingless is-grouped ">
                      <label for="Fname">First Name:</label>
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

                <div className="columns">
                  <div className="column is-half">
                    <div className="control ">
                      <label for="Mobile">Mobile Number:</label>
                      <input
                        className="input is-primary"
                        type="text"
                        value={mobile}
                        readOnly={!isEditable}
                        onChange={(e) => setMobile(e.target.value)}
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="columns">
                  <div className="column is-half">
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
                <div className="is-grouped">
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
                          style={{ marginRight: "5px" }}
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
        </div>
      )}
    </>
  );
}

export default MyDetails;
