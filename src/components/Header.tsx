'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Wrap controlNavbar in useCallback to prevent it from being recreated on every render.
    // This allows us to safely add it to the useEffect dependency array.
    const controlNavbar = useCallback(() => {
        if (typeof window !== 'undefined') {
            const currentScrollY = window.scrollY;
            // Show navbar if scrolling up or at the very top of the page
            if (currentScrollY < lastScrollY || currentScrollY <= 10) {
                setIsVisible(true);
            } else { // Hide navbar if scrolling down
                setIsVisible(false);
            }
            // Remember the new scroll position for the next move
            setLastScrollY(currentScrollY);
        }
    }, [lastScrollY]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // Cleanup the event listener on component unmount
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [controlNavbar]); // Add controlNavbar to the dependency array

    return (
        <header 
            className={`bg-white/80 mx-2 max-w-6xl w-full rounded-md backdrop-blur-md sticky top-2 z-50 border-b border-gray-200 transition-all duration-400 ${isVisible ? 'translate-y-4 opacity-100' : '-translate-y-full opacity-0'}`}
        >
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="text-2xl font-bold text-gray-900">
                        Vaibhav Surani
                    </Link>
                    <nav>
                        <ul className="flex items-center space-x-6">
                            <li><Link href="/#projects" className="text-gray-600 hover:text-gray-900">Projects</Link></li>
                            <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
                            <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

