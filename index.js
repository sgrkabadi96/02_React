// Caret and tilde 
// caret(^) is used for minor update 

// tilde (~) is used for major update 

// transitive dependency // one node module used many other modules hence they get installed 

// npx parcel  index.html


import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1" , {} , "This is react Element");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);