import { QuerySnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

import firebase from "./firebase1";
import "./products_list.css";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

function ReadMore({ children, maxCount = 100 }) {
  const text = children;

  const [isTruncated, setIsTruncated] = useState(true);

  const resultString = isTruncated ? text.slice(0, 0) : text;

  function toggleIsTruncated() {
    setIsTruncated(!isTruncated);
  }

  return (
    <p>
      {resultString}
      <button className="btn" onClick={toggleIsTruncated}>
        {isTruncated ? "Know More" : "Show Less"}
      </button>
    </p>
  );
}

function ProductList() {
  const [product, setProduct] = useState(false);

  useEffect(() => {
    setProduct(true);
  }, []);

  const ref = firebase.firestore().collection("Gadgets");

  console.log(ref);
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(true);

  function getData() {
    ref.onSnapshot((querySnapshot) => {
      const prod = [];
      querySnapshot.forEach((doc) => {
        prod.push(doc.data());
      });
      setdata(prod);
      setloader(false);
    });
  }
  useEffect(() => {
    getData();
    console.log(data);
  }, []);
  return (
    <div>
      <Nav />
      <div className="colorGradient">
        <h2
          style={{
            marginTop: "-40px",
            marginLeft: "450px",
            fontFamily: "initial",
          }}
        >
          Product List with Detailed Description
        </h2>
        {/* <button
          className="submit-button"
          onClick={() => {
            navigate("/scanner");
          }}
        >
          QR Code Scanner
        </button> */}
        {loader === false &&
          data.map((item) => (
            <div className="card-container">
              <div className="card" key={item.id}>
                <div className="image-thumbnail">
                  <img className="image" src={item.image} alt="image"></img>
                </div>
                <div className="card-component">
                  <div>
                    <h3 className="card-title">{item.name}</h3>
                  </div>
                  <div>
                    <h4 className="card-price">Rs.{item.price}</h4>
                  </div>

                  <div className="card-body">
                    {item.smalldesc}
                    <ReadMore>
                      {/* <div className="image-container">
                        <img
                          className="image"
                          src={item.image}
                          alt="image"
                        ></img>
                      </div> */}

                      {item.detaildesc}
                    </ReadMore>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductList;
