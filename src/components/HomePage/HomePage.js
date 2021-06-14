import React from 'react';
import BookGallery from '../BookGallery/BookGallery';
import NavBar from '../NavBar/NavBar';

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <BookGallery />
        </div>
    );
};

export default HomePage;