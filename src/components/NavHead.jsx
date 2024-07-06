'use client'
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';


import React from 'react';

const NavHead = () => {

    const searchParams = useSearchParams()
    const type = searchParams.get('type');
    console.log(type);
    return (
        <div className='dark:bg-gray-600  bg-amber-100  py-4 flex justify-center gap-5'>
            <Link  href={`/?type=tranding`} className={`hover:text-amber-600 font-bold ${type === 'tranding' && 'underline decoration-4 decoration-amber-500 underline-offset-8 '}`}>Tranding</Link>
            <Link href={`/?type=toprated`} className={`hover:text-amber-600 font-bold ${type === 'toprated' && 'underline decoration-4 decoration-amber-500 underline-offset-8 '}`}>Top Rated</Link>
        </div>
    );
};

export default NavHead;