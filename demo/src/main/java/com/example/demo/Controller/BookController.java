package com.example.demo.Controller;

import com.example.demo.Model.Book;
import com.example.demo.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class BookController {
    @Autowired
    BookService bookService;

    @PostMapping("/add")
    public void addBook(@RequestBody Book book){
        bookService.addBook(book);
    }

    @GetMapping("/get")
    public List<Book> getBook(){
        return bookService.getBook();
    }

    @PutMapping("/put/{id}")
    public void update(@PathVariable Integer id,@RequestBody Book book){
        bookService.update(id,book);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteBook(@PathVariable Integer id){
        bookService.deleteBook(id);
        return "Book Deleted";
    }

}
