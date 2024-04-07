import React from 'react';
import ReactDOM from 'react-dom/client';
import NAVbar2 from './user-nav.jsx';
import Footer from './footer.jsx';
import Slide from './slides.jsx';
import Card from './card.jsx';
export const User = ()=>(
    <div>
        <NAVbar2 />
        
        <div className = "event-heading">
            <p>Ongoing Events</p>
            <hr/>
            <Slide />
            <p>Upcoming Events</p>
            <hr/>
            <Slide />
            <p>Clubs</p>
            <hr/>
            <div className="clubs">
                <Card className="ccard" imageUrl="aiclub (1).jpg"
                description="This club is for artificial intelligence stuff"
                />
                <Card className="ccard" imageUrl="android.jpg"
                description="This club is for android stuff"
                />
                <Card className="ccard" imageUrl="ecell.jpg"
                description="This club is for business stuff"
                />
                <Card className="ccard" imageUrl="google.jpg"
                description="This club is for googling stuff"
                />
                <Card className="ccard" imageUrl="insight.png"
                description="This club is for (no idea) stuff"
                />
            </div>
        </div>
        <Footer />
    </div>

);

export default User;