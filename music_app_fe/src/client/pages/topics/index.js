import { Empty } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopicsAction } from "../../../redux/actions/TopicAction";
import BoxHead from "../../components/BoxHead";
import TopicItem from "../../components/TopicItem";


function Topics() {
    const dispatch = useDispatch()
    let topics = useSelector(state=>state.TopicReducer)

    useEffect(()=>{
        const fetchApi = ()=>{
             dispatch(getTopicsAction())
        }
        fetchApi()
    },[dispatch])


    return (
        
        <>
            <div className="container max-w-[80%] mx-auto">
                <BoxHead title="chu de"/>
                <div className="grid grid-cols-4 gap-4">
                    {topics.length>0 ?(
                        topics.map((topic,index)=>(
                           <TopicItem topic={topic} key={index}/>
                        ))
                    ):
                    (
                        <>
                            123
                        </>
                        
                    )
                        
                    }
                
                </div>
                
            </div>
        </>
    );
}

export default Topics;