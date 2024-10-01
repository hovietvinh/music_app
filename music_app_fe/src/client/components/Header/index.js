import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { HomeOutlined,CustomerServiceOutlined,HeartOutlined } from '@ant-design/icons';
import { Button, Form, Input, notification } from 'antd';
import Register from "../../pages/register";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkUserAction, logoutUserAction } from "../../../redux/actions/UserAction";
function Header() {
    const navigate = useNavigate()
    
    const dispatch = useDispatch()
    const stateUser = useSelector(state=>state.UserReducer)
    const [load,setLoad] = useState()
    const login = ()=>{
        navigate("/user/login")
    }
    const [userToken , setUserToken] = useState()
    const [form] = Form.useForm()

    useEffect(()=>{
        
        const fetch = async()=>{
            setUserToken(localStorage.getItem('user_token'))

            if(localStorage.getItem('user_token')){
                const res = await dispatch(checkUserAction(localStorage.getItem('user_token')))
                if(!res){
                    localStorage.removeItem("user_token")
                    setUserToken()
                }
            }
            
        }
        fetch()
        

        // console.log(userToken);
    },[userToken,navigate,load])

    const [modal2Open, setModal2Open] = useState(false);

    const logout = ()=>{
        
        localStorage.removeItem("user_token")
        notification.success({
            message:"Đã đăng xuất!"
        })
        dispatch(logoutUserAction())
        setLoad(!load)
    }
    const [searchParams] = useSearchParams()

    const keyword = searchParams.get("keyword")
    useEffect(()=>{
        if(keyword){

            form.setFieldsValue({ keyword: keyword });
        }
        else{
            form.resetFields()
        }
    },[keyword,searchParams])

    const handleFinish =(e)=>{
        if(e.keyword){
            // console.log(e);
            navigate(`/search/result?keyword=${e.keyword}`)

        }
        else{
            navigate("/")
        }
    }
    

    return (
        <>
            <div className="border-b border-gray-300 py-[10px]">
                <div className="container max-w-[80%] mx-auto">
                    <div className="items-center grid grid-cols-2">
                        <div className="flex gap-6">
                            <h1 className="text-[23px] text-blue-500 font-bold">MUSIC-APP</h1>
                            <div className="flex-1">
                                <Form form={form} onFinish={handleFinish} className="flex items-center m-0 w-full">
                                    <Form.Item name="keyword" className="m-0 flex-1">
                                        <Input className="w-full" placeholder="Nhập từ khóa..."/>
                                    </Form.Item>
                                    <Form.Item className="m-0">
                                        <Button htmlType="submit" type="primary">Tìm</Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                        
                        
                        <div className="flex justify-end items-center">
                            <div className="p-0 m-0 flex-wrap flex items-center  gap-[20px] mr-5">
                                
                                
                                <NavLink to="/" className={"font-normal text-[16px] text-blue-500 hover:text-blue-800"}><HomeOutlined className="pr-1"/>Trang chủ</NavLink>
                                <NavLink to="/topics" className={"font-normal text-[16px] text-blue-500 hover:text-blue-800"}><CustomerServiceOutlined className="pr-1"/>Chủ đề</NavLink>
                                <NavLink to="/favorite-songs" className={"font-normal text-[16px] text-blue-500 hover:text-blue-800"}><HeartOutlined className="pr-1"/>Yêu thích</NavLink>

                                {/* <NavLink className={"font-normal text-[16px] text-blue-500 hover:text-blue-800"}>Liên lạc</NavLink> */}
                            </div>
                            <div className="flex items-center gap-3">
                                {!userToken && <Button onClick={login} className="min-w-[110px] rounded-md text-white text-[15px]" type="primary" size="medium">Đăng nhập</Button>}
                                {!userToken && <button onClick={() => setModal2Open(true)} className="min-w-[110px] bg-red-500 text-white transition-colors duration-300  hover:bg-red-400 p-1 rounded-md" type="primary" size="medium">Đăng ký</button>}
                                {userToken && <Button className="min-w-[110px]" type="primary" size="medium">{stateUser.userInfo? stateUser.userInfo.fullName : ""}</Button>}
                                {userToken && <button onClick={logout} className="min-w-[110px] transition-colors duration-300  hover:bg-red-400 p-1 rounded-md text-white bg-red-500" >Đăng xuất</button>}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <Register  setModal2Open={setModal2Open} modal2Open={modal2Open}/>
            
        
        
        </>
    );
}

export default Header;