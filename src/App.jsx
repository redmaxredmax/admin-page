import { Route, Routes } from "react-router-dom"
import { MainRouterData } from "./router/routes"
import { Login } from "./pages/login"
import { Add } from "./pages/add"
import { AddCategory } from "./pages/addCategory/addCategory"
import { EditCategory } from "./pages/category/edit-category/editCategory"
import { ToastContainer } from "react-toastify"
import { ProductEdit } from "./pages/product/product-edit/product-edit"
import { MainLayout } from "./layouts/main-layout/main-layout"


function App() {

  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<MainLayout/>}>
          {MainRouterData.map((item) =>
            <Route key={item.id} path={item.path} index={item.path ? false : true} element={item.component} />
          )}
          <Route path="product/edit/:id" element={<ProductEdit/>}/>
          <Route path="category/add" element={<Add/>}/>
          <Route path="catalog/new" element={<AddCategory/>}/> 
          <Route path="catalog/edit/:id" element={<EditCategory/>}/> 
        </Route>
      </Routes>
    </>
  )
}

export default App
