import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import Nav from "./Nav";
import "./profile.css";

import fireDb from "./firebase1";
import { useNavigate } from "react-router-dom";
import Apps, { Images } from "./image";

const Contacts = () => {
  var [contactObjects, setContactObjects] = useState({});
  var [currentId, setCurrentId] = useState("");
  //let navigate1 = useNavigate();
  useEffect(() => {
    fireDb
      .database()
      .ref()
      .child("contacts")
      .on("value", (snapshot) => {
        if (snapshot.val() != null)
          setContactObjects({
            ...snapshot.val(),
          });
        else setContactObjects({});
      });
  }, []);

  const addOrEdit = (obj) => {
    if (currentId === "")
      fireDb
        .database()
        .ref()
        .child("contacts")
        .push(obj, (err) => {
          if (err) console.log(err);
          // else setCurrentId("");
        });
    else
      fireDb
        .database()
        .ref()
        .child(`contacts/${currentId}`)
        .set(obj, (err) => {
          if (err) console.log(err);
          // else setCurrentId("");
        });
  };

  const onDelete = (key) => {
    if (window.confirm("Are you sure to delete this record?")) {
      debugger;
      fireDb
        .database()
        .ref()
        .child(`contacts/${key}`)
        .remove((err) => {
          if (err) console.log(err);
          else setCurrentId("");
        });
    }
  };

  return (
    <div className="background">
      <Nav></Nav>
      <div className="profile-card">
        <div>
          <Images></Images>
        </div>
        <div className="h">
          <div className="ro">
            <div className="col-md-5">
              <table className="table table-borderless table-stripped">
                <tbody>
                  {Object.keys(contactObjects).map((id) => {
                    return (
                      <div key={id}>
                        {/* <div className="name-place">
                          <h5 className="heading">User Name</h5>
                          <input
                            className="name-holder"
                            value={contactObjects[id].title}
                          ></input>
                        </div>
                        <div className="name-place">
                          <h5 className="heading">Phone Number</h5>
                          <input
                            className="name-holder"
                            value={contactObjects[id].mynumber}
                          ></input>
                        </div>
                        <div className="name-place">
                          <h5 className="heading">Email Id</h5>
                          <input
                            className="name-holder"
                            value={contactObjects[id].email}
                          ></input>
                        </div> */}

                        <div>
                          <div
                            onClick={() => {
                              setCurrentId(id);
                            }}
                          >
                            <h3 style={{ marginLeft: "160px" }}>Name</h3>
                          </div>

                          <ContactForm
                            {...{ addOrEdit, currentId, contactObjects }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </tbody>
              </table>
              <div className="col-md-5">
                {/* <Apps></Apps> */}
                {/* <ContactForm {...{ addOrEdit, currentId, contactObjects }} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
