import {createBrowserRouter, RouterProvider} from "react-router-dom"
import BodyComponent from "./components/BodyComponent"
import HomePageComponent from "./components/HomePageComponent"
import ErrorComponent from "./components/ErrorComponent"
import appStore from "./store/appStore"
import {Provider} from 'react-redux'
import FoodPageComponent from "./components/FoodPageComponent"

function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<BodyComponent />,
      children:[
        {
          path:"/",
          element:<HomePageComponent />
        },
        {
          path:"/search/:searchTerm",
          element:<HomePageComponent />
        },
        {
          path:"/tag/:tag",
          element:<HomePageComponent />
        },
        {
          path:"/food/:id",
          element:<FoodPageComponent />
        }
      ],
      errorElement:<ErrorComponent />
    }
  ])

  return (
    <Provider store = {appStore}>
      <RouterProvider router={appRouter} />
    </Provider>  )
}

export default App
