import { Link } from "react-router-dom";
import { Button } from "antd";

function TopicItem(props) {
    const {topic} = props
    return (
        <>
             <div className="box-item bg-white border border-gray-300">
                    <img className="w-full" src={topic.avatar}></img>
                    <div className="p-3.5 flex flex-col gap-2 ">
                        <h5 className="text-[18px] font-semibold">{topic.title}</h5>
                        <p className="text-[16px] font-normal text-gray-500">{topic.description}</p>
                        <Link to={`/songs/${topic.slug}`}>
                            <Button size="large" type="primary">Xem chi tiết</Button>
                        </Link>
                    </div>
                </div>
        </>
    );
}

export default TopicItem;