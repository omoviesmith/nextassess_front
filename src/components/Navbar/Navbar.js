import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
      <nav className={`flex items-center justify-between ${styles.app_navbar}`}>
        <div className={styles.app_logo}>
          <Image src='/logo.png' alt='logo' width='200' height='50' />
        </div>
        <ul className={styles.links}>
          <li className='cursor-pointer mx-4'>About</li>
          <li className='cursor-pointer mx-4'>Features</li>
          <li className='cursor-pointer mx-4'>Pricing</li>
          <li className='cursor-pointer mx-4'>Careers</li>
          <li className='cursor-pointer mx-4'>FAQs</li>
          <li className='cursor-pointer mx-4'>Contact</li>
        </ul>
        <div className={styles.auth_btn}>
          <button>Sign In</button>
        </div>
      </nav>
    );
  }
  