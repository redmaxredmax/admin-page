import { request } from "../../../../../config/request";
import { useMutation } from "@tanstack/react-query";



export const useEditCategory = (id) => {
    return (
        useMutation({
            mutationFn: (data) => request.patch(`/category/${id}`,data).then((res) => res.data)
        })
    )
}
