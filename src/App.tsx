import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
function App() {
  const router = createBrowserRouter([
    {
      path:'/Login',
      element: <Login/>
    },
    {
      path:'/Dashboard',
      element: <Dashboard/>
    }
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
