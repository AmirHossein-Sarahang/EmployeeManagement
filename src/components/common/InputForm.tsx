import React from "react"

interface IInputProps {
    lable:string,
    type:string,
    onChange: (e:any) => void
}

const InputForm:React.FC<IInputProps> = ({lable, type, onChange}) => {
    return(
        <div className="flex flex-col mr-5 ml-5">
            <label htmlFor={type}>{lable}</label>
            <input onChange={onChange} placeholder={`Please enter your ${lable.toLowerCase()}`} type={type} className=" border rounded p-1" />
        </div>
    )
}

export default InputForm