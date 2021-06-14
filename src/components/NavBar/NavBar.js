import React from 'react';

const NavBar = () => {
    return (
        <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0 inner">

                <a href="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">Bookland</a><br />
                <span className="text-xs text-grey-dark">Find your source of knowledge</span>

            </div>

            <div className="sm:mb-0 self-center">
                <a href="/" className="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">Home</a>
                <a href="#asd" className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">About</a>
                <a href="#ad" className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">Contact</a>

            </div>
        </nav>
    );
};

export default NavBar;