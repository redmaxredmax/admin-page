import { request } from "../../../../config/request";
import { useMutation } from "@tanstack/react-query";


export const useEditProduct = (id) => {
    return (
        useMutation({
            mutationFn: (data) => request.patch(`/products/${id}`,data).then((res) => res.data)
        })
    )
}
