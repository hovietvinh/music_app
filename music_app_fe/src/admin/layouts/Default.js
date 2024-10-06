import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AccountSetAction } from '../../redux/admin/actions/AccountAction';
import { accountCheckApi } from '../../utils/apiAdmin';
import Header from '../components/Header';
import Sider from '../components/Sider';

function DefaultAdmin() {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const stateAccount = useSelector(state=>state.AccountReducer)

    const dataOutlet = {
        collapsed: collapsed,
    };


    // check authen
    const [token,setToken] = useState(localStorage.getItem("account_token"));
    const location = useLocation();

    const [loading,setLoading] = useState(false)

    const checkAuth = async()=>{
        // console.log(123);
        if(localStorage.getItem("account_token")){
            // console.log(token);
            
            const res = await accountCheckApi({token:token});
            if(res.code==200){
                dispatch(AccountSetAction(res))
                setLoading(true)
            }else{
                localStorage.removeItem("account_token")
                setLoading(false)
                setToken("")
                dispatch({type:"ACCOUNTS_LOGOUT"})
                navigate("/admin/accounts/login")

            }


        }
        else{
            localStorage.removeItem("account_token")
            // localStorage.setItem("account_token",2);
            setLoading(false)
            setToken("")
            dispatch({type:"ACCOUNTS_LOGOUT"})
            navigate("/admin/accounts/login")
            
            
            
        }
    }


    useEffect(()=>{
        checkAuth()
        // console.log(location.pathname);
    },[token,location])

    
    return (
        <>
            {loading &&(
                <>
                    <Header/>
                    <div className="body">
                        <Sider collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
                        
                        <Outlet context={dataOutlet} />
                        
                    </div>
                </>
            )}
            
        
        </>
    );
}

export default DefaultAdmin;