import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import MyContext from "./mycontext";
import Footer from "./footer";
import Content from "./Content";
import Header from "./header";

function App() {
  const[selectedUser, setSelectedUser]= useState("manohar");
  return (
    <MyContext.Provider
      value={{selectedUser}}>
     <Header/>
     <Content/> 
     <Footer/>

    </MyContext.Provider>
  );
}

export default App;
