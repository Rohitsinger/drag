
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './App.css'
import Random from './component/Random'
import { useEffect, useState } from 'react'
import { tenureData } from './utils/constants'
import DragandDrop from './component/dragandDrop'



function DragandDrop() {

  const [sports, setSports] = useState([
    "Football",
    "Basketball",
    "Baseball",
    "Soccer",
    "Hockey",
    "Running",
    "Chess",
    "Karate",
    "Kungfu",
  ]);
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
  const [dragItemIndex, setDragItemIndex] = useState();
  const [dragOverItemIndex, setDragOverItemIndex] = useState();
  const [array,setArray] = useState(catpar)

  const handleDragStart = index => {
    setDragItemIndex(index)
  };

  const handleDragOver = event => {
    event.preventDefault();
  }

  const handleDrop = (index) => {
    const _sports = [...array];
    const dragItem = _sports.splice(dragItemIndex, 1);
    _sports.splice(dragOverItemIndex, 0, dragItem);
    setArray(_sports);
  }

  const handleDragEnter = index => {
    setDragOverItemIndex(index)
  }

  const handleDragLeave = (event) => {
    setDragOverItemIndex(undefined)
  }

  const handleDragEnd = event => {
    setDragItemIndex(undefined);
    setDragOverItemIndex(undefined);
  }

  return (
    <div className='grid-container'>
         <div className="list" 
             draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragLeave={handleDragLeave}
            onDragEnd={handleDragEnd}>
         {array.map((i)=>(
          <div >
          {i}
            {i.parameters.map((k,index)=>(
              <div className="lists"    draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragLeave={handleDragLeave}
            onDragEnd={handleDragEnd}>
              {k.parameter}
              </div>
            ))}
          </div>
         )
         )}
        {/* {sports.map((sport, index) => (
          <li
            key={index}
            className= "list-item"
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragLeave={handleDragLeave}
            onDragEnd={handleDragEnd}
            
          >
            <span>{index}</span>
            <h3>{sport}</h3>
          </li>
        ))} */}
      </div>
 
    </div>
  )
}

export default DragandDrop
{/* <BrowserRouter>
    <Navbars/>
  <Filters/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
       <Route path='/signup' element={<Signup/>}/>
      <Route path='/profile' element={<Profile/>}/>
  
      <Route path='/products' element={<Products/>}/>
      
    </Routes>
    </BrowserRouter> */}