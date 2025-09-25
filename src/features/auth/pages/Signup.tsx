import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "../../../App.css";
import Input from "../../../components/Input";
import AuthCard from "../components/AuthCard";
import AuthButton from "../components/AuthButton";
import { useSignup } from "../hooks/UseAuth";
import { useEffect, useState } from "react";
import axios from "axios";
interface FormValues {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
}

type FormInitValues = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
}

const SignUp = () => {
    const navigate = useNavigate();
    const { mutate: signup } = useSignup();
    const initialFormValues: FormInitValues = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: ""
    };
    const [form, setForm] = useState<FormInitValues>(initialFormValues);
    const [errorMsg, setErrorMsg] = useState<string>("");


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        // console.log("Form Data:", data);
        // navigate("/dashboard");

        signup(
            {
                firstName: data.firstName,
                lastName: data.lastName,
                phoneNumber: data.phoneNumber,
                email: data.email,
                password: data.password
            }, // ✅ fixed password field
            {
                onSuccess: (data) => {
                    console.log(data);
                    navigate("/"); // ✅ navigate only after successful login
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
                },
            },
        );
    };

    useEffect(() => {
        setForm(initialFormValues);
    }, []);
    return (
        <>
            <AuthCard>
               <p className="text-red-500 font-light"> {String(errorMsg) }</p>
                <div className="flex items-center justify-center text-[#ffffff] font-bold mb-2 mt-3 gap-2" >
                    <i className="text-[#6366f1] bx bxs-dashboard"></i>
                    Signup
                </div>
                <h2 className="text-[#e5e7eb] text-[1.5em] font-bold">Create account</h2>
                <p className="text-[#94a3b8] mt-2">Start your journey with us</p>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <Input icon="bx bx-user" id="firstName" value={form.firstName} name="firstName" placeholder="First Name" type="text"
                        onChange={e => setForm({ ...form, firstName: e.target.value })}
                        register={register("firstName", {
                            required: "First name is required",
                            minLength: { value: 3, message: "At least 3 characters" },
                        })}
                        error={errors.firstName?.message}
                    />
                    <Input icon="bx bx-user" id="lastName" value={form.lastName} name="lastName" placeholder="Last Name" type="text"
                        onChange={e => setForm({ ...form, lastName: e.target.value })}
                        register={register("lastName", {
                            required: "Last name is required",
                            minLength: { value: 3, message: "At least 3 characters" },
                        })}
                        error={errors.lastName?.message}
                    />

                    <Input icon="bx bx-phone" id="phoneNumber" value={form.phoneNumber} name="phoneNumber" placeholder="Phone Name" type="text"
                        onChange={e => setForm({ ...form, phoneNumber: e.target.value })}
                        register={register("phoneNumber", {
                            required: "Last name is required",
                            minLength: { value: 6, message: "At least 6 characters" },
                        })}
                        error={errors.phoneNumber?.message}
                    />
                    <Input icon="bx bx-envelope" id="email" value={form.email} name="email" placeholder="Email" type="email"
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        register={register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // simple email regex
                                message: "Enter a valid email address",
                            },
                        })}
                        error={errors.email?.message}
                    />
                    <Input icon="bx bx-lock-alt" id="password" value={form.password} name="password" placeholder="Password" type="password"
                        onChange={e => setForm({ ...form, password: e.target.value })}
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