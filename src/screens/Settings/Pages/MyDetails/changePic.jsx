import React, { useState, useRef, useEffect } from "react";
import "./changePic.css";
import axios from "axios";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);
  const [previewimage, setPreviewImage] = useState(
    "https://www.w3schools.com/howto/img_avatar.png"
  );
  const userId = sessionStorage.getItem("userId");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
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
        console.log(res);
      })
      .catch((err) => {
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

        <button
          class="button is-primary is-small"
          className="uploadButton"
          onClick={handleUploadButtonClick}
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default ImageUpload;
