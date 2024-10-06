import React, { useState, useEffect } from 'react';
import { LoadingOutlined, AudioOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import CustomAudioPlayer from '../CustomAudioPlayer';

const beforeUploadAudio = (file) => {
  const isAudio = file.type.startsWith('audio/');
  if (!isAudio) {
    message.error('You can only upload audio files!');
    return Upload.LIST_IGNORE;
  }
  const isLt10M = file.size / 1024 / 1024 < 10; // Limit audio file size to 10MB
  if (!isLt10M) {
    message.error('Audio must be smaller than 10MB!');
    return Upload.LIST_IGNORE;
  }
  return true;
};

const UploadAudio = ({ onAudioSelect, defaultAudio }) => {
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState(defaultAudio || null);

  useEffect(() => {
    setAudioUrl(defaultAudio); // Update audioUrl when defaultAudio changes
  }, [defaultAudio]);

  const handleChange = (info) => {
    if (info.file.status === 'done') {
      const file = info.file.originFileObj;
      const url = URL.createObjectURL(file);
      setAudioUrl(url);
      onAudioSelect(file);
    }
  };

  const customRequest = ({ file, onSuccess }) => {
    const url = URL.createObjectURL(file);
    setAudioUrl(url);
    onAudioSelect(file);
    onSuccess(); // Simulate success
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <AudioOutlined />}
      <div style={{ marginTop: 8 }}>Upload Audio</div>
    </div>
  );
  
  return (
    <>  
        <Upload
        name="audio"
        accept="audio/*" // Allow all audio types
        listType="picture-card"
        className="audio-uploader"
        showUploadList={false}
        beforeUpload={beforeUploadAudio}
        onChange={handleChange}
        customRequest={customRequest}
    >
        {!audioUrl && (
        uploadButton
      )}
        
    </Upload>

        {audioUrl && (
        
        <>
            <CustomAudioPlayer src={audioUrl}/>
        </>
        
      ) }
    </>
    
    
  );
};

export default UploadAudio;
