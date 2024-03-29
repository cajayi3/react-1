import { useState} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import React from 'react'

function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    const dropDown = () => {
        setIsVisible(!isVisible)
        console.log(isVisible);
    }

    const clicked = () => {
        setIsVisible(false)
    }

    return (
        <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <Link to='/' className='font-semibold text-xl tracking-tight'>Inventory</Link>
            </div>
            <div className='block'>
                <button 
                    onClick={dropDown}
                className='flex.items-cneter px-3 py-2 text-teal-200 
                border rounded border-black-400 hover:text-white hover:border-white'
                >
                   <i className='fas fa-bars'></i>  
                </button>
            </div>
            { isVisible ? (
                 <div className='w-full block flex-grow items-center'>
                    <div className='text-sm lg:flex-grow'>
                        <Button className="p-3 m-5 bg-black-400 justify-center">
                            <div>
                                <Link to='/' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-red-200 hover:text-white mr-4'>
                                    Home
                                </Link>
                            </div>
                        </Button>
                        <Button className="p-3 m-5 bg-teal-400 justify-center">
                            <div>
                                <Link to='/Dashboard' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-red-200 hover:text-white mr-4'>
                                    Characters
                                </Link>
                            </div>
                        </Button>
                        <Button className="p-3 m-5 bg-teal-400 justify-center">
                            <div>
                                <Link to='/Login' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-red-200 hover:text-white mr-4'>
                                    Login
                                </Link>
                            </div>
                        </Button> 
                        <Button className="p-3 m-5 bg-teal-400 justify-center">
                            <div>
                                <Link to='/Sign-Up' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-red-200 hover:text-white mr-4'>
                                    Sign-Up
                                </Link>
                            </div>
                        </Button>
                        <Button className="p-3 m-5 bg-teal-400 justify-center">
                            <div>
                                <Link to='/Logout' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-red-200 hover:text-white mr-4'>
                                    Logout
                                </Link>
                            </div>
                        </Button>
                    </div>
            </div>
            ) : (
                <></> 
            )}
        </nav>
    )
}

export default Navbar