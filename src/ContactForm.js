import React, { useState, useEffect } from "react";
import Apps, { Images } from "./image";
import "./profile.css";

const ContactForm = (props) => {
  const initialFieldValues = {
    title: "",
    mynumber: "",
    email: "",
    image: "",
  };

  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId == "")
      setValues({
        ...initialFieldValues,
      });
    else
      setValues({
        ...props.contactObjects[props.currentId],
      });
  }, [props.currentId, props.contactObjects]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      {/* <div>
        <Images></Images>
      </div> */}
      <div className="name-place">
        {/* <h3 className="heading">Name</h3> */}
        <input
          className="name-holder"
          placeholder="Full Name"
          name="title"
          value={values.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="name-place">
        <h3 className="heading">Contact Number</h3>
        <input
          className="name-holder"
          placeholder="Mobile"
          name="mynumber"
          value={values.mynumber}
          onChange={handleInputChange}
        />
      </div>
      <div className="name-place">
        <h3 className="heading">Email</h3>
        <input
          className="name-holder"
          placeholder="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="file"
          name="image"
          id="input"
          accept="image/*"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="form-group">
        <input
          type="submit"
          value={props.currentId == "" ? "Save" : "Update"}
          className="save-button"
        />
      </div>
    </form>
  );
};

export default ContactForm;
