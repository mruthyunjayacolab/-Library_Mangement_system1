import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../styles/addBooks.css'

const AddBook = () => {
//title pageCount shortDescription longDescription  authors thumbnailUrl categories
    let [title, settitle] = useState("")
    let [authors,setauthors]=useState("")
    let[categories,setcategories]=useState("")
    let [pageCount, setpageCount] = useState("")
    let [shortDescription, setshortDescription] = useState("")
    let[longDescription,setlongDescription]=useState("")
    let [thumbnailUrl, setthumbnailUrl] = useState("")
    let navigate=useNavigate()


    let sub = (i) => {
        i.preventDefault() // preventing the loading of data while 
        let data = { title, authors, categories,pageCount, shortDescription,longDescription,thumbnailUrl }
        console.log(data);


        fetch('http://localhost:3003/books',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })


            alert("Add Seccessfuly")
            navigate('/admin/book-list')

    }

    let reset=()=>{
        setauthors("")
        setcategories("")
        setlongDescription("")
        settitle("")
        setpageCount("")
        setshortDescription("")
        setthumbnailUrl("")
        
    }

    return (
        <div className="AddBook">
            <h1>AddBook</h1>
            <form action="" onSubmit={sub}>

                <input type="text" required value={title} placeholder="Title" onChange={(i) => settitle(i.target.value)} /><br />
                <input type="text"  required  value={authors} placeholder="Authors" onChange={(i) => setauthors(i.target.value)} /><br />
                <input type="text"  required  value={categories} placeholder="Categes" onChange={(i) => setcategories(i.target.value)} /><br />
                <input type="number"  required  value={pageCount} placeholder="pageCount;" onChange={(i) => setpageCount(i.target.value)} /><br />
                <textarea type="textarea"  required  value={shortDescription} placeholder="Shot Discreptions" onChange={(i) => setshortDescription(i.target.value)} /><br />
                <textarea type="textarea"  required  value={longDescription} placeholder="Long Discretion" onChange={(i) => setlongDescription(i.target.value)} /><br />
                <input type="text"  required  value={thumbnailUrl} placeholder="thumbnails" onChange={(i) => setthumbnailUrl(i.target.value)} /><br />
                <button type="submit">Submit</button>
                <button type='reset' onClick={reset}>Reset</button>

            </form>

            {/* <input type="text" /> */}
        </div >
    );
}

export default AddBook;