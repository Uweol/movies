import React from 'react';
import {Link} from 'react-router-dom'
import './navigation.scss'

const Navigation = () => {
    return (
        <div className='nav'>
            <ul>
                <Link to = '/'><li><a href='.'>Home</a></li></Link>
                <Link to = '/about'><li><a href='.'>About</a></li></Link>
            </ul>
        </div>
    );
};

export default Navigation;