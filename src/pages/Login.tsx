const Login = () => {
    return (
        <div className="flex flex-col w-full items-center justify-center h-screen">
            <div className="flex flex-col w-2/12 h-2/6 justify-between border border-gray-300 shadow rounded bg-gray-50">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-center text-blue-500">
                        <h1>Login</h1>
                    </div>
                    
                    <div className="flex flex-col mr-5 ml-5">
                        <label htmlFor="Email">Email:</label>
                        <input placeholder="Enter your email..." type="email" className=" border rounded p-1" />
                    </div>
                    <div className="flex flex-col mr-5 ml-5">
                        <label htmlFor="Password">Password:</label>
                        <input placeholder="Enter your password..." type="password" className="border rounded p-1"/>
                    </div>
                </div>

                <button className="mr-7 ml-7 mb-3 bg-blue-500 rounded text-white">Submit</button>
            </div>
        </div>
    );
};

export default Login;
