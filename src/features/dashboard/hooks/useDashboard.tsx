import { useMutation } from "@tanstack/react-query";
import DashboardApi from "../api/DashboardApi";


export function useDelete() {
  return useMutation({
    mutationFn:(email: string) => DashboardApi.deleteUser(email),
  });
}