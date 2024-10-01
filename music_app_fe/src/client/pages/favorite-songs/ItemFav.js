// import React from 'react';

import { Link } from "react-router-dom";
import {HeartOutlined,ClockCircleOutlined,AudioOutlined} from '@ant-design/icons';

function ItemFav(props) {
    const {song} = props
    console.log(song);
    return (
        <>
        
            <div className="flex box-item shadow-sm bg-white border border-gray-300 rounded-md">
                <div className='w-[135px] aspect-w-1 aspect-h-1 rounded-md overflow-hidden'>
                    <Link to={`../songs/detail/${song._doc.slug}`}>
                        <img className='w-[100%] h-[100%] object-cover' src={`${song._doc.avatar}`}></img>
                    </Link>
                </div>
                <div className='p-[10px] flex-1'>
                    <div className='whitespace-pre-wrap overflow-hidden truncate mb-[7px] pb-[5px] line-clamp-1'>
                        <Link to={`../songs/detail/${song._doc.slug}`} className='font-medium text-[17px] hover:text-blue-800 text-blue-400 hover:no-underline' >
                            {song._doc.title}
                        </Link>
                    </div>
                    <div className='text-[13px] font-medium text-[#282828] pb-[3px] mb-[2px]'>
                        <AudioOutlined /> {song.infoSinger? `${song.infoSinger.fullName}`:`null`}
                    </div>
                    <div className='text-[13px] font-medium text-pink-400 pb-[3px] mb-[2px]'>
                        <HeartOutlined /> Yêu thích
                    </div>
                    <div className='text-[13px] font-medium text-[#585858]'>
                        <ClockCircleOutlined /> Hôm nay
                    </div>

                </div>
            </div> 
        
        </>
    );
}

export default ItemFav;