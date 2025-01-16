import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./pages/Login"

function App() {
  const router = createBrowserRouter([
    {
      path:'/Login',
      element: <Login/>
    }
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
