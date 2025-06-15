import { useState, useRef } from 'react';

export default function Recorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    mediaRecorderRef.current = recorder;
    audioChunks.current = [];

    recorder.ondataavailable = (e) => {
      audioChunks.current.push(e.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(audioChunks.current, { type: 'audio/webm' });
      const url = URL.createObjectURL(blob);
      setAudioURL(url);
    };

    recorder.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md shadow-xl text-center space-y-4">
        <h1 className="text-2xl font-bold">🎙️ Freestyle Recorder</h1>
        {isRecording ? (
          <button
            onClick={stopRecording}
            className="bg-red-600 px-6 py-2 rounded hover:bg-red-500 transition"
          >
            Stop Recording
          </button>
        ) : (
          <button
            onClick={startRecording}
            className="bg-indigo-600 px-6 py-2 rounded hover:bg-indigo-500 transition"
          >
            Start Recording
          </button>
        )}

        {audioURL && (
          <div className="mt-4">
            <audio controls src={audioURL} className="w-full"></audio>
            <a
              href={audioURL}
              download="freestyle.webm"
              className="text-indigo-400 block mt-2 underline text-sm"
            >
              Download Recording
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
