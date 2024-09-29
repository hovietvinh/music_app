import React, { useEffect,useState } from 'react';
import "./detail.css";
import { ClockCircleOutlined,LikeFilled, AudioFilled, CustomerServiceFilled, LikeOutlined, HeartOutlined } from "@ant-design/icons";
import {songLikeApi} from "../../../utils/api"
import { useDispatch, useSelector } from 'react-redux';
import { getSongDetailAction } from '../../../redux/actions/SongAction';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Empty, Space,notification } from 'antd';
import DOMPurify from 'dompurify';
import CustomAudioPlayer from '../../components/CustomAudioPlayer';



function DetailSong() {
    const navigate = useNavigate()
    //notification
    
    const openNotification = () => {
        const closeNotification = () => {
            notification.destroy('notificationCheckLogin'); // Ensure you close the notification by its key
        };
    
        const btn = (
            <Space>
                <Button type="link" size="small" onClick={closeNotification}>
                    Đóng
                </Button>
                <Button type="primary" size="small" onClick={() => {
                     closeNotification()// Replace with your desired action
                    navigate("/user/login") // Optionally close notification after action
                }}>
                    Đi đến trang đăng nhập
                </Button>
            </Space>
        );
    
        notification.open({
            key: 'notificationCheckLogin', // Use a key for managing the notification
            message: 'Bạn chưa đăng nhập tài khoảng',
            description:
                'Vui lòng đăng nhập/đăng ký tài khoản để có thể thao tác với bài hát.',
            btn,
            showProgress:true,
            duration:2,
            pauseOnHover:false
           
        });
    };
    



    const { slugSong } = useParams();
    const dispatch = useDispatch();
    const { songs, topic } = useSelector(state => state.SongReducer);
    const [song, setSong] = useState(null);
    // const stateSong = use
    const [loading, setLoading] = useState(true);
    const [load, setLoad] = useState(true);
    const stateUser = useSelector(state=>state.UserReducer)
    const [isLike,setIsLike] = useState()
    // console.log(stateUser);
    useEffect(() => {
        dispatch(getSongDetailAction(slugSong));
    }, [slugSong, dispatch,isLike]);

    useEffect(() => {
        if (songs.length > 0) {
            setSong(songs[0]);
            setLoading(false);
            const arrLike = songs[0].like
            const like = arrLike.find(item=>item==stateUser.userInfo._id)
            if(like){
                setIsLike(true)
            }
            else{
                setIsLike(false)

            }
        }
    }, [songs]);

    

    // console.log(isLike);


    console.log(song,isLike);

    const changeLike = async()=>{





        if(stateUser.user_token){
            // console.log(isLike);
            // console.log(isLike);
            if(isLike){
                // console.log(isLike);
                const res = await songLikeApi("dislike",song._id)
                setIsLike(false)
                // console.log(res);
            }
            else{
                const res = await songLikeApi("like",song._id)
                setIsLike(true)
                // console.log(res);
            }

            
            // setLoad(!load)
            
            // console.log(isLike);
        }
        else{
            // console.log("vaoday");

            // setShowNotification(true);
            openNotification()
        }
    }

  

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
                   
                        {/* <LikeFilled className=' text-blue-500' /> <span className='font-normal text-blue-600'>{JSON.stringify(song.like.length)} Thích</span> */}
                        {isLike?
                        <><LikeFilled className=' text-blue-500' onClick={changeLike} /> <span className='font-normal text-blue-600'>{parseInt(JSON.stringify(song.like.length))} Thích</span> </>
                         :
                        <><LikeOutlined onClick={changeLike} className=' text-blue-900' /> <span className='font-normal text-gray-600'>{JSON.stringify(song.like.length)} Thích</span></>}
                        
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
