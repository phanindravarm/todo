import React from "react";

import ReactDom from "react-dom/client";
import Header from "./header";
import Body from "./body";
const App = () => {
  return <Body />
  
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
