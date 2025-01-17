import React from "react"
import InputForm from "../../../components/common/InputForm"

interface ILoginForm {
    title:string,
    handleEmailInput: (e:any) => void,
    handlePasswordInput: (e:any) => void,
    handleSubmit: (e:any) => void,
    isDisable: boolean

}
const LoginForm:React.FC<ILoginForm> = ({title,handleEmailInput,handlePasswordInput,handleSubmit,isDisable}) => {
return (
    <div className="flex flex-col w-3/12 h-2/6 justify-between border border-gray-300 shadow rounded bg-gray-50 min-w-[350px]">
        <div className="flex flex-col gap-4">
            <div className="flex justify-center text-blue-500">
                <h1>{`${title}`}</h1>
            </div>
            <InputForm onChange={handleEmailInput} type="Email" lable="Username or email:"></InputForm>
            <InputForm onChange={handlePasswordInput} type="Password" lable="Password:"></InputForm>
        </div>

        <button disabled={isDisable} onClick={handleSubmit} className="mr-7 ml-7 mb-3 bg-blue-500 rounded text-white">Submit</button>
    </div>
)}

export default LoginForm