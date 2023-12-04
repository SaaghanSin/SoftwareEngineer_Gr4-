import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import "./drop-file-input.css";

import { ImageConfig } from "../../config/ImageConfig";
import uploadImg from "../../assets/images/cloud-upload-regular-240.png";
import { selectedTypesData } from "../../data/type";
const numberValues = selectedTypesData.selectedTypes.filter(
  (item) => typeof item === "number"
);
const DropFileInput = (props) => {
  const wrapperRef = useRef(null);
  const [fileList, setFileList] = useState([]);
  const [uploadClicked, setUploadClicked] = useState(false);
  const [permitUpload, setPermitUpload] = useState(true);
  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const fileTypeMap = {
    1: "application/docx", // DOCX
    2: "application/pdf", // PDF
    3: "image/png", // PNG
    4: "application/pptx", // PPTX
    5: "text/css", // CSS
  };

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];

    if (newFile && isValidFileType(newFile)) {
      // Check if there's already a file in the list
      if (fileList.length === 0) {
        const updatedList = [...fileList, newFile];
        setFileList(updatedList);
        props.onFileChange(updatedList);
      } else {
        alert("Only one file can be uploaded. Remove the existing file before adding a new one.");
      }
    } else {
      console.error(
        "Invalid file type. Allowed types: " +
          numberValues.map(String).join(", ")
      );
    }
  };

  const isValidFileType = (file) => {
    if (Array.isArray(numberValues) && numberValues.length > 0) {
      const allowedTypes = numberValues.map(
        (typeNumber) => fileTypeMap[typeNumber]
      );
      return allowedTypes.includes(file.type);
    } else {
      console.error("Invalid or empty selectedTypes array");
      return false;
    }
  };

  const fileRemove = () => {
    // Remove the file from the list
    setFileList([]);
    props.onFileChange([]);
    setPermitUpload(true);
    setUploadClicked(false);
  };

  const handleUploadClick = () => {
    if (fileList.length > 0) {
      setUploadClicked(true);
      setPermitUpload(false);
    }
  };

  return (
    <>
      <div
        ref={wrapperRef}
        className="drop-file-input"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="drop-file-input__label">
          <img src={uploadImg} alt="" />
          <p>Drag & Drop your file here</p>
        </div>
        <input
          type="file"
          value=""
          onChange={onFileDrop}
          accept={numberValues
            .map((typeNumber) => `.${fileTypeMap[typeNumber].split("/")[1]}`)
            .join(", ")}
          disabled={permitUpload==false}
          onClick={handleUploadClick}
        />
        {/* Generates accept attribute based on allowed types */}
      </div>
      {fileList.length > 0 ? (
        <div className="drop-file-preview">
          <p className="drop-file-preview__title">Ready to upload</p>
          <div key={0} className="drop-file-preview__item">
            <img
              src={
                ImageConfig[fileList[0].type?.split("/")[1]] ||
                ImageConfig["default"]
              }
              alt="none"
            />
            <div className="drop-file-preview__item__info">
              <p>{fileList[0].name}</p>
              <p>{fileList[0].size}B</p>
            </div>
            <span
              className="drop-file-preview__item__del"
              onClick={fileRemove}
            >
              x
            </span>
          </div>
        </div>
      ) : null}
      {fileList.length > 0 && uploadClicked && (
        <h2 style={{ color: "red", marginTop: "10px" }}>
          Chỉ cho phép upload 1 file
        </h2>
      )}
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
