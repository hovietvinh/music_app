import { Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import { AccountSetAction } from '../../../redux/admin/actions/AccountAction';
import { accountCheckApi, accountLoginApi } from '../../../utils/apiAdmin';
function Login() {
    const dispatch = useDispatch()
    const stateAccount = useSelector(state=>state.AccountReducer)
    const [token,setToken] = useState(localStorage.getItem("account_token"))
    const navigate = useNavigate()
    const [form] = Form.useForm()
    const checkAuth =async ()=>{
        if(token){
            // console.log(token);
            // const res = await userCheckTokenApi({token:token});
            // console.log(res);
            const res = await accountCheckApi({token:token})
            // console.log(res);
            if(res.code==200){
                dispatch(AccountSetAction(res))
                navigate("/admin")
            }
            else{
                dispatch({type:"ACCOUNTS_LOGOUT"})
                localStorage.removeItem("account_token");
                setToken("")
                
            }
        }
    }
    useEffect(()=>{
        checkAuth()
    },[token,stateAccount])

    const handleLogin = async(e)=>{
        const res = await accountLoginApi(e);
        // console.log(res);
        if(res.code==200){
            dispatch(AccountSetAction(res)) 
            toast.success("Đăng nhập thành công!")
            localStorage.setItem("account_token",res.account_token)
            navigate("/admin")
        }
        else{
            toast.error("Đăng nhập không thành công!")
        }
    }
    return (
        <div className='bg-slate-100 min-h-[100vh]'>
            <header className="flex justify-center items-center py-3 h-20 shadow-md bg-white">
                {/* <h1 className="text-[30px] font-semibold text-primary">Chat App</h1>
                 */}
                <h1 className="text-[30px] font-semibold text-primary">Login Admin</h1>

            </header>

            <div className='mt-5 flex flex-col items-center '>
                <div className='bg-slate-200  w-full max-w-sm rounded mt-10 overflow-hidden my-auto p-4 mx-auto'>                 
                    <Form
                    layout='vertical'
                    className='mt-3'
                    form={form}
                    onFinish={handleLogin}                
                    >
                        <Form.Item name="email" label="Email :" className=''
                            rules={[{ required: true, message: 'Please fill in this field!' }, { type: 'email', message: 'Invalid email format!' },]}                          
                        >
                            <Input 
                                placeholder='enter your name'
                                className='bg-slate-100 px-2 py-1'                               
                            />
                       </Form.Item>

                        <Form.Item name="password" label="Password :" className=''
                            rules={[{ required: true, message: 'Please fill in this field!' }]}    
                        >
                            <Input.Password 
                                placeholder='enter your password'
                                className='bg-slate-100 px-2 py-1'
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' className='w-full font-semibold  text-[16px] bg-primary px-4 py-1 transition-all duration-300 rounded-md hover:bg-secondary ' htmlType="submit">Login</Button>
                        </Form.Item>                        
                    </Form>
                </div>
            </div> 
        </div>
    );
}
export default Login;