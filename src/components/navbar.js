import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';

function NAVbar() {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const typingText = "EVENTspark";

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (index < typingText.length) {
                setText(prevText => prevText + typingText.charAt(index));
                setIndex(prevIndex => prevIndex + 1);
            } else {
                clearInterval(typingInterval);
            }
        }, 100); 

        return () => clearInterval(typingInterval);
    }, [index]);



    return (
        <div className="main">
            <div className="nav">
                <input type="checkbox" id="nav-check"/>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </label>
                </div>
                
                <div className="nav-links">
                    <a href="" >Home</a>
                    <a href="#About-div" >About Us</a>
                    <a href="" >User</a>
                    <a href="" >Admin</a>
                    <a href="/login" >SignUp / Login</a>
                </div>
            </div>
            <div className="main-text">
                {text}
            </div>
            <div className="main-btn">
                <button class="m-btn">Explore</button>
                <button class="m-btn">Contact</button>
            </div>
        </div>
    );
}

export default NAVbar;
