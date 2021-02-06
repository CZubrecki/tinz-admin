import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { StoreState } from "../redux/store";
import Layout from './Layout';

const mapStateToProps = (state: StoreState) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(function ProtectedRoute(props: any) {    
  const { token, exp } = props.auth;
  const now = Date.now();

  if(now > (exp*1000) || !token) {
    return <Redirect to={`/login`} />;
  }

  return (
    <Layout>
      <Route {...props} />
    </Layout>
  );
});