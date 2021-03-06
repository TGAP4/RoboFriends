import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='tc pa2 ma4'>
            <input 
                className='tc pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='Search Robots'    
                onChange={searchChange} 
            />
        </div>
    );
}

export default SearchBox;