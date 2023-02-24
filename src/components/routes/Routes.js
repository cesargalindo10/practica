import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import { Counter } from "../../features/counter/Counter";
import { Login } from "../Autenticacion/Login";
import Producto from "../Producto";
export function  Routes(){
    const router = createBrowserRouter([
        {
          path: "/",
          element: (
            <div>
              <Producto/>
            </div>
          ),
        },
        {
          path: "counter",
          element: <Counter/>
        },
        {
          path: "login",
          element: <Login/>
        },
      ]);
      return(
          <RouterProvider router={router}/>
      )
}
