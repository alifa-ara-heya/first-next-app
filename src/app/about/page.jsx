'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const AboutPage = () => {
    //another way of navigation to use useRouter hook, make sure to import it from 'next/navigation'

    const router = useRouter();
    const isLoggedIn = true;

    const handleNavigation = () => {
        if (isLoggedIn) {
            router.push('/about/address')
        } else {
            router.push('/')
        }
    }

    return (
        <div>
            <h2 className='text-3xl'>About</h2>
            <Link href='/about/address'>Address Page</Link>
            <button className='' type='button' onClick={handleNavigation}>Address</button>
        </div>
    );
};

export default AboutPage;