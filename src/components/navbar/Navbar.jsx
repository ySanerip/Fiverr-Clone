import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const {pathname} = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive)
    }
  }, []);

  const currentUser = {
    id: 1,
    username: "Nanana",
    isSeller: true,
  };


  return (
    <div className={active || pathname !== "/" ? 'navbar active' : 'navbar'}>
      <div className="container">
        <div className="logo">
          <Link  className="link" to="/">
            <span className='text'>fiverr</span>
          </Link>
          <span className='dot'>.</span>
        </div>
        <div className="links">
          <span>Liverr Bussines</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sing In</span>
          {!currentUser?.isSeller && (<span>Become a Seller</span>)}
          {!currentUser?.isSeller && (<button>Join</button>)}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src="" alt="" />
              <span>{currentUser?.username}</span>
              {open && (<div className="options">
                {currentUser?.isSeller && (
                  <>
                    <Link className="link"to="/mygigs">Gigs</Link>
                    <Link className="link"to="/add">Add New Gigs</Link>
                  </>
                )}
                <Link className="link" to="/orders">Orders</Link>
                <Link className="link"to="/messages">Message</Link>
                <Link className="link"to="/">Log Out</Link>
              </div>)}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/" ) && (
        <>
          <hr />
          <div className="menu">
            <span>test</span>
            <span>test2</span>
          </div>
        </>
      )}
    </div>
  )
}

export default Navbar