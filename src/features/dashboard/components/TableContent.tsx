
import Badge from './Badge'
import ActionButton from './ActionButton'
import { useUsers } from "../../auth/hooks/UseAuth.tsx";


const TableContent = () => {

    const { data, isLoading, error } = useUsers();
    const users = data?.data ?? [];
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
                <tr className="border border-[rgba(255,255,255,.08)]">
                    <td className="flex items-center gap-3 p-[12px] ">
                        <div><img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="w-[50px] h-[50px] rounded-[50px]" /></div>
                        <div>
                            <p>{`${user.first_name} ${user.last_name}`}</p>
                            <p className="text-[#94a3b8] text-[12px]">{user.email}</p>
                        </div>
                    </td>
                    <td className="p-[12px] ">Pro</td>
                    <td className="p-[12px] ">$129</td>
                    <td className="p-[12px] ">
                        <Badge className="bg-[rgba(34,197,94,0.15)] text-[#86efac]" />

                        {/* <span className="bg-[rgba(34,197,94,0.15)] text-[#86efac] px-[8px] py-[4px] text-[12px] border border-[rgba(255,255,255,0.08)] rounded-[100px]">Active</span> */}
                    </td>
                    <td className="p-[12px] ">2025-07-02</td>
                    <td className="p-[12px] flex gap-3 items-center justify-center">
                        <ActionButton buttonIcon="bx bx-show" />
                        <ActionButton buttonIcon="bx bx-edit" />
                        <ActionButton buttonIcon="bx bx-trash" />
                    </td>
                </tr>
            ))}
        </>
    )
}

export default TableContent