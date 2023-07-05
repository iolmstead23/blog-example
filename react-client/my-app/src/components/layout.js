import React from 'react';
import Navbar from './navbar.js'

const Layout = ({children}) =>{
    return(
        <>
            <div>
                <Navbar />
            </div>
            <main>{children}</main>
        </>
    )
}

export default Layout;