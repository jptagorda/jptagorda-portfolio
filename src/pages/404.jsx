import Link from 'next/link';
import React from 'react';

export default function Error() {
    return (
        <>
            <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
                <p className="text-base font-semibold leading-8 dark:text-white">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight dark:text-white sm:text-5xl">Page not found</h1>
                <p className="mt-4 text-base dark:text-white/70 sm:mt-6">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-10 flex justify-center">
                    <Link href="/" className="text-sm font-semibold leading-7 dark:text-white">
                        <span aria-hidden="true">&larr;</span> Back to home
                    </Link>
                </div>
            </div>
        </>
    );
}
