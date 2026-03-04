import { useState } from "react";
import axios from "axios";

function BookForm({ refresh, editingBook }) {

    const [book,setBook] = useState({
        title:"",
        author:"",
        year:"",
        price:""
    });

    const handleChange = (e)=>{
        setBook({...book,[e.target.name]:e.target.value});
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();

        await axios.post("http://localhost:8080/add",book);

        setBook({title:"",author:"",year:"",price:""});
        refresh();
    };

    return(
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Title" onChange={handleChange}/>
            <input name="author" placeholder="Author" onChange={handleChange}/>
            <input name="year" placeholder="Year" onChange={handleChange}/>
            <input name="price" placeholder="Price" onChange={handleChange}/>

            <button className="add">Add Book</button>
        </form>
    );
}

export default BookForm;