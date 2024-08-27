import { Button } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTopicsAction } from "../../../redux/actions/TopicAction";
import BoxHead from "../../components/BoxHead";


function Topics() {
    const dispatch = useDispatch()
    let topics = useSelector(state=>state.TopicReducer)

    useEffect(()=>{
        const fetchApi = ()=>{
            dispatch(getTopicsAction())
        }
        fetchApi()
    },[])

    console.log(topics);

    return (
        
        <>
            <div className="container max-w-[80%] mx-auto">
                <BoxHead title="chu de"/>
                <div className="grid grid-cols-4 gap-4">
                    {topics.length>0 &&(
                        topics.map((topic,index)=>(
                            <div key={index} className="box-item bg-white border border-gray-300">
                                <img className="w-full" src={topic.avatar}></img>
                                <div className="p-3.5 flex flex-col gap-2 ">
                                    <h5 className="text-[18px] font-semibold">{topic.title}</h5>
                                    <p className="text-[16px] font-normal text-gray-500">{topic.description}</p>
                                    <Link to={`/songs/${topic.slug}`}>
                                        <Button size="large" type="primary">Xem chi tiết</Button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    )
                        
                    }
                
                </div>
                
            </div>
        </>
    );
}

export default Topics;