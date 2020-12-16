import React from 'react';
import './Navigation.css';


const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <div className="topnav">
                <nav style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <p onClick={() => onRouteChange('home')} className='f4 link dim white grow pa3 pointer'> Home</p>
                <p onClick={() => onRouteChange('findab')} className='f4 link dim white grow pa3 pointer'> Find a bike</p>
                <p onClick={() => onRouteChange('rentab')} className='f4 link dim white grow pa3 pointer'> Rent a bike</p>
                <p onClick={() => onRouteChange('mybikes')} className='f4 link dim white grow pa3 pointer'> My bikes</p>
                <p onClick={() => onRouteChange('contactus')} className='f4 link dim white grow pa3 pointer'> Contact us</p>
                <div className="topnav-right">
                <p onClick={() => onRouteChange('signout')} className='f4 link dim white grow pa3 pointer'>Sign Out</p>
                </div>
                </nav>
            </div>
        );
    }
    else {
        return (
            <div className="topnav">
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim white grow pa3 pointer'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim white grow pa3 pointer'>Register</p>
            </nav>
            </div>

        );

    }
}

export default Navigation;