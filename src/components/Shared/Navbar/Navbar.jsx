import Container from '../Container'
import { AiOutlineMenu } from 'react-icons/ai'
import { LiaShoppingCartSolid } from "react-icons/lia";
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import useAuth from '../../../hooks/useAuth'
import avatarImg from '../../../assets/images/placeholder.jpg'
import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline";
import SharchModal from '../../Modal/SharchModal'
import { FaLeaf } from "react-icons/fa";
import AddToCatModa from '../../Modal/AddToCatModa';
import { fetchCartItems } from '../../../api/api';
const Navbar = () => {
  const { user, logOut} = useAuth()
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [cartCount, setCartCount] = useState([]);
  const [addtocartmodal, setAddtocartmodal] = useState(false);

  const handleModal = () => {
    setModal(true); 
  }

  const handmodaloff = () => {
    setModal(false);
  }
  const handleAddTocart = () =>{
    setAddtocartmodal(true)
  } 

  const handaddtocartmodal = () => {
    setAddtocartmodal(false)
  }

  

  useEffect(() => {
    if (user?.email) {
      fetchCartItems(user.email)
        .then(data => setCartCount(data.length))
        .catch(err => console.error(err));
    }
  }, [user]);
  console.log(cartCount);
  



  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Link to='/'>
              <img src="https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC01/image/catalog/logo.png" alt='logo' className='' />
            </Link>
            {/* Dropdown Menu */}


            <div className="flex gap-4 ">
              <Link to="/" className="text-xl">Home</Link>
              <Link to="/plant" className="text-xl">Plant</Link>
              
            </div>
            <div className='relative'>
              <div className='flex flex-row items-center gap-3'>
                <button onClick={handleAddTocart} className="relative text-black hover:text-black">
                  <LiaShoppingCartSolid className="w-10 h-8" />
                  {/* <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    
                  </span> */}
                </button>



                  <button onClick={handleModal} className="p-2 text-black hover:text-black">
                  <MagnifyingGlassIcon className="h-6 w-6" />
                </button>

                <Link to={"/login"}>
                  <button className="p-2 text-black hover:text-black">
                    <UserIcon className="h-6 w-6" />
                  </button>
                </Link>
                
                {/* Dropdown btn */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                  <AiOutlineMenu />
                  <div className='hidden md:block'>
                    {/* Avatar */}
                    <img
                      className='rounded-full'
                      referrerPolicy='no-referrer'
                      src={user && user.photoURL ? user.photoURL : avatarImg}
                      alt='profile'
                      height='30'
                      width='30'
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                  <div className='flex flex-col cursor-pointer'>
                    <Link
                      to='/'
                      className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                    >
                      Home
                    </Link>

                    {user ? (
                      <>
                        <Link
                          to='/dashboard'
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Dashboard
                        </Link>
                        <div
                          onClick={logOut}
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to='/login'
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Login
                        </Link>
                        <Link
                          to='/signup'
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            

          </div>
        </Container>
      
      </div>
      {
        modal &&
        <>
          <SharchModal handmodaloff={handmodaloff} />
        </>
      }

      {
        addtocartmodal && 
        <>
          <AddToCatModa handaddtocartmodal={handaddtocartmodal} />
        </>
      }
    </div>
  )
}

export default Navbar
