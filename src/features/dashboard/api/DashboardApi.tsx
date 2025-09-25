import axiosClient from "../../../client/AxiosClient";

const DashboardApi = {
    deleteUser: (email:string) =>
        axiosClient.delete(`/authentication/deleteUser/${email}`),

};

export default DashboardApi;
