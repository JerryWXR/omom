import React, {useState} from 'react';
import './App.css';
import router from "./routes";
import { useRoutes} from "react-router-dom";
import Header from "./components/header";
import {useAuth} from "./hooks/withLogin";
import Layout from "./pages/layout";

function  App() {
    const routes = useRoutes(router)
    const loginInfo = useAuth()
  return (
    <div className="App">
        {/*{*/}
        {/*    loginInfo.isLogin && <Header/>*/}
        {/*}*/}
        {/*<Header/>*/}
        {/*{loginInfo.isLogin && routes}*/}
        <Layout/>
    </div>
  );
}

export default App;
