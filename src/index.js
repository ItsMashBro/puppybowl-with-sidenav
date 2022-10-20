import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Components/Homepage';
import Errorpage from "./Components/errorpage";
import Settings from "./Components/Settings";
import Puppyroster from "./Components/puppyroster";
import Aboutpuppy from "./Components/aboutpuppy";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../src/styles.css';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
        errorElement: <Errorpage />,
        children: [
            {
                path: 'Settings',
                element: <Settings />
            },
            {
                path: 'aboutpuppy',
                element: <Aboutpuppy />
            },
            {
                path: 'Homepage',
                element: <Puppyroster />
            }
        ]
    }
])

ReactDOM.render(<RouterProvider router={router} />, document.getElementById('app'));