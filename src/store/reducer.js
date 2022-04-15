const initialState = {
    IsLoggedIn : sessionStorage.getItem("email")!==null,
    Username : sessionStorage.getItem("name")===null?"":sessionStorage.getItem("name"),
    Role : sessionStorage.getItem("role")===null?"":sessionStorage.getItem("role"),
    Email : sessionStorage.getItem("email")===null?"":sessionStorage.getItem("email")
}

const reducer=(nstate=initialState,action)=>{
    switch (action.type) 
    {
        case 'IsLoggedIn':
            return{...nstate,
                IsLoggedIn:true,
                Username:sessionStorage.getItem("name"),
                Role:sessionStorage.getItem("role"),
                Email:sessionStorage.getItem("email")
            }
        case 'Logout':
            sessionStorage.clear()
            return{...nstate,
                IsLoggedIn:false, Username:'', Role:'', Email:''
            }
        default:
            return nstate;
    }
}

export default reducer;