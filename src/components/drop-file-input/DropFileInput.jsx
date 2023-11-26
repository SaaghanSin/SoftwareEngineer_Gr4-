import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import "./drop-file-input.css";

import { ImageConfig } from "../../config/ImageConfig";
import uploadImg from "../../assets/images/cloud-upload-regular-240.png";
import {selectedTypesData} from "../../data/type";
const numberValues = selectedTypesData.selectedTypes.filter(item => typeof item === 'number');
const DropFileInput = (props) => {
  const wrapperRef = useRef(null);
  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const fileTypeMap = {
    1: "application/msword", // DOC
    2: "application/pdf",    // PDF
    3: "text/plain",         // TXT
    4: "application/vnd.openxmlformats-officedocument.presentationml.presentation", // PPTX
    5: "application/vnd.ms-excel", // XLSX
  };

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];

    if (newFile && isValidFileType(newFile)) {
      // Only allow files with valid types
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    } else {
      // Handle invalid file type (show an error message, etc.)
      console.error("Invalid file type. Allowed types: " + numberValues.selectedTypes.join(", "));
    }
  };

  const isValidFileType = (file) => {
    // Check if selectedTypes is an array with at least one number
    if (Array.isArray(numberValues) && numberValues.length > 0) {
      const allowedTypes = numberValues.map(typeNumber => fileTypeMap[typeNumber]);
      return allowedTypes.includes(file.type);
    } else {
      // Handle the case when selectedTypes is not as expected
      console.error("Invalid or empty selectedTypes array");
      return false;
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
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
          <p>Drag & Drop your files here</p>
        </div>
        <input type="file" value="" onChange={onFileDrop} accept={numberValues.map(typeNumber => `.${fileTypeMap[typeNumber].split("/")[1]}`).join(", ")} />
        {/* Generates accept attribute based on allowed types */}
      </div>
      {fileList.length > 0 ? (
  <div className="drop-file-preview">
    <p className="drop-file-preview__title">Ready to upload</p>
    {fileList.map((item, index) => (
      <div key={index} className="drop-file-preview__item">
        <img
          src={
            ImageConfig[item.type?.split("/")[1]] || ImageConfig["default"]
          }
          alt=""
        />
        <div className="drop-file-preview__item__info">
          <p>{item.name}</p>
          <p>{item.size}B</p>
        </div>
        <span
          className="drop-file-preview__item__del"
          onClick={() => fileRemove(item)}
        >
          x
        </span>
      </div>
    ))}
  </div>
) : null}
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
