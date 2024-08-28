import { Link, NavLink } from "react-router-dom";
import { Button, Image } from 'antd';
function Header() {
    return (
        <>
            <div className="border-b border-gray-300 py-[10px]">
                <div className="container max-w-[80%] mx-auto">
                    <div className="items-center flex">
                        <div className="">
                            <h1 className="text-[23px] text-blue-500 font-bold">MUSIC-APP</h1>
                        </div>
                        <div className="p-0 pl-[60px] m-0 flex-wrap flex-1 gap-[20px] flex items-center   ">
                            <NavLink to="/" className={"font-normal text-[16px] hover:text-[#7c00c8]"}>Trang chủ</NavLink>
                            <NavLink to="/topics" className={"font-normal text-[16px] hover:text-[#7c00c8]"}>Chủ đề</NavLink>
                            <NavLink className={"font-normal text-[16px] hover:text-[#7c00c8]"}>Liên lạc</NavLink>
                        </div>
                        <div className="flex items-center gap-3">
                            <Button className="min-w-[110px]" type="primary" size="medium">Đăng nhập</Button>
                            <Button className="min-w-[110px] bg-[#ec3737]" type="primary" size="medium">Đăng ký</Button>
                        </div>
                    </div>
                </div>
            </div>
            
        
        
        </>
    );
}

export default Header;