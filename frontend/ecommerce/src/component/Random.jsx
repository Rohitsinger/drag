import { useEffect } from "react"
import { useState } from "react"



const Random = ({value=0,onComplete}) => {
const [percent,setPercent] = useState(value)



useEffect(() => {
  if(value>100){
    onComplete()
  }
 setPercent(Math.min(100,Math.max(value,0)))
}, [value])


// const [isHovering,setIsHovering] = useState(false)
// const handleMouseOver = () => {
//     setIsHovering(true);
//   };




//   const handleMouseOut = () => {
//     setIsHovering(false);
//   };

//   const handleDoubleClick = (e) => {

//      e.preventDefault()

//     alert('You double-clicked the element!');

//   }

//   const liftStateUp = () => {
//     alert("State Up")
//   }

  return (
    <div style={{marginTop:"20px",gap:"20px",display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
    {/* <div className='progressBar'>
    <span>{percent.toFixed()}%</span>
    <div style={{width:`${percent}%`}}/> */}
   
    {/* </div> */}
{/*    
    <img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}  style={{width:"250px",height:"250px", padding: '20px',
        transform: isHovering ? 'scale(1.5)' : null}} src='https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&w=600' alt='model image'/>
<form >

  <input onBlur={console.log("Blug")} type='text' style={{outline:"none"}}/><br/>
  <p>{isHovering ? 'Mouse is over the element' : 'Mouse is not over the element'}</p>
  <p onCopy={handleDoubleClick}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ad ea, explicabo eos animi dolore error praesentium est suscipit unde velit, facilis tenetur laudantium ut reprehenderit eligendi veritatis nostrum! Excepturi.</p>
  <button onDoubleClick={handleDoubleClick} style={{margin:"10px",padding:"10px",backgroundColor:"gray",marginLeft:"50px" ,border:"rounded-md"}}>Submit</button>
</form> */}
{/* <h3 style={{cursor:"pointer"}} onClick={liftStateUp}>{details}</h3> */}


 
      
    </div>
  )
}

export default Random
