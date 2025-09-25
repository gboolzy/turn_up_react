import axiosClient from "../../../client/AxiosClient";

const authApi = {
    login: (credentials: { email: string; password: string }) =>
        axiosClient.post("/authentication/login", credentials),

    signup: (data: { firstName: string; lastName: string; phoneNumber: string; email: string; password: string }) =>
        axiosClient.post("/authentication/register", data),

    users: (params: { page?: number; limit?: number; sort?: "asc" | "desc" }) =>
        axiosClient.get("/dashboard/registrationPage", {params},),
};

export default authApi;
