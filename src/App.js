import './App.css';
import Signup from './components/Signup';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SuccessPage from './components/SuccessPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signup/>,
    },
    {
      path: "/success",
      element: <SuccessPage/>,
    },
  ]);
  return (
    <div className="bg-gray-700 p-4 h-screen py-[4%]">
         <RouterProvider router={router} /> 
    </div>
  );
}

export default App;
