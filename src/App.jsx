import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import './App.css';
import WelcomePage from "./pages/WelcomePage";


function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<WelcomePage/>}/>
            </Route>
        )
    );
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default App;
