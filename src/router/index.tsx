import { memo, lazy } from 'react';
import { useRoutes, Navigate } from "react-router-dom";

const Home = lazy(()=>import('@/layout/home'));
const Bar = lazy(()=>import('@/views/bar'));
const Foo = lazy(()=>import('@/views/foo'));
const NotFound = lazy(()=>import('@/views/notFound'));

const Router = memo(() => {
  return useRoutes([
    {
      path: "/",
      element:  <Navigate to="/home" replace={true} />
    },
    {
      path: "/home",
      element: <Home></Home>,
      children:[
        {
          path: "",
          element: <Navigate to="/home/bar" replace={true} />
        },
        {
          path: "bar",
          element: <Bar/>
        },
        {
          path: "foo",
          element: <Foo/>
        }
      ]
    },
    {
      path: "*",
      element:  <NotFound/>
    },
  ]);
})

export default Router;