import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import Trips from "./components/Trip/Trips";
import { Create } from "./components/Trip/Create";
import Delete from "./components/Trip/Delete";
import Update from "./components/Trip/Update";
import LoginButton from "./components/Authentication/LoginButton";

import "./custom.css";
import LogoutButton from "./components/Authentication/LogoutButton";
import Profile from "./components/Authentication/Profile";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={Create} />
        <Route path="/delete/:id" component={Delete} />
        <Route path="/update/:id" component={Update} />
        <Route path="/trips" component={Trips} />
        <Route path="/LoginButton" component={LoginButton} />
        <Route path="/LogoutButton" component={LogoutButton} />
        <Route path="/Profile" component={Profile} />
      </Layout>
    );
  }
}
