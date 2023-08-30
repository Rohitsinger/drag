import React, { useState } from 'react';
import './App.css';
const catpar = [
  {
    id: 1,
    category: "Technical",
    parameters: [
      { id: 1, parameter: "Passing and retention" },
      { id: 2, parameter: "Dribling" },
      { id: 2, parameter: "Dribling" },
      { id: 2, parameter: "Dribling" },
      { id: 2, parameter: "Dribling" },
    ],
  },
  {
    id: 2,
    category: "Tactical",
    parameters: [
      { id: 1, parameter: "Defending" },
      { id: 2, parameter: "Defending Dobara" },
      { id: 2, parameter: "Defending Dobara" },
      { id: 2, parameter: "Defending Dobara" },
      { id: 2, parameter: "Defending Dobara" },
    ],
  },
  {
    id: 3,
    category: "Physical",
    parameters: [
      { id: 1, parameter: "Weight" },
      { id: 2, parameter: "Height" },
      { id: 2, parameter: "Height" },
      { id: 2, parameter: "Height" },
      { id: 2, parameter: "Height" },
      { id: 2, parameter: "Height" },
    ],
  },
  {
    id: 4,
    category: "General",
    parameters: [{ id: 1, parameter: "Weight" }],
  },
];
const newArray = [...catpar]; // Your data here

function App() {
  const [categories, setCategories] = useState(catpar);

  const handleDragStart = (e, categoryIndex, parameterIndex) => {
    e.dataTransfer.setData('categoryIndex', categoryIndex);
    e.dataTransfer.setData('parameterIndex', parameterIndex);
  };

  const handleDragOver = (e, categoryIndex) => {
    e.preventDefault();
  };

  const handleDrop = (e, categoryIndex) => {
    e.preventDefault();

    const sourceCategoryIndex = e.dataTransfer.getData('categoryIndex');
    const sourceParameterIndex = e.dataTransfer.getData('parameterIndex');

    const updatedCategories = [...categories];
    const movedParameter = updatedCategories[sourceCategoryIndex].parameters.splice(sourceParameterIndex, 1)[0];
    updatedCategories[categoryIndex].parameters.push(movedParameter);

    setCategories(updatedCategories);
  };

  return (
    <div className="App">
      {categories.map((category, categoryIndex) => (
        <div
          key={category.id}
          className="category"
          onDragOver={(e) => handleDragOver(e, categoryIndex)}
          onDrop={(e) => handleDrop(e, categoryIndex)}
        >
          <h3>{category.category}</h3>
          <ul>
            {category.parameters.map((parameter, parameterIndex) => (
              <li
                key={parameter.id}
                draggable
                onDragStart={(e) => handleDragStart(e, categoryIndex, parameterIndex)}
              >
                {parameter.parameter}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App



