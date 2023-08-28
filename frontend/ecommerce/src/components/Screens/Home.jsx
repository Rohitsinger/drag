import React, { useContext, useEffect ,useState} from 'react'
// import { CartContext, ShopContext } from '../../context/CartContext'
import '../NewPro/Home.css'

const Home = () => {

  const [products,setProducts]=useState([])
  // const[pages,setPages] = useState(1)
  const fetchApi =async()=>{
    const response = await fetch('https://fakestoreapi.com/products')
    let finalData = await response.json()
    // console.log(finalData);
     setProducts(finalData)
   }

  useEffect(()=>{
    
    fetchApi()
  },[])

  // const GlobalState = useContext(ShopContext)
  // const dispatch = GlobalState.dispatch
  // console.log(GlobalState);
  return (
    <div className='home'>
   {/* { products.length>0 &&
       
         products.map((item,index)=>{
           item.quantity = 1
         return(
          <div className='card' key={index}>
          
              <img className='image' src={item.image}/>
               <span> ${item.price} </span><br/>
               <span className='spans'> {item.category} </span><br/>
               <button onClick={()=>dispatch({type:'ADD', payload:item})}>Add</button>

               </div>
         )
          
         })
       } */}
       {/* {
        [...Array(products.length/10)].map((_,i)=>{
          return(
          <span>{i}</span>
          )
        })
       } */}
       
    </div>
  )
}

export default Home


{/* <div className='card home_card'>
<h5>Ramesh</h5>
<div className='card-image'>
  <img src='https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2FsbHBhcGVyJTIwNGt8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
</div>
<div className='card-content'>
<i className="material-icons"  style={{color:"red"}}>favorite</i>
  <h6>Title</h6>
  <p>This is an amazing post</p>
  <input type='text' placeholder='add a comment'/>
</div>
</div>
<div className='card home_card'>
<h5>Ramesh</h5>
<div className='card-image'>
  <img src='https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2FsbHBhcGVyJTIwNGt8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
</div>
<div className='card-content'>
<i className="material-icons"  style={{color:"red"}}>favorite</i>
  <h6>Title</h6>
  <p>This is an amazing post</p>
  <input type='text' placeholder='add a comment'/>
</div>
</div>
<div className='card home_card'>
<h5>Ramesh</h5>
<div className='card-image'>
  <img src='https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2FsbHBhcGVyJTIwNGt8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
</div>
<div className='card-content'>
<i className="material-icons" style={{color:"red"}}>favorite</i>
  <h6>Title</h6>
  <p>This is an amazing post</p>
  <input type='text' placeholder='add a comment'/>
</div> */}