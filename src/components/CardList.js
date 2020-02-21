import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
        <div className='tc'>
            {
                robots.sort((a,b) => a.name > b.name ? 1 : -1)
                .map((user, i) => ( 
                    <Card
                    key={i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}
                    />
                ))
            }
        </div>
    )
}

export default CardList;