import React from 'react';

const BookCard = ({ book }) => {
    return (
        <div className="flex justify-center shadow p-2">
            <div className="inline-block">
                <img className="inline-block" src={book.book_image} alt="" />
                <h1 className="text-lg font-semibold">{book.title}</h1>
                <div className="flex space-between">
                    <div className="flex-1"><p className="text-lg">price: {book.price}$</p></div>
                    <div className="flex-1 text-right"><p><button className="bg-green-400 rounded-sm border text-white p-1">Buy Now</button></p></div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;