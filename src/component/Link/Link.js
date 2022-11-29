import React from 'react';

const Link = ({route}) => {
    return (
            <li ><a className='m-4 text-5xl' href={route.path}>{route.Name}</a></li> 
    );
};

export default Link;