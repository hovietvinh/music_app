import { useParams } from 'react-router-dom';
import BoxHead from "../../components/BoxHead";
import { Link } from 'react-router-dom';
import {LikeOutlined,AudioOutlined,ClockCircleOutlined } from "@ant-design/icons"
function Songs() {
    const { slugTopic } = useParams();
    console.log(slugTopic);
    return (
        <>
            <div className="container max-w-[80%] mx-auto">
                <BoxHead title="Danh sách bài hát"/>
                <div className="grid grid-cols-4 gap-4">

                <div className="flex box-item bg-white border border-gray-300 rounded-md">
                        <div className='w-[135px] aspect-w-1 aspect-h-1 rounded-md overflow-hidden'>
                            <Link to={`songs/detail/:slugSong`}>
                                <img className='w-[100%] h-[100%] object-cover' src="https://backend.daca.vn/assets/images/cat-doi-noi-sau.jpg"></img>
                            </Link>
                        </div>
                        <div className='p-[10px] flex-1'>
                            <div className='whitespace-pre-wrap overflow-hidden truncate mb-[7px] pb-[5px] line-clamp-1'>
                                <Link className='font-medium text-[17px] hover:text-[#7c00c8] hover:no-underline' to={`songs/detail/:slugSong`}>
                                    Cắt đôi nổi sầu
                                </Link>
                            </div>
                            <div className='text-[13px] font-medium text-[#282828] pb-[3px] mb-[2px]'>
                                <AudioOutlined /> Tăng Duy Tân
                            </div>
                            <div className='text-[13px] font-medium text-[#004cd0] pb-[3px] mb-[2px]'>
                                <LikeOutlined /> 1000
                            </div>
                            <div className='text-[13px] font-medium text-[#585858]'>
                                <ClockCircleOutlined /> Hôm nay
                            </div>

                        </div>
                    </div>

                    <div className="flex box-item bg-white border border-gray-300 rounded-md">
                        <div className='w-[135px] aspect-w-1 aspect-h-1 rounded-md overflow-hidden'>
                            <Link to={`songs/detail/:slugSong`}>
                                <img className='w-[100%] h-[100%] object-cover' src="https://backend.daca.vn/assets/images/cat-doi-noi-sau.jpg"></img>
                            </Link>
                        </div>
                        <div className='p-[10px] flex-1'>
                            <div className='whitespace-pre-wrap overflow-hidden truncate mb-[7px] pb-[5px] line-clamp-1'>
                                <Link className='font-medium text-[17px] hover:text-[#7c00c8] hover:no-underline' to={`songs/detail/:slugSong`}>
                                    Cắt đôi nổi sầu
                                </Link>
                            </div>
                            <div className='text-[13px] font-medium text-[#282828] pb-[3px] mb-[2px]'>
                                <AudioOutlined /> Tăng Duy Tân
                            </div>
                            <div className='text-[13px] font-medium text-[#004cd0] pb-[3px] mb-[2px]'>
                                <LikeOutlined /> 1000
                            </div>
                            <div className='text-[13px] font-medium text-[#585858]'>
                                <ClockCircleOutlined /> Hôm nay
                            </div>

                        </div>
                    </div>

                    <div className="flex box-item bg-white border border-gray-300 rounded-md">
                        <div className='w-[135px] aspect-w-1 aspect-h-1 rounded-md overflow-hidden'>
                            <Link to={`songs/detail/:slugSong`}>
                                <img className='w-[100%] h-[100%] object-cover' src="https://backend.daca.vn/assets/images/cat-doi-noi-sau.jpg"></img>
                            </Link>
                        </div>
                        <div className='p-[10px] flex-1'>
                            <div className='whitespace-pre-wrap overflow-hidden truncate mb-[7px] pb-[5px] line-clamp-1'>
                                <Link className='font-medium text-[17px] hover:text-[#7c00c8] hover:no-underline' to={`songs/detail/:slugSong`}>
                                    Cắt đôi nổi sầu
                                </Link>
                            </div>
                            <div className='text-[13px] font-medium text-[#282828] pb-[3px] mb-[2px]'>
                                <AudioOutlined /> Tăng Duy Tân
                            </div>
                            <div className='text-[13px] font-medium text-[#004cd0] pb-[3px] mb-[2px]'>
                                <LikeOutlined /> 1000
                            </div>
                            <div className='text-[13px] font-medium text-[#585858]'>
                                <ClockCircleOutlined /> Hôm nay
                            </div>

                        </div>
                    </div>

                    

                   

                    <div className="flex box-item bg-white border border-gray-300 rounded-md">
                        <div className='w-[135px] aspect-w-1 aspect-h-1 rounded-md overflow-hidden'>
                            <Link to={`songs/detail/:slugSong`}>
                                <img className='w-[100%] h-[100%] object-cover' src="https://backend.daca.vn/assets/images/cat-doi-noi-sau.jpg"></img>
                            </Link>
                        </div>
                        <div className='p-[10px] flex-1'>
                            <div className='whitespace-pre-wrap overflow-hidden truncate mb-[7px] pb-[5px] line-clamp-1'>
                                <Link className='font-medium text-[17px] hover:text-[#7c00c8] hover:no-underline' to={`songs/detail/:slugSong`}>
                                    Cắt đôi nổi sầu
                                </Link>
                            </div>
                            <div className='text-[13px] font-medium text-[#282828] pb-[3px] mb-[2px]'>
                                <AudioOutlined /> Tăng Duy Tân
                            </div>
                            <div className='text-[13px] font-medium text-[#004cd0] pb-[3px] mb-[2px]'>
                                <LikeOutlined /> 1000
                            </div>
                            <div className='text-[13px] font-medium text-[#585858]'>
                                <ClockCircleOutlined /> Hôm nay
                            </div>

                        </div>
                    </div>

                    <div className="flex box-item bg-white border border-gray-300 rounded-md">
                        <div className='w-[135px] aspect-w-1 aspect-h-1 rounded-md overflow-hidden'>
                            <Link to={`songs/detail/:slugSong`}>
                                <img className='w-[100%] h-[100%] object-cover' src="https://backend.daca.vn/assets/images/cat-doi-noi-sau.jpg"></img>
                            </Link>
                        </div>
                        <div className='p-[10px] flex-1'>
                            <div className='whitespace-pre-wrap overflow-hidden truncate mb-[7px] pb-[5px] line-clamp-1'>
                                <Link className='font-medium text-[17px] hover:text-[#7c00c8] hover:no-underline' to={`songs/detail/:slugSong`}>
                                    Cắt đôi nổi sầu
                                </Link>
                            </div>
                            <div className='text-[13px] font-medium text-[#282828] pb-[3px] mb-[2px]'>
                                <AudioOutlined /> Tăng Duy Tân
                            </div>
                            <div className='text-[13px] font-medium text-[#004cd0] pb-[3px] mb-[2px]'>
                                <LikeOutlined /> 1000
                            </div>
                            <div className='text-[13px] font-medium text-[#585858]'>
                                <ClockCircleOutlined /> Hôm nay
                            </div>

                        </div>
                    </div>

                </div>

             </div>
        </>
    );
}

export default Songs;