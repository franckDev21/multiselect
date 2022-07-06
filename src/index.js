import React, { useState } from "react";
import ReactDOM from "react-dom";
import MultiSelect from "react-multi-select-component";
import "./styles.css";

const App = () => {
  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry" }
  ];

  const [selected, setSelected] = useState([]);

  return (
    <div>
      <h1>Select Fruits</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        selected={selected}
        onChange={setSelected}
        labelledBy={"Select"}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
