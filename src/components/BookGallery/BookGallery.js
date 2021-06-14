import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';

const BookGallery = () => {

    const [books, setBooks] = useState([]);


    useEffect(() => {
        fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=INpAkutOEEyPvuFyt1sn1WWVtPxy7AGA')
        .then(res => res.json())
        .then(data => setBooks(data.results.books))
        .catch(err => console.error(err))
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-3">
            {books.map(book => <BookCard book={book} />)}
        </div>
    );
};

export default BookGallery;