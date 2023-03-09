"use client";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { user } = useContext(UserContext);
  return (
    <nav className='flex justify-between items-center py-7  text-black max-w-[1150px] mx-auto tracking-wide bg-white'>
      <Link href={"./"}>
        <Image src='/logo.png' width={150} height={150} alt='logo' />
      </Link>
      <div>
        {!user && (
          <>
            <div className='flex items-center gap-10 text-lg'>
              <div>GIFT CARDS</div>
              <div>MENU</div>
              <div>ORDER</div>
              <div>LOCATIONS</div>
              <div>ABOUT</div>
              <div className='flex items-center justify-center leading-8 rounded-full ring-2 ring-black  px-8 cursor-pointer mr-1'>
                <Link href={"/enter"}>SIGN IN</Link>
              </div>
              <div>
                <svg
                  version='1.1'
                  id='Layer_1'
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  viewBox='0 0 512 512'
                  className='w-6 h-6'
                >
                  <g>
                    <path
                      d='M448.28,137.67c-3.98-3.98-9.67-6.82-15.93-6.82h-56.89V120.6C375.47,54.04,320.85,0,257.14,0h-2.28
		c-63.72,0-118.33,54.04-118.33,120.6v10.24H79.64c-12.52,0-22.76,10.81-22.76,23.89v334.51c0,12.52,10.24,22.76,22.76,22.76h352.71
		c12.52,0,22.76-10.24,22.76-22.76V154.17C455.11,148.48,452.83,142.22,448.28,137.67z M182.04,120.6
		c0-41.53,34.13-75.09,72.82-75.09h2.28c38.68,0,72.82,33.56,72.82,75.09v10.24H182.04V120.6z M409.6,466.49H102.4V176.36h34.13
		v39.26c0,12.51,10.24,22.76,22.76,22.76c12.52,0,22.76-10.24,22.76-22.76v-39.26h147.91v39.26c0,12.51,10.24,22.76,22.76,22.76
		s22.76-10.24,22.76-22.76v-39.26h34.13V466.49z'
                    />
                  </g>
                </svg>
              </div>
            </div>
          </>
        )}

        {user && (
          <>
            <div className='flex items-center gap-10 text-lg'>
              <div>GIFT CARDS</div>
              <div>MENU</div>
              <div>ORDER</div>
              <div>LOCATIONS</div>
              <div>ABOUT</div>
              <div className='flex items-center justify-center   cursor-pointer '>
                <Link href={"./dashboard"}>
                  <Image
                    src={user.photoURL}
                    width={30}
                    height={30}
                    alt='user'
                    className='rounded-full'
                  />
                </Link>
              </div>
              <div>
                <svg
                  version='1.1'
                  id='Layer_1'
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  viewBox='0 0 512 512'
                  className='w-6 h-6'
                >
                  <g>
                    <path
                      d='M448.28,137.67c-3.98-3.98-9.67-6.82-15.93-6.82h-56.89V120.6C375.47,54.04,320.85,0,257.14,0h-2.28
		c-63.72,0-118.33,54.04-118.33,120.6v10.24H79.64c-12.52,0-22.76,10.81-22.76,23.89v334.51c0,12.52,10.24,22.76,22.76,22.76h352.71
		c12.52,0,22.76-10.24,22.76-22.76V154.17C455.11,148.48,452.83,142.22,448.28,137.67z M182.04,120.6
		c0-41.53,34.13-75.09,72.82-75.09h2.28c38.68,0,72.82,33.56,72.82,75.09v10.24H182.04V120.6z M409.6,466.49H102.4V176.36h34.13
		v39.26c0,12.51,10.24,22.76,22.76,22.76c12.52,0,22.76-10.24,22.76-22.76v-39.26h147.91v39.26c0,12.51,10.24,22.76,22.76,22.76
		s22.76-10.24,22.76-22.76v-39.26h34.13V466.49z'
                    />
                  </g>
                </svg>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
