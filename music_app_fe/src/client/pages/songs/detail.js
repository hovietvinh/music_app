import React, { useEffect,useState } from 'react';
import "./detail.css";
import { ClockCircleOutlined, AudioFilled, CustomerServiceFilled, LikeOutlined, HeartOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from 'react-redux';
import { getSongDetailAction } from '../../../redux/actions/SongAction';
import { useParams } from 'react-router-dom';
import { Empty } from 'antd';
import DOMPurify from 'dompurify';
import CustomAudioPlayer from '../../components/CustomAudioPlayer';
function DetailSong() {
    const { slugSong } = useParams();
    const dispatch = useDispatch();
    const { songs, topic } = useSelector(state => state.SongReducer);
    const [song, setSong] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        dispatch(getSongDetailAction(slugSong));
    }, [slugSong, dispatch]);

    useEffect(() => {
        if (songs.length > 0) {
            setSong(songs[0]);
            setLoading(false);
        }
    }, [songs]);

    if (loading) {
        return <div className="loading">Loading...</div>; 
    }

    if (!song) {
        return <Empty description="Không có dữ liệu" />;
    }

    return (
        <div className='container max-w-[80%] mx-auto'>
            <div className='flex flex-col gap-3'>
                <div className='text-[25px] font-semibold text-blue-400 mb-[10px] mt-[10px]'>{JSON.stringify(song.title)}</div>
                
                <div className='flex items-center gap-6'>
                    <div>
                        <ClockCircleOutlined className='pr-1' /> <span className='font-normal text-gray-600'>20/10/2023</span>
                    </div>
                    <div>
                        <AudioFilled className='pr-1' /> <span className='font-normal text-gray-600'>{JSON.stringify(song.infoSinger.fullName)}</span>
                    </div>
                    <div>
                        <CustomerServiceFilled className='pr-1' /> <span className='font-normal text-gray-600'>{JSON.stringify(topic)}</span>
                    </div>
                    <div>
                        <LikeOutlined className='pr-1 text-blue-700' /> <span className='font-normal text-gray-600'>{JSON.stringify(song.like)} Thích</span>
                    </div>
                </div>
                
                <div>
                    <HeartOutlined className='text-pink-700 pr-1' /> <span className='font-normal text-gray-600'>Bài hát yêu thích</span>
                </div>

                <div className='flex gap-6 items-center'>
                    <div className='avatar w-[100px] h-[100px] overflow-hidden rounded-full border-4 border-solid border-[#F57F20] mr-[20px] mt-[5px]'>
                        <img className='w-full h-full object-cover' src={song.avatar} alt={JSON.stringify(song.title)} />
                    </div>
                    <div className='flex-1'>
                        {song.audio ? (
                           <CustomAudioPlayer src={song.audio} />
                        ) : (
                            <p>No audio available</p>
                        )}
                    </div>
                </div>

                <div className='border border-[#ddd] rounded-6px mb-[20px] mr-40'>
                    <div className='text-[16px] font-bold text-[#f57f20] py-[10px] px-[15px] border-b border-[#ddd]'>Mô tả</div>
                    <div className='text-[14px] py-[10px] px-[15px]'>{JSON.stringify(song.description)}</div>
                </div>

                <div className='border border-[#ddd] rounded-6px mb-[20px] mr-40'>
                    <div className='text-[16px] font-bold text-[#f57f20] py-[10px] px-[15px] border-b border-[#ddd]'>Lời bài hát</div>
                    <div className='text-[14px] py-[10px] px-[15px]'
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(song.lyrics) }}>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default DetailSong;
