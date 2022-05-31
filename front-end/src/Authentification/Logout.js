import {useNavigate} from 'react-router-dom'

function Logout() {
 
   let navigate=useNavigate()
    const log=()=>{
    
    localStorage.removeItem("CC_Token")
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("user")
    navigate("/");
    
    }
    return (
    <>
<button onClick={()=>{log()}}>LOGOUT</button>
    </>
 );
}
export default Logout;