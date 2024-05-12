import React from "react";
import Hero from "./components/Hero";
import Input from "./components/Input";
import Buttons from "./components/Buttons";
import List from "./components/List";
import Footer from "./components/Footer";
import Up from "./components/Up";

const App = () => {
  return (
    <>
      <div className="bg-indigo-700 text-lg">
        {" "}
        <Hero />;
        <Input />;
        <Buttons />;
        <List />;
        <Footer />;
        <Up />;
      </div>
    </>
  );
};

export default App;
