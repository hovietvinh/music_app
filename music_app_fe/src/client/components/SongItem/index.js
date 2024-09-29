
import { Link } from 'react-router-dom';
import {LikeOutlined,AudioOutlined,ClockCircleOutlined } from "@ant-design/icons"
function SongItem(props) {
    const {song} = props
    return (
        <>
            <div className="flex box-item bg-white border border-gray-300 rounded-md">
                <div className='w-[135px] aspect-w-1 aspect-h-1 rounded-md overflow-hidden'>
                    <Link to={`../songs/detail/${song.slug}`}>
                        <img className='w-[100%] h-[100%] object-cover' src={`${song.avatar}`}></img>
                    </Link>
                </div>
                <div className='p-[10px] flex-1'>
                    <div className='whitespace-pre-wrap overflow-hidden truncate mb-[7px] pb-[5px] line-clamp-1'>
                        <Link to={`../songs/detail/${song.slug}`} className='font-medium text-[17px] hover:text-[#7c00c8] hover:no-underline' >
                            {song.title}
                        </Link>
                    </div>
                    <div className='text-[13px] font-medium text-[#282828] pb-[3px] mb-[2px]'>
                        <AudioOutlined /> {song.infoSinger? `${song.infoSinger.fullName}`:`null`}
                    </div>
                    <div className='text-[13px] font-medium text-[#004cd0] pb-[3px] mb-[2px]'>
                        <LikeOutlined /> {song.like.length}
                    </div>
                    <div className='text-[13px] font-medium text-[#585858]'>
                        <ClockCircleOutlined /> Hôm nay
                    </div>

                </div>
            </div>
        </>
    );
}

export default SongItem;