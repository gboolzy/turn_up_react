import axiosClient from "./AxiosClient";

const authApi = {
    login: (credentials: { email: string; password: string }) => 
        axiosClient.post("", credentials),

    signup: (data: { firstName: string; lastName:string; phoneNumber:string; email: string; password: string }) =>
        axiosClient.post("/authentication/signup", data),

    users: () =>
        axiosClient.get("/users"),
};

export default authApi;
