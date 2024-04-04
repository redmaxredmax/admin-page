import { request } from "../../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useDeleteCategory = () => {
    return (
        useMutation({
            mutationKey:['delete-category'],
            mutationFn: (id) => request.delete(`/category/${id}`).then((res) => res.data)
        })
    )
}
