import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import useLocation from "./useLocation";

const App = () => {
  const [lat, errorMessage] = useLocation();
  let content;
  if (errorMessage) {
    content = <div>Error:{errorMessage}</div>;
  } else if (lat) {
    if (lat) content = <SeasonDisplay lat={lat} />;
  } else {
    return <Spinner message="Please Accept Location Request" />;
  }
  return <div style={{ border: "10px solid red" }}>{content}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
