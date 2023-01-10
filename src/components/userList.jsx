import { useEffect, useState } from "react";
import '../styles/userList.css'
const UserList = () => {


    let [user,setuser]=useState([])

    useEffect(()=>{

        let fetchData=async()=>{
            let reponce=await fetch('http://localhost:3003/user')
            let data=await reponce.json()
            setuser(data)        
        } 
        fetchData()  
    },[])

    let del=(id,name)=>{
        setuser(user.filter(x=>x.id!=id))
        alert(`${name}delete` )
    }

    return ( 


       
        <div className="userList">
            
            <h1>UserList No:{user.length}</h1>
            <div className="user_list">

                {
                    user.map((a)=>(

                       <div className="UserList">

                        <h1 class="n">{a.name}</h1>
                        <h2 class="n">Age :{a.age}</h2>
                        <h2>email:{a.email}</h2>
                        
                        <h2>Phone number:{a.Phonenumber}</h2>
                        <button onClick={()=>del(a.id,a.name)}>Delete</button>
                       
                       </div>
                    ))
                }
            </div>

        </div>
     );
}
 
export default UserList;