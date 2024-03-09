import React, { useState } from 'react';
import NAVbar from './navbar.js';
import About from './about.js'
import Footer from './footer.js'
function Landing(){
    return(
        <div>
            < NAVbar />
            < About />
            < Footer />
        </div>
    );
}

export default Landing;