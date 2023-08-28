import React,{useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../NewPro/Signup.css'
import {useForm} from 'react-hook-form'
import { signInWithGoogle } from '../../Firebase'
const Signup = () => {
  const {register,handleSubmit,watch,formState:{errors}} = useForm()
// console.log(watch("username"));

//   const PostData= async()=>{
//    const result =  await axios.post("/api/signup",{
//       method:"post",
//       headers:{
//         "Accept": "application/json",
//         "Content-Type":"application/json"
//      },
//       body:JSON.stringify({
//         name:"",
//         password:"",
//         email:""
//       }),
    
  
//      }).then(res=>res.json())
//      .then(data=>{console.log(data)});
//   }

// const handleChange =(e)=>{
  
//   const {name,value} = e.target
  
//   setDetails(prev=>{
//     return({
//       ...prev, [name]:value
//     })
//   })
// }

const onSubmit  = data=>console.log(data);
  
 
  return (
//     <div>
//          <div className='mycard'>
//      <div className="card auth-card">
//       <h2>Instagram</h2>
//       <input type='text' name="name" placeholder='name' value={details.name} onChange={handleChange}/>
//       <input type='email' name="email" placeholder='email' value={details.email} onChange={handleChange}/>
//       <input type='password' name="password" placeholder='password' value={details.password} onChange={handleChange}/>
//       <button className="btn waves-effect waves-light" onClick={()=>PostData()} >Signup
    
//   </button>
//  <h5> 
//  <Link to='/signin'>Already have an account?</Link>
//   </h5>
        
//       </div>
//     </div>
//     </div>
<section>
  <div className='register'>
    <div className='col-1'>
      <h2>Signin</h2><br/>
      <span>Register and Enjoy the service</span>
      <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("username")} placeholder="username"/>
        <input type="email" {...register("email")}  placeholder="email"/>
        <input type="password" {...register("password",{required:true})}  placeholder="password"/>
        <input type="mobile" {...register("mobile",{required:true})}  placeholder="mobile"/><br/>
        <input type="file" {...register("file",{required:true})}  placeholder="uploadImage"/><br/>
        {errors.type?.type==="required" && "Mobile Number is required"}
        <button className='btn' onClick={signInWithGoogle}>Sign In</button>
      </form>
    </div>
    <div className='col-2'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7KSjtDu3kIkgq5hMUwSpEVc2F9N-NOzkLnQ&usqp=CAU'/>
    </div>
  </div>
</section>
  )
}

export default Signup
