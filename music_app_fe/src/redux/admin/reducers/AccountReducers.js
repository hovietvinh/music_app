const initialState = {
    accountInfo:{},
    account_token:""
}

const AccountReducer = (state=[],action)=>{
    switch(action.type){
        case "ACCOUNTS_LOGOUT":
            // console.log(action);
            return {
                ...state,
                accountInfo:{},
                account_token:""
            }

        case "ACCONTS_SET":
            return {
                ...state,
                accountInfo:action.accountInfo,
                account_token:action.account_token
            }

        
    }
    return state
}

export default AccountReducer