import React, { useState, useRef, useEffect } from 'react';
import './VideoPlayer.css'

const VideoPlayer = ({ videoSource }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isPlaying) {
                handleStopVideo();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isPlaying]);

    useEffect(() => {
        const handleFullScreenChange = () => {
            if (!document.fullscreenElement && isPlaying) {
                handleStopVideo();
            }
        };

        document.addEventListener('fullscreenchange', handleFullScreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullScreenChange);
        };
    }, [isPlaying]);

    const handlePlayButtonClick = () => {
        setIsPlaying(true);
        if (containerRef.current) {
            containerRef.current.requestFullscreen();
        }
    };

    const handleStopVideo = () => {
        setIsPlaying(false);
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const handleVideoEnded = () => {
        handleStopVideo();
    };

    return (
        <div className='play-button-box' ref={containerRef}>
            {!isPlaying && (
                <button className='play-button' onClick={handlePlayButtonClick}>Přehrát film</button>
            )}
            {isPlaying && (
                <video ref={videoRef} width="100%" height="100%" autoPlay controls onEnded={handleVideoEnded}>
                    <source src={videoSource} type="video/mp4" />
                    Váš prohlížeč nepodporuje video.
                </video>
            )}
        </div>
    );
};

export default VideoPlayer;
