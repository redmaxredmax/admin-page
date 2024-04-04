import React from 'react'
import { nanoid } from 'nanoid'
import {Home} from "../pages/home"
import { Category } from '../pages/category'
import { Product } from '../pages/product'

export const MainRouterData=[
    {
        component:<Home/>,
        id:nanoid(),
    },
    {
        component:<Product/>,
        path:"products",
        id:nanoid(),
    },
    {
        component:<Category/>,
        path:"category",
        id:nanoid(),
    },

]
