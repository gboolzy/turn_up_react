import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "../../../App.css";
import Input from "../../../components/Input";
import AuthCard from "../components/AuthCard";
import AuthButton from "../components/AuthButton";
interface FormValues {
    fullName: string;
    email: string;
    password: string;
}
const SignUp = () => {
const navigate = useNavigate();


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => { 
        console.log("Form Data:", data);
        navigate("/dashboard");
    };
    return (
        <>
            <AuthCard>
                <div className="flex items-center justify-center text-[#ffffff] font-bold mb-2 gap-2" >
                    <i className="text-[#6366f1] bx bxs-dashboard"></i>
                    Signup
                </div>
                <h2 className="text-[#e5e7eb] text-[1.5em] font-bold">Create account</h2>
                <p className="text-[#94a3b8] mt-2">Start your journey with us</p>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <Input icon="bx bx-user" id="fullName" name="fullName" placeholder="Full Name" type="text"
                        register={register("fullName", {
                            required: "Full name is required",
                            minLength: { value: 6, message: "At least 6 characters" },
                        })}
                        error={errors.fullName?.message}
                    />
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
                    <AuthButton buttonText="Submit" />
                    <p className="mt-3 text-[#94a3b8] text-[12px] ">Already have an account? <Link to="/" className="underline text-[#6366f1]">Login</Link></p>
                </form>
            </AuthCard>
        </>
    )
}

export default SignUp