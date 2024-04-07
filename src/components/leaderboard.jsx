import React from 'react';
import ReactDOM from 'react-dom/client';
import NAVbar2 from './user-nav.jsx';
import Ranks from './rank_ele.jsx';
const Data = [
    { "img": "aiclub (1).jpg", "name": "AI Club", "index": 1 },
    { "img": "android.jpg", "name": "GDSC Club", "index": 2 },
    { "img": "ecell.jpg", "name": "Android Club", "index": 3 },
    { "img": "google.jpg", "name": "Entrepreneurship Cell", "index": 4 },
    { "img": "insight.png", "name": "Insight Club", "index": 5 },
    { "img": "sdc.png", "name": "Software development Cell", "index": 6 },
    { "img": "codee.png", "name": "Coding Block", "index": 7 },
    { "img": "web.png", "name": "Web Developement Club", "index": 8 },
    { "img": "culture.png", "name": "Culture Club", "index": 9 },
    { "img": "nature.png", "name": "Nature and Trekking Club", "index": 10 }
];
export const LeaderBoard = ()=>(
    <div>
        <NAVbar2/>
        <Ranks data={Data}/>
        
    </div>
);

export default LeaderBoard;