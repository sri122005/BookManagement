package com.example.demo.Service;

import com.example.demo.Model.Book;
import com.example.demo.Repo.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    @Autowired
    public BookRepo bookRepo;

//    Book book=new Book(1,"JJK","Kiran","2025",20);


    public void addBook(Book book) {
        bookRepo.save(book);
    }

    public List<Book> getBook() {
        return bookRepo.findAll();
    }

    public void update(Integer id, Book book) {
        Book book1=bookRepo.findById(id).orElse(null);
        if(book1!=null){
            book1.setTitle(book.getTitle());
            book1.setAuthor(book.getAuthor());
            bookRepo.save(book1);
        }
    }

    public void deleteBook(Integer id){
        bookRepo.deleteById(id);
    }
}
