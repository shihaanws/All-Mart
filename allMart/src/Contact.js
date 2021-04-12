import React, { useState, useEffect } from "react";
import "./appi.css";
import { db } from "./firebase";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import OnlySubtotal from "./OnlySubtotal";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");
  const history = useHistory();

  const redirect = () => {
    history.push('/success')
  }
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        address: address,
        pincode:pincode,
        phone:phone,

      })
      .then(() => {
        setLoader(false);
        alert("Your details has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setAddress("");
    setPincode("");
    setPhone("");
  };

  return (
    <div className="app1">
<form className="form" onSubmit={handleSubmit}>
      <h1> 🛒 Delivery Details</h1>
<OnlySubtotal/>
      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Address</label>
      <textarea
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      ></textarea>

      <label>Pincode</label>
      <input
        placeholder="Pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />

      <label>Phone</label>
      <input
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <label>Payment</label>
        <TextField
          disabled
          id="outlined-disabled"
          // label="Disabled"
          defaultValue="Cash on Delivery"
          variant="outlined"
        />    
        
        <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>

      

      <Button type="button" style={{marginBottom:"20px" , height:"10px"}} onClick={redirect} >Complete booking</Button>

      {/* <OnlySubtotal/> */}

    </form>
    </div>
    
  );
};

export default Contact;
