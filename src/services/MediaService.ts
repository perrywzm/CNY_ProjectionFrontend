import React from 'react';

export function useUserMedia(requestedMedia) {
  const [mediaStream, setMediaStream] = React.useState(null);

  React.useEffect(() => {
    async function enableStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(requestedMedia);
        console.log(stream)
        setMediaStream(stream);
      } catch(err) {
        console.log(err)
        // Removed for brevity
      }
    }

    if (!mediaStream) {
      enableStream();
    } else {
      return function cleanup() {
        mediaStream.getTracks().forEach(track => {
          track.stop();
        });
      }
    }
  }, [mediaStream, requestedMedia]);

  return mediaStream;
}