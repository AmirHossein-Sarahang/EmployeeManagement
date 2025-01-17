import { useState} from "react";
import users from "../constant/user.json"
import InputForm from "../components/common/InputForm";

const Login = () => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

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
        console.log(existuser);

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
            <div className="flex flex-col w-3/12 h-2/6 justify-between border border-gray-300 shadow rounded bg-gray-50 min-w-[350px]">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-center text-blue-500">
                        <h1>Login</h1>
                    </div>
                    <InputForm onChange={handleEmailInput} type="Email" lable="Username or email:"></InputForm>
                    <InputForm onChange={handlePasswordInput} type="Password" lable="Password:"></InputForm>
                </div>

                <button disabled={isSubmitDisabled()} onClick={handleSubmit} className="mr-7 ml-7 mb-3 bg-blue-500 rounded text-white">Submit</button>
            </div>
        </div>
    );
};

export default Login;
