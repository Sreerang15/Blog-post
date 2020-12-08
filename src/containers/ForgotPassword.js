/*

import axios from "axios";
import React, { useState } from "react";

import { Formik } from "formik";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    //setEmail(e.target.value);
    console.log(`password sent on ${email}`);
  };

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          color: "white",
          backgroundColor: "#483D8B",
          margin: 0,
          height: "60px",
          display: "flow",
          fontFamily: "inherit",
        }}
      >
        <div style={{ textAlign: "center", marginTop: 0 }}>Welcome</div>
      </div>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <label className="form">
          Email
          <input type="text" style={{ marginLeft: 30 }} name="Email" required />
        </label>

        <input type="submit" value="Submit" style={{ display: "flex" }} />
      </form>
      <p style={{ color: "green", fontSize: 15 }}>
        {"Password Sent successfully"}
      </p>
    </div>
  );
};

export default ForgotPassword;
*/

import React, { useState } from "react";
import { Formik } from "formik";
export default function ForgotPassword() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
