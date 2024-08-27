import { Link, NavLink } from "react-router-dom";
import { Image } from 'antd';
function Header() {
    return (
        <>
            <div className="border-b border-gray-300 py-[10px]">
                <div className="container max-w-[80%] mx-auto">
                    <div className="items-center flex">
                        <div className="">
                            <h1>MUSIC-APP</h1>
                        </div>
                        <div className="p-0 m-0 flex-wrap flex-1 gap-[20px] flex items-center justify-end">
                            <NavLink to="/">Trang chủ</NavLink>
                            <NavLink>Chủ đề</NavLink>
                            <NavLink>Liên lạc</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            
        
        
        </>
    );
}

export default Header;