import '../styles/bookList.css'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const BookList = () => {

    let [book, setBook] = useState([])
    let navigate = useNavigate()

    let read = (id, longDescription) => {

        navigate(`/admin/book-list/${id}`)
    }


    useEffect(() => {

        let fetchData = async () => {
            let reponce = await fetch('http://localhost:3003/books')
            let data = await reponce.json()
            setBook(data)
        }
        fetchData()
    }, [book])

    let del = (id, title) => {

        fetch(`http://localhost:3003/books/${id}`,
            {
                method: 'DELETE'
            })
        alert(`${id, title} Delete a book from server`)
    }

    return (
        <div className="BookList">

            <h1>Booklist No:{book.length}</h1>
            <div className="books_list">

                {
                    book.map((a) => (

                        <div className="book">
                            <img src={a.thumbnailUrl} alt="" />
                            <div className="name2">
                                <h1>{a.title}</h1>

                                <h2>Author :{a.authors.toString()}</h2>
                                <h2>Catgeay:{a.categories.toString()}</h2>
                                <button onClick={() => read(a.id, a.longDescription)} >Read more</button>
                                <button onClick={() => del(a.id, a.title)}>Delete</button>

                            </div>
                            <h2>{a.pageCount}</h2>

                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default BookList;