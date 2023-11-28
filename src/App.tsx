import React, {useState} from 'react';
import './App.css';
import router from "./routes";
import { useRoutes} from "react-router-dom";
import Header from "./components/header";
import {useAuth} from "./hooks/withLogin";

function  App() {
    const routes = useRoutes(router)
    const loginInfo = useAuth()
  return (
    <div className="App">
        {/*{*/}
        {/*    loginInfo.isLogin && <Header/>*/}
        {/*}*/}
        <Header/>
        {routes}
    </div>
  );
}

export default App;
