import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getFavoriteSong } from "../../../utils/api";
import {Empty} from "antd"
import BoxHead from "../../components/BoxHead";
import ItemFav from "./ItemFav";

function FavoriteSongs() {

    const dispatch = useDispatch()
    const [fav,setFav] = useState([])
    useEffect(()=>{
        const fetch = async()=>{
            const res = await getFavoriteSong()
            if(res.code==200){
                if(res.data.songsId.length>0){
                    setFav(res.data.songsId)
                }
               
                // console.log(res.data.songsId);
            }
            // console.log(res);
        }
        fetch()
    },[dispatch])

    console.log(fav);


    // const { slugTopic } = useParams();
    // const dispatch = useDispatch()
    // const songs = useSelector(state=> state.SongReducer)
    
 
    // useEffect(()=>{
    //     const fetchApi = ()=>{
    //          dispatch(getSongsInTopicAction(slugTopic))
         
    //     }
    //     fetchApi();
    // },[slugTopic,dispatch])

    return (
        <>
            <div className="container max-w-[80%] mx-auto">
                <BoxHead title="Bài hát yêu thích"/>
                
                <div className="grid grid-cols-4 gap-4">

                    {fav.length>0 ? (
                        fav.map((info,index)=>(
                            // <SongItem key={index} song={info.info} />
                            <ItemFav key={index} song={info.info}/> 
                            // console.log();
                            
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

export default FavoriteSongs;