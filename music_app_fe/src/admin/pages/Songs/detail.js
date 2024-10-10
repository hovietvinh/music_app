import { Button, Image, Skeleton, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { getSongByIdApi } from '../../../utils/apiAdmin';
import BoxHead from '../../components/BoxHead';
import CustomAudioPlayer from '../../components/CustomAudioPlayer';
import DOMPurify from 'dompurify';
import { toast } from 'react-hot-toast';


function SongDetail(props) {
    const {collapsed} = useOutletContext()
    const {id} = useParams()
    const [show,setShow] = useState(false);
    const [song,setSong] = useState({});
    const navigate = useNavigate()

    const getData = async()=>{
        const res = await getSongByIdApi(id)
        if(res.code==200){
            setSong(res.data)
            setShow(true)

        }
        else{
            toast.error("Sai đường dẫn")
            navigate("/admin/songs")
        }
    }
    useEffect(()=>{
        getData();
        // setShow(true)
    },[id])
    console.log(song);

    return (
        <>
            {show?(
                <>
                    <div className={`transition-all duration-300 ${collapsed ? "ml-[100px] w-[calc(100%-100px)]" : "ml-[230px] w-[calc(100%-230px)]"} mt-[20px] mr-[20px]`}>
                        <div className='flex items-center justify-between mr-10'>
                        <BoxHead text="Chi tiết bài hát"/>
                        <Button type='primary'>Chỉnh sửa</Button>
                        </div>


                        <div className='mr-10 mt-10 flex flex-col gap-10'>
                            <CustomAudioPlayer src={song.audio}/>
                            <Image src={song.avatar} width={200}
    height={200}/>
                            <p>Ca sĩ: {song.infoSinger.fullName}</p>
                            <p>Chủ đề: {song.infoTopic.title}</p>
                            <p>Tên: {song.title}</p>
                            
                            <p>Mô tả: {song.description}</p>
                            <p>like: {song.like.length}</p>
                            <p>lượt nghe: {song.listen}</p>
                            {/* lyris:song.lyris, */}
                            <p>Lyrics :</p>
                            <div className='text-[14px] py-[10px] px-[15px]'
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(song.lyrics) }}>
                    </div>

                        </div>
                        
                       


                    </div>
                
                </>
            ):(
                <>
                    <div className={`mb-10 transition-all duration-300 ${collapsed ? "ml-[100px] w-[calc(100%-100px)]" : "ml-[230px] w-[calc(100%-230px)]"} mt-[20px] mr-[20px]`}>

                        <Skeleton className='mt-[50px]' active/>

                    </div>
                </>
            )}
            

        </>
    );
}

export default SongDetail;