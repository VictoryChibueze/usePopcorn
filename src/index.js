import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terribe", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={10} color="#12ab00" size={26} defaultRating={3} /> */}
  </React.StrictMode>
);
