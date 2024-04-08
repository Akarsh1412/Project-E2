import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import NAVbar2 from './user-nav.jsx';
import Footer from './footer.jsx';
import Card from './card.jsx';
import eventsData from './events.js';
import Popup from 'reactjs-popup'; 
import Feedback from './feedback.jsx';
const Fdbpage = () => {
  const [activeClubInfo, setActiveClubInfo] = useState(null);

  const handleExploreClick = (clubName) => {
    setActiveClubInfo(clubName);
  };

  return (
    <div>
      <NAVbar2 />
      <div className="clubs1">
        {eventsData.map((club) => (
          <Card
            className="ccard"
            key={club.clubName}
            imageUrl={club.imageUrl}  
            description={club.clubName}
            onExplore={() => handleExploreClick(club.clubName)}
          />
        ))}
      </div>
      {activeClubInfo && (
        
        <div className="club-info-1">
            <hr />
          <h2>{activeClubInfo}</h2>
          <h3>Recent Events</h3>
          <ul>
            {eventsData.find((club) => club.clubName === activeClubInfo)?.eventsData.map(
              (event) => (

                <li key={event.title}>
                    <span>{event.date}</span> {event.title}
                    {event.venue && ` (${event.venue})`}
                    <Popup trigger={<button className="libtn">Rate</button>} position="center" closeOnDocumentClick>
                        <div className="Popup2">
                        <Feedback />
                        </div>
                    </Popup>
                </li>
                
              )
            )}
          </ul>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Fdbpage;
