'use client'

import Image from 'next/image';
import styles from './Navbar.module.css';
import SignIn from '../Auth/SignIn';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }
    return (<>
      <nav className={`flex items-center justify-between ${styles.app_navbar}`}>
        <div className={styles.app_logo}>
          <Image src='/logo.png' alt='logo' width='200' height='50' />
        </div>
        <ul className={`hidden md:flex ${styles.links}`}>
          <li className='cursor-pointer mx-4'>About</li>
          <li className='cursor-pointer mx-4'>Features</li>
          <li className='cursor-pointer mx-4'>Pricing</li>
          <li className='cursor-pointer mx-4'>Careers</li>
          <li className='cursor-pointer mx-4'>FAQs</li>
          <li className='cursor-pointer mx-4'>Contact</li>
        </ul>
        <div className={styles.auth_btn}>
          <button onClick={handleClick}>Sign In</button>
        </div>
      </nav>
      <SignIn isOpen={isOpen} onClose={handleClose} />
    </>);
  }
  