import { useState} from "react";
import {useNavigate} from "react-router-dom";
import users from "../../constant/user.json"
import LoginForm from "./LoginForm";

const Login = () => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate()
    const handleEmailInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setusername(e.target.value)
    }

    const handlePasswordInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setpassword(e.target.value)
    }
    const handleSubmit = () => {
        const existuser = users.filter((user)=>(
           (user.username === username || user.email === username ) && user.password === password)
        )
        if(existuser.length > 0){
            setTimeout(()=>{
                navigate("/Dashboard")
            },1500)
        }

    }
    const isSubmitDisabled = () => {
        if(!username || !password){
            return true
        }else {
            return false
        }
    }

    return (
        <div className="flex flex-col w-full items-center justify-center h-screen">
            <LoginForm title="Login" handleEmailInput={handleEmailInput} handlePasswordInput={handlePasswordInput} handleSubmit={handleSubmit} isDisable={isSubmitDisabled()}></LoginForm>
        </div>
    );
};

export default Login;
