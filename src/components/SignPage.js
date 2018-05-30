import React, { Component } from "react";
import {Consumer}from "../store"


class LogPage extends Component {

  render() {
    return (
      <Consumer>
        {(v) =>(
          <React.Fragment>
          <div>LogPage</div>
          <div onClick={()=>this.login(v)}>login</div>
          </React.Fragment>
          
        )}
        
      </Consumer>
    );
  }

  login(callback){
    callback()
  }
}

export default LogPage;
