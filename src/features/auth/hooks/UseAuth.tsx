import { useMutation, useQuery } from "@tanstack/react-query";
import authApi from "../api/AuthApi.tsx";

export function useLogin() {
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (res: any) => {
        console.log(res);
      // Save token to localStorage for future requests
      localStorage.setItem("accessToken", res.token);
    },
  });
}

export function useSignup() {
  return useMutation({
    mutationFn: authApi.signup,
  });
}


export function useUsers(params: { page?: number; limit?: number; sort?: "asc" | "desc" }) {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      // const token = localStorage.getItem("accessToken");
      const res = await authApi.users(params); 
      return res.data; // 👈 extract data only
    },
  });
}

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// export function useUsers() {
//   return useQuery<User[]>({
//     queryKey: ["users"],
//     queryFn: async () => {
//       const res = await authApi.users();
//       return res.data; // now users is User[]
//     },
//   });
// }