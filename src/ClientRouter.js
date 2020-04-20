import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";

import Join from "./components/Join/Join";
import App from "./App";


let socket;

const ClientRouter = () => (
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/home" render={(props) => <App {...props} isAuthed={true}/>}/>
      </Router>
);

export default ClientRouter;