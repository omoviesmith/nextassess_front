'use client'
import Image from 'next/image';
import styles from './Modal.module.css';
import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, children }) {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);
    if (!isOpen) return null;

    return (
        <div className={styles.modal_overlay}>
            <div className={styles.modal_content}>
                <div className={styles.modal_close} onClick={onClose}>
                    <Image src='/close.svg' height='24' width='24' />
                </div>
                <div className='z-10 relative'>
                    {children}
                </div>
                <Image className='absolute w-72 h-64 right-0 z-[1] top-2/4' src='/Vector.png' width='500' height='490' />
            </div>
        </div>
    );
}
