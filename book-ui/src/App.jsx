import { useEffect, useState } from "react";
import axios from "axios";
import BookForm from "./components/BookForm";
import BookTable from "./components/BookTable";
import "./components/styles.css";

function App(){

    const [books,setBooks] = useState([]);

    const loadBooks = async()=>{
        const res = await axios.get("http://localhost:8080/books");
        setBooks(res.data);
    };

    useEffect(()=>{
        loadBooks();
    },[]);

    return(

        <div className="container">

            <h1 className="title">📚 Book Management System</h1>

            <BookForm refresh={loadBooks}/>

            <BookTable books={books} refresh={loadBooks}/>

        </div>

    );
}

export default App;