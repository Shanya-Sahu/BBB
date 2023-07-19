import React from 'react';
import { Outlet } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <Outlet/>    
        </div>
      );
}

export default NavBar;
