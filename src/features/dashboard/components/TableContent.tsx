
// import Badge from './Badge'
import ActionButton from './ActionButton'
import { useUsers } from "../../auth/hooks/UseAuth.tsx";
import { useDelete } from '../hooks/useDashboard.tsx';
import axios from 'axios';
import { useQueryClient } from '@tanstack/react-query';
// import { useEffect, useState } from 'react';


const TableContent = () => {

    const { data, isLoading, error } = useUsers({ page: 1, limit: 10, sort: "desc" });
    let users = data?.data ?? [];

    const { mutate: deleteUser } = useDelete();
    const queryClient = useQueryClient();

    const deleteRow = (email: string) => {
        confirm("are you sure you want to delelte this user:" + email)
        deleteUser(email, {
            onSuccess: (userData) => {
                alert(`user ${email} deleted`)
                console.log(userData.data.message);
                // Refresh users list
                queryClient.invalidateQueries({ queryKey: ["users"] });
                   
            },
            onError: (err) => {
                if (axios.isAxiosError(err) && err.response) {
                    // full response object
                    console.error("Error response:", err.response);
                    // just the data payload
                    console.error("Error data:", err.response.data);
                    alert(err.response.data);
                    
                } else {
                    console.error("Unexpected error:", err);
                    // setErrorMsg(err.message);
                }
            },
        },

        )
    }
    // useEffect(() => {

    //   }
    // }, [])



    // setappUsers(users);
    if (isLoading) {
        return (
            <tr>
                <td colSpan={6} className="text-center p-4">
                    <div className="animate-pulse space-y-4">
                        {/* <div className="h-4 bg-gray-300 rounded w-3/4"></div> */}
                        {/* <div className="h-4 bg-gray-300 rounded w-1/2"></div> */}
                        <div className="h-6 bg-gray-300 rounded w-full"></div>
                    </div>
                </td>
            </tr>
        )
    }

    if (error) {
        return (

            <tr>
                <td colSpan={6} className="text-center p-4 text-[#FFF]">
                    <p className="text-[#FFF]">No more records found</p>
                </td>
            </tr>
        )
    }
    return (
        <>
            {users?.map((user: any) => (
                <tr className="border border-[rgba(255,255,255,.08)] ">
                    <td className="flex items-center gap-3 p-[12px] ">
                        <p>{`${user.firstName} ${user.lastName}`}</p>

                    </td>
                    <td className="p-[12px] ">{user.email}</td>
                    <td className="p-[12px] ">{user.phoneNumber}</td>
                    <td className="p-[12px] ">
                        {/* <Badge className="bg-[rgba(34,197,94,0.15)] text-[#86efac]" /> */}
                        {user.updatedAt}
                    </td>
                    {/* <td className="p-[12px] ">2025-07-02</td> */}
                    <td className="p-[12px] flex gap-3 items-center justify-start">
                        <ActionButton buttonIcon="bx bx-show" />
                        <ActionButton buttonIcon="bx bx-edit" />
                        <ActionButton onClick={() => deleteRow(user.email)} buttonIcon="bx bx-trash" />
                    </td>
                </tr>
            ))}
        </>
    )
}

export default TableContent