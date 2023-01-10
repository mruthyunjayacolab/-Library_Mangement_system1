import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../styles/adminAddUser.css'

const Adduser = () => {

    let [name, setname] = useState("")
    let [age, setage] = useState("")
    let [Phonenumber, setphone] = useState("")
    let [email, setemail] = useState("")
    let navigate=useNavigate()


    let sub = (i) => {
        i.preventDefault()
        let data = { name, age, Phonenumber, email }
        console.log(data);


        fetch('http://localhost:3003/user',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            alert("submited")
            navigate('/admin/user-list/')
    }

    return (
        <div className="Adduser">
            <h1>AddUser</h1>
            <form action="" onSubmit={sub}>

                <input type="text" value={name} placeholder="Name" onChange={(i) => setname(i.target.value)} /><br />
                <input type="number" min="1"     value={age} placeholder="Age" onChange={(i) => setage(i.target.value)} /><br />
                <input type="tel" maxLength="10" minLength="10" value={Phonenumber} placeholder="Phone No;" onChange={(i) => setphone(i.target.value)} /><br />
                <input type="text" value={email} placeholder="Email" onChange={(i) => setemail(i.target.value)} /><br />
                <button type="submit">Submit</button>
                {/* <button type='reset' onClick={reset}>Reset</button> */}

            </form>

            {/* <input type="text" /> */}
        </div >
    );
}

export default Adduser;