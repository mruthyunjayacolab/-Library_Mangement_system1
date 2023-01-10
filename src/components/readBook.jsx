import '../styles/readBooks.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const ReadBook = () => {

    let [book, setBook] = useState([])
    let param = useParams()

    useEffect(() => {

        let fetchdata = async () => {
            let reponce = await fetch(`http://localhost:3003/books/${param.id}`)
            let data = await reponce.json()
            setBook(data)
        }
        fetchdata()

    }, [])

    return (
        <div className="ReadBook">
            <h1>ReadBook..</h1>

            <div className="readbooks">
                <h1>{book.title}</h1>
                <hr />
                <p>{book.shortDescription}</p>
                <p>{book.longDescription}</p>
            </div>
        </div>
    );
}

export default ReadBook;