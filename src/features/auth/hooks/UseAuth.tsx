import { useMutation, useQuery } from "@tanstack/react-query";
import authApi from "../api/AuthApi.tsx";

export function useLogin() {
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (res: any) => {
        console.log(res);
      // Save token to localStorage for future requests
      localStorage.setItem("token", res.token);
    },
  });
}

export function useSignup() {
  return useMutation({
    mutationFn: authApi.signup,
  });
}


export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await authApi.users(); 
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