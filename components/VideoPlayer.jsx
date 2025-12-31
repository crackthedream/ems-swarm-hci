"use client";

import { useState, useRef, useEffect } from 'react';

export default function VideoPlayer({ 
  src, 
  poster, 
  title, 
  caption, 
  className = '',
  autoplay = false,
  loop = false,
  muted = true,
  controls = true
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleError = (e) => {
      const error = video.error;
      let errorMsg = 'Failed to load video.';
      
      if (error) {
        switch (error.code) {
          case error.MEDIA_ERR_ABORTED:
            errorMsg = 'Video loading was aborted.';
            break;
          case error.MEDIA_ERR_NETWORK:
            errorMsg = 'Network error while loading video.';
            break;
          case error.MEDIA_ERR_DECODE:
            errorMsg = 'Video decoding error. The video codec may not be supported. Try re-encoding the video to H.264.';
            break;
          case error.MEDIA_ERR_SRC_NOT_SUPPORTED:
            errorMsg = 'Video format not supported by your browser.';
            break;
          default:
            errorMsg = `Video error (code: ${error.code}). The video may need to be re-encoded to H.264 format.`;
        }
      }
      
      console.error('Video error details:', {
        code: error?.code,
        message: error?.message,
        src: video.src,
        networkState: video.networkState,
        readyState: video.readyState,
        videoWidth: video.videoWidth,
        videoHeight: video.videoHeight
      });
      
      setError(errorMsg);
      setIsLoading(false);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
      setError(null);
    };

    const handleLoadedMetadata = () => {
      setIsLoading(false);
      console.log('Video metadata loaded successfully:', {
        duration: video.duration,
        videoWidth: video.videoWidth,
        videoHeight: video.videoHeight,
        readyState: video.readyState,
        src: video.src
      });
    };

    const handleLoadStart = () => {
      console.log('Video load started:', video.src);
      setIsLoading(true);
      setError(null);
    };

    const handleStalled = () => {
      console.warn('Video loading stalled');
    };

    video.addEventListener('error', handleError);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('stalled', handleStalled);

    return () => {
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('stalled', handleStalled);
    };
  }, [src]);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.error('Play error:', err);
        setError('Unable to play video. Please try clicking the play button.');
      });
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative rounded-lg overflow-hidden shadow-lg bg-black/5 dark:bg-black/20">
        {isLoading && !error && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800 z-10">
            <div className="text-slate-400 dark:text-slate-500">Loading video...</div>
          </div>
        )}
        
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800 z-10 p-4">
            <div className="text-center">
              <div className="text-red-500 dark:text-red-400 mb-2">⚠️</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{error}</div>
              <div className="text-xs text-slate-500 dark:text-slate-500 mt-2">
                File: {src.split('/').pop()}
              </div>
            </div>
          </div>
        )}
        
        <video
          ref={videoRef}
          src={encodeURI(src)}
          poster={poster ? encodeURI(poster) : undefined}
          className="w-full h-auto rounded-lg"
          controls={controls}
          autoPlay={autoplay}
          loop={loop}
          muted={muted}
          playsInline
          preload="metadata"
          onPlay={handlePlay}
          onPause={handlePause}
        >
          <source src={encodeURI(src)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {title && (
        <h3 className="text-lg font-semibold mt-4 mb-2 text-navy dark:text-white">{title}</h3>
      )}
      
      {caption && (
        <p className="figure-caption mt-1">{caption}</p>
      )}
    </div>
  );
}

