import React, { useState } from 'react';
import Link from '../Link/Link';
import { BeakerIcon,Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const [open , setOpen] = useState(false)
    const routes = [
        {id:1,Name:'Home',path:'/home'},
        {id:2,Name:'Product',path:'/home'},
        {id:3,Name:'Services ',path:'/home'},
        {id:4,Name:'Contact',path:'/home'},
        {id:5,Name:'Login',path:'/home'}
    ]
    return (
        <nav>
            <div onClick = { ()=> setOpen (!open)} className = "h-6 w-6  md:hidden">
            {
                open ?<XMarkIcon/>:<Bars3Icon/>  
            }
            </div>
            
            <ul className={`md:flex justify-center absolute ${open? 'top-4' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;