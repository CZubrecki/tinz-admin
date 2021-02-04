import { CircularProgress } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { StoreState } from "../redux/store";

const mapStateToProps = (state: StoreState) => ({
  token: state.token,
  exp: state.exp,
});

export default connect(mapStateToProps)(function ProtectedRoute(props: any) {    
  const { token, exp} = props;
  const now = Date.now();

  if(exp > now) {
    return <CircularProgress />
  } else if(!token) {
    return <Redirect to={`/login`} />;
  }

  return <Route {...props} />;
});