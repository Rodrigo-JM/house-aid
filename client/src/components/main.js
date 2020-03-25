import React, { Component } from "react";
import SearchableMap from "./searchableMap";
import ListSection from "./listSection";

class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
        <div className="container">
          
          <SearchableMap />
          <ListSection />
        </div>
    );
  }
}

export default Main;
