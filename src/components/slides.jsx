import React, { useState, useEffect, useRef } from 'react';
import Popup from 'reactjs-popup'; // Assuming you have reactjs-popup installed

function InfiniteScrollSlider() {
  const [scrollAmount, setScrollAmount] = useState(20);
  const [photos, setPhotos] = useState([
    "Celebrity Night-Mohit Chauhan.png",
    "CodeX Poster.jpg",
    "Defence Competition.jpeg",
    "DSA Tussle - Poster.png",
    "Shivjayanti Invitation-3.png"
  ]);
  const marqueeRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null); // State to store clicked image data

  useEffect(() => {
    const photoWrapper = marqueeRef.current;
    photoWrapper.addEventListener("animationiteration", handleAnimationIteration);

    return () => {
      photoWrapper.removeEventListener("animationiteration", handleAnimationIteration);
    };
  }, []);

  const handleMouseEnter = () => {
    setScrollAmount(0);
    marqueeRef.current.stop(); // Stop marquee scrolling on hover
  };

  const handleMouseLeave = () => {
    setScrollAmount(20);
    marqueeRef.current.start(); // Restart marquee scrolling on leave
  };

  const handleAnimationIteration = () => {
    setPhotos(prevPhotos => {
      const firstPhoto = prevPhotos.shift(); // Remove the first photo
      return [...prevPhotos, firstPhoto]; // Add the removed photo to the end
    });
  };

  const handleClick = (photo) => {
    setSelectedImage(photo);
  };

  return (
    
    <marquee
      behavior="scroll"
      scrollamount={scrollAmount}
      direction="left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={marqueeRef} // Assign ref to marquee element
    > 
      
      
      <Popup trigger={<div className="photo-wrapper" id="photoWrapper">
        {photos.map((photo, index) => (
          <div key={index} className="photo" onClick={() => handleClick(photo)}>
            <img src={photo} alt={`Image ${index}`} />
          </div>
        ))}
      </div>} position="center" closeOnDocumentClick>
        <div className="Popup1 ">
          <img className="popupimg" src={selectedImage}/>
          <div className="poptext">
            <hr />
            <h1>{selectedImage}</h1>
            <hr />
            <p>What is Lorem Ipsum?Lorem Ipsum is simply dummy text of 
              the printing and typesetting industry. Lorem Ipsum has been 
              the industry's standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to 
              make a type specimen book Ipsum.
            </p>
            <h3>Entry Fee : Rs 500</h3>
            <h3>Venue : Auditorium B12</h3>
            <h3>Timing : 10:00 am - 5:00 pm</h3>
            <h3></h3>
            <hr />
            <div className="form1">
              <form>  
                <label for="name">Name</label><br />
                <input type="text" id="name" name="name" placeholder="Enter your name" required />  <br />
                <label for="registrationNumber">Registration Number</label><br />
                <input type="text" id="registrationNumber" name="registrationNumber" placeholder="Enter your reg number" required />  <br />
                <label for="Paymentproof">Payment Proof</label><br />
                <input className="inputimg" type="file" id="Paymentproof" name="Paymentproof" placeholder="Attach Payment screenshot" required />  <br />
                <button type="submit">Register</button> <button type="submit">Volunteer</button> 
              </form>
              <div>
                <h3 className="qrhead">PAYMENT LINK</h3>
                <img className="popimg" src="./qr_code_barcode.jpg"></img>
              </div>
            </div>
          </div>
        </div>
      </Popup>
    </marquee>
  );
}

export default InfiniteScrollSlider;
