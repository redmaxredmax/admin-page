import { request } from "../../../../config/request";
import { useMutation } from "@tanstack/react-query";


export const useAddProduct = () => {
  return useMutation({
    mutationFn: (data) =>
      request.post("/products", data).then((res) => res.data)
  })

}
