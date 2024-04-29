"use client";
import React, { useRef, useEffect, useState } from 'react';

const MapmundiSection = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('map-section');
      const rect = section.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom >= 0;
      setIsVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (isVisible) {
      video.play();
    } else {
      video.pause();
    }

    const handleVideoEnd = () => {
      video.currentTime = 0; // Reinicia el video al principio
    };

    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, [isVisible]);

  return (
    <div id="map-section" className=" py-5 ">
      <div className="row">
        <div className="col-md-6">
          {/* Texto introductorio */}
          <p className='mb-4'>
            Aquí puedes encontrar información sobre los servicios que ofrecemos.
          </p>
        </div>
        <div className="col-md-6">
          {/* Video */}
          <div className="embed-responsive embed-responsive-16by9">
            <video ref={videoRef} className="embed-responsive-item" loop muted autoPlay>
              <source src="/mapamundi.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapmundiSection;
