import React, { Component } from "react";
import TravelersList from "./travelersList.js";
import HelpersList from "./helpersList";
import HelperUser from "./helperUser.js";
import TravelerUser from "./travelerUser.js";
import { HashRouter, Route, NavLink } from "react-router-dom";
import axios from 'axios'

class ListSection extends Component {
  constructor() {
    super();
    this.state = {
      travelersList: [],
      helpersList: []
    };
  }

  async componentDidMount() {
    const helpersList = await axios.get('/api/helpers');
    const travelersList = await axios.get('/api/travelers');
    console.log(helpersList.data)
    this.setState({
      travelersList: travelersList.data,
      helpersList: helpersList.data
    })
  }

  render() {
    return (
      <HashRouter>
        <div id="list-section">
          <div id="navbar">
            <NavLink to="/travelers">Travelers</NavLink>
            <NavLink to="/helpers">Helpers</NavLink>
          </div>
            <Route
              path="/travelers"
              render={() => <TravelersList users={this.state.travelersList} />}
            />
            <Route
              path="/helpers"
              render={() => <HelpersList users={this.state.helpersList} />}
            />
        </div>
      </HashRouter>
    );
  }
}

export default ListSection;
