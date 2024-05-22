import React, { useState } from "react";
import Hero from "./components/Hero";
import Input from "./components/Input";
import Buttons from "./components/Buttons";
import List from "./components/List";
import Footer from "./components/Footer";
import Up from "./components/Up";

const App = () => {
  const [items, setItems] = useState(["task to do - one", "task to do - two", "task to do - three", "task to do - four",  "task to do - five"]);
  const [filt, setFilt] = useState("all");

  const deleteMe = (indexToDelete) => {
    const updatedItems = items.filter((_, index) => index !== indexToDelete);

    setItems(updatedItems);
  };

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };
  const onFilterChange = () => {
    console.log("filter changed");
  };

  return (
    <div className="bg-indigo-700 text-lg">
      <Hero />
      <Input onAddItem={handleAddItem} />
      <Buttons />
      <List items={items} deleteMe={deleteMe} onFilterChange={onFilterChange} />
      <Footer />
      <Up />
    </div>
  );
};

export default App;
