import React, { useRef, useState } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaForward, FaBackward } from 'react-icons/fa';
import { formatTime } from '../Utils/utils'; // Utility function to format time

const CustomAudioPlayer = ({ src }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const handleVolumeChange = (e) => {
        const volume = e.target.value;
        setVolume(volume);
        audioRef.current.volume = volume;
        if (volume === 0) {
            setIsMuted(true);
        } else {
            setIsMuted(false);
        }
    };

    const toggleMute = () => {
        if (isMuted) {
            audioRef.current.volume = volume;
            setIsMuted(false);
        } else {
            audioRef.current.volume = 0;
            setIsMuted(true);
        }
    };

    const handleSeek = (e) => {
        const newTime = (e.nativeEvent.offsetX / e.currentTarget.clientWidth) * duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    return (
        <div className="audio-player bg-gray-100 rounded-lg p-4 flex flex-col items-center">
            <audio
                ref={audioRef}
                src={src}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
            />
            <div className="controls flex items-center space-x-4">
                <button onClick={togglePlayPause} className="text-blue-500">
                    {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
                </button>
                <button onClick={() => audioRef.current.currentTime -= 10} className="text-gray-500">
                    <FaBackward size={24} />
                </button>
                <button onClick={() => audioRef.current.currentTime += 10} className="text-gray-500">
                    <FaForward size={24} />
                </button>
                <button onClick={toggleMute} className="text-gray-500">
                    {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
                </button>
            </div>
            <div className="progress-bar w-full bg-gray-300 rounded-full h-2 mt-2 cursor-pointer" onClick={handleSeek}>
                <div
                    className="progress bg-blue-500 h-full rounded-full"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                />
            </div>
            <div className="time text-sm mt-1">
                {formatTime(currentTime)} / {formatTime(duration)}
            </div>
            <div className="volume-control flex items-center space-x-2 mt-2">
                <label htmlFor="volume" className="text-sm">Volume:</label>
                <input
                    id="volume"
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-32"
                />
            </div>
        </div>
    );
};

export default CustomAudioPlayer;
