import React from "react";
import Header from "./Header";
import Map from "./Map";

import "../css/main.scss";

class App extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <Map />
      </div>
    )
  }
}



export default App;
