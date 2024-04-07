import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import NAVbar from './navbar.jsx';
function NavText(){
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
        <NAVbar />
        <div className="main-text">
                {text}
            </div>
            <div className="main-btn">
                <button class="m-btn">Explore</button>
                <button class="m-btn">Contact</button>
            </div>
    </div>
);
};

export default NavText