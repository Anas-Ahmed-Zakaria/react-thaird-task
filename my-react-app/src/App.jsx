//import { Fragment } from 'react'
import Layout from './Components/Layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Men from './Components/Men/Men';
import Women from './Components/Women/Women';
import Kids from './Components/Kids/Kids';
import SingleProduct from './Components/SingleProduct/SingleProduct';
export default function App() {
    const Routing = createBrowserRouter([{path: "/" , element:<Layout/> , children: [
      {path: "/" , element: <Men/>} , {path: "/Women" , element: <Women/>} , {path:"/Kids" , element: <Kids/>} , {path:'/SingleProduct' , element: <SingleProduct/>}
    ]}]);
    return (
      <>
        <RouterProvider router={Routing}/>
        {/* <Layout/> */}
      </>
    )
}
