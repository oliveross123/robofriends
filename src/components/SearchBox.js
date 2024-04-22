import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
    <div className='pa2'>
        <input 
        className='pa3 ba b--green'
        type='search' 
        placeholder='search robots'
        onChange={searchChange}
        style={{ backgroundColor: '#ADD8E6' }} // Set background color to light blue
        />
    </div>
    );
}

export default SearchBox;
