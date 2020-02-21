import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

    robots.map((user, i) => {
        if (robots[i].name.toLowerCase().startsWith('mr. ') || robots[i].name.toLowerCase().startsWith('ms. ')) {
            robots[i].name = robots[i].name.slice(4);
        } else if (robots[i].name.toLowerCase().startsWith('mrs. ')) {
            robots[i].name = robots[i].name.slice(5);
        }
        return robots;
    });

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