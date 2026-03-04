import axios from "axios";

function BookTable({books,refresh}){

    const deleteBook = async(id)=>{
        await axios.delete(`http://localhost:8080/delete/${id}`);
        refresh();
    };

    return(

        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Year</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
            </thead>

            <tbody>
            {books.map((b)=>(
                <tr key={b.id}>
                    <td>{b.id}</td>
                    <td>{b.title}</td>
                    <td>{b.author}</td>
                    <td>{b.year}</td>
                    <td>{b.price}</td>

                    <td>
                        <button className="delete" onClick={()=>deleteBook(b.id)}>
                            Delete
                        </button>
                    </td>

                </tr>
            ))}
            </tbody>
        </table>

    );
}

export default BookTable;