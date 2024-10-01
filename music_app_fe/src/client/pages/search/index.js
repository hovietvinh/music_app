import {useState} from 'react';

import { notification } from "antd";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getSearchResult } from "../../../utils/api";
import BoxHead from "../../components/BoxHead";
import SongItem from '../../components/SongItem';

function Search() {
    const [searchParams] = useSearchParams()

    const keyword = searchParams.get("keyword")

    const [stateSongs,setStateSongs] = useState([])
    useEffect(()=>{
        // console.log(keyword);
        const fetch = async()=>{
            const res = await getSearchResult(keyword)
            if(res.code==200){
                setStateSongs(res.data)
            }
            else{
                notification.error({
                    message:res.message
                })
            }
        }
        fetch()

    },[searchParams,keyword])
    console.log(stateSongs);
    return (
        <>
        <div className='container max-w-[80%] mx-auto'>
            <BoxHead title={`Kết quả: ${keyword}`}/>
           
            <div className="grid grid-cols-4 gap-4">
                {stateSongs.length>0 &&(
                    stateSongs.map((song,index)=>(
                        <SongItem key={index} song={song} />
                        
                    ))
                )}
            </div>
           

        </div>
            
        </>
    );
}

export default Search;