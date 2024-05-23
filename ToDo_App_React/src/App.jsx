import React from "react";
import InputList from "./components/InputList";
import Header from "./components/Header";
import FooterUp from "./components/FooterUp";

const App = () => {
  return (
    <div className="bg-indigo-700 text-lg">
      <Header />
      <InputList />
      <FooterUp />
    </div>
  );
};

export default App;
