import React from 'react'
import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import './NavBar.css'
import {
  Navbar,
  Typography,
} from "@material-tailwind/react";

export default function NavBar({user, setUser, setIsModalOpen}) {

  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

    const navList = (
      <ul className="justify-start mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-color-gray-700 w-full">
        <Typography>
          Hello, {user.name}
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          <Link to='/home'>Home</Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          <Link to='/account'>Account</Link>
        </Typography>
      </ul>
    );

  function handleLogOut(){
    userService.logOut()
    setUser(null)
  }

  return (
      <nav className="block py-4 px-8 shadow-md backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border bg-white dark:bg-gray-900 fixed z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 text-black w-full">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center gap-4">
            <Typography
              as="a"
              href="#"
              className="flex items-center justify-between pl-2 self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >
              NetLinx
            </Typography>
            <button
                className="flex items-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center pl"
                onClick={() => setIsModalOpen(true)}
              >
                New Post
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <button 
              className="flex items-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center pl"
              type="button" 
              onClick={handleLogOut} 
            >
              Log Out
            </button>
          </div>
        </div>  
      </nav>
);
}
