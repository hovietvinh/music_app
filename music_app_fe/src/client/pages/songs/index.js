import { useParams } from 'react-router-dom';
import BoxHead from "../../components/BoxHead";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSongsInTopicAction } from '../../../redux/actions/SongAction';
import SongItem from '../../components/SongItem';
import { Empty } from 'antd';
function Songs() {
    const { slugTopic } = useParams();
    const dispatch = useDispatch()
    const songs = useSelector(state=> state.SongReducer)
    
 
    useEffect(()=>{
        const fetchApi = ()=>{
             dispatch(getSongsInTopicAction(slugTopic))
         
        }
        fetchApi();
    },[slugTopic,dispatch])

    return (
        <>
            <div className="container max-w-[80%] mx-auto">
                <BoxHead title={songs.topic.title?`${songs.topic.title}`:`${slugTopic}`}/>
                <div className="grid grid-cols-4 gap-4">

                    {songs.songs.length>0 ? (
                        songs.songs.map((song,index)=>(
                            <SongItem key={index} song={song} />
                        ))
                    ):
                    (
                       <div className='col-span-4 flex justify-center'>
                            <Empty/>
                       </div>
                    )
                    }

                    

                </div>

             </div>
        </>
    );
}

export default Songs;