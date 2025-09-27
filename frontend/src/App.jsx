import {createBrowserRouter, RouterProvider} from "react-router-dom"
import BodyComponent from "./components/BodyComponent"
import HomePageComponent from "./components/HomePageComponent"
import ErrorComponent from "./components/ErrorComponent"

function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<BodyComponent />,
      children:[
        {
          path:"/",
          element:<HomePageComponent />
        }
      ],
      errorElement:<ErrorComponent />
    }
  ])

  return (
    <RouterProvider router={appRouter} />
  )
}

export default App
