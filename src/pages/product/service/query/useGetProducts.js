import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = (value) => {
  return useQuery({
    queryKey: ["get-products", value],
    queryFn: () => request.get("/products", { params: { title_like: value } }).then((res) => {
      return {
        page: res.data,
      }
    }),
  });
};
