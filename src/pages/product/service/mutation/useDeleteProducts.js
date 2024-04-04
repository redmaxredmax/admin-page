import { request } from "../../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useDeleteProducts = () => {
    return (
        useMutation({
            mutationKey:['delete-item'],
            mutationFn: (id) => request.delete(`/products/${id}`).then((res) => res.data)
        })
    )
}
