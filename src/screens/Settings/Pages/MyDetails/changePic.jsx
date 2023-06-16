import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "./changePic.css";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);
  const [previewimage, setPreviewImage] = useState(
    "https://www.w3schools.com/howto/img_avatar.png"
  );
  const userId = sessionStorage.getItem("userId");

  const [isPicChnaged, setIsPicChnaged] = useState(false);

  const handleImageChange = (event) => {
    setIsPicChnaged(true);
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.onerror = () => {
      setIsPicChnaged(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    };
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_CHOREO_URL}/user/getPic?userId=${userId}`,
        {
          headers: {
            "API-Key": process.env.REACT_APP_BACKEND_API_KEY,
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setPreviewImage(res.data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        console.log(err);
      });
  }, []);

  const handleUploadButtonClick = (file) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_CHOREO_URL}/user/changePic`, {
        image: image,
        userId: userId,
        headers: {
          "API-Key": process.env.REACT_APP_BACKEND_API_KEY,
          accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Done",
          text: "Picture Uploaded Successfully",
        });
        setIsPicChnaged(false);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        console.log(err);
      });
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="image-upload-container">
      <div className="box-decoration">
        <label
          htmlFor="image-upload-input"
          className="image-upload-label"
        ></label>
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {image ? (
            <img src={image} alt="" className="img-display-after" />
          ) : (
            <img src={previewimage} alt="" className="img-display-before" />
          )}

          <input
            id="image-upload-input"
            type="file"
            onChange={handleImageChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
        </div>

        {isPicChnaged ? (
          <button
            class="button is-primary is-small"
            className="uploadButton"
            onClick={handleUploadButtonClick}
          >
            Upload
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default ImageUpload;
