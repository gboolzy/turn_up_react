import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/UseAuth";
import { useForm } from "react-hook-form";
import "../../../App.css";
import Input from "../../../components/Input";
import AuthCard from "../components/AuthCard";
import AuthButton from "../components/AuthButton";
import { useState } from "react";
import axios from "axios";


interface FormValues {
    email: string;
    password: string;
}
const Login = () => {
    const navigate = useNavigate();
    const { mutate: login } = useLogin();
    const [errorMsg, setErrorMsg] = useState<string>("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        // 
        
        login(
            { email: data.email, password: data.password }, // ✅ fixed password field
            {
                onSuccess: (data) => {
                    console.log(data.data.token);
                    localStorage.setItem("accessToken", data.data.token);
                    navigate("/dashboard"); // ✅ navigate only after successful login
                    
                },
                onError: (err) => {
                    if (axios.isAxiosError(err) && err.response) {
                        // full response object
                        console.error("Error response:", err.response);
                        // just the data payload
                        console.error("Error data:", err.response.data);
                        setErrorMsg(err.response.data.message);


                    } else {
                        console.error("Unexpected error:", err);
                        setErrorMsg(err.message);

                    }
                    // console.error("Login failed:", err.message);
                },
            },
        );
    };

    return (
        <>
            <AuthCard>
                {errorMsg && (<p className="text-red-500 font-light">{String(errorMsg)}</p>)}
                <div className="flex items-center justify-center text-[#ffffff] font-bold mb-2 mt-3 gap-2" >
                    <i className="text-[#6366f1] bx bxs-dashboard"></i>
                    Login
                </div>
                <h2 className="text-[#e5e7eb] text-[1.5em] font-bold">Welcome Back</h2>
                <p className="text-[#94a3b8] mt-2">Sign in to continue to your dashboard</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input icon="bx bx-envelope" id="email" name="email" placeholder="Email" type="email"
                        register={register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // simple email regex
                                message: "Enter a valid email address",
                            },
                        })}
                        error={errors.email?.message}
                    />
                    <Input icon="bx bx-lock-alt" id="password" name="password" placeholder="Password" type="password"
                        register={register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "At least 6 characters" },
                        })}
                        error={errors.password?.message}
                    />
                    <AuthButton buttonText="Login" />
                    <p className="mt-3 text-[#94a3b8] text-[12px] ">no account? <Link to="/signup" className="underline text-[#6366f1]">Create one</Link></p>
                </form>
            </AuthCard>
        </>
    )

};
export default Login;