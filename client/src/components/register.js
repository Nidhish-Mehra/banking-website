import {useState} from 'react'
import M from 'materialize-css'
import { Link } from 'react-router-dom'

function Register() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [balance,setBalance] = useState("")
    const createUser = ()=>{
        fetch("/user",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                balance
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html:data.error, classes:"#c62828 red darken-3"})
            }
            else{
                M.toast({html: data.message, classes:"#43a047 green darken-1"})
            }
        }).catch(error=>{
            console.log(error)
        })
    }
    return (
      <div className="card" style={{maxWidth:'500px', padding: '10px' ,margin: '200px auto', textAlign: 'center'}}>
          <input 
          placeholder="name" 
          type="text" 
          value={name} 
          onChange={(e)=>{
              setName(e.target.value)
            }}
          />
          <input 
          placeholder="email" 
          type="text"
          value={email} 
          onChange={(e)=>{
              setEmail(e.target.value)
            }}
          />
          <input 
          placeholder="balance" 
          type="number"
          value={balance} 
          onChange={(e)=>{
              setBalance(e.target.value)
            }}
          />
          <button className="waves-effect waves-light btn large-btn"
          onClick={()=>createUser()}
          >
              Register
          </button><br/>
      </div>
    );
  }
  
  export default Register;