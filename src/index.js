import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Body from './Routing/Body';
import Footer from './Routing/Footer';
import Header from './Routing/Header';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutUs from './Routing/AboutUs';
import ContactUs from './Routing/ContactUs';

 const AppRouter = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer/>
      </>
    )
  }

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppRouter />,
      children: [
        {
          path: "/",
      element: <Body />,
      },
        {
          path: "/about",
          element:<AboutUs />
        },
          {
          path: "/contact",
          element:<ContactUs />
        },
      ]
      
    }
  ])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
