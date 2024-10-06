import { notification } from 'antd';




export const AccountSetAction  = (data)=>{
    return {
        type:"ACCONTS_SET",
        accountInfo:data.accountInfo,
        account_token:data.account_token
    }
}