import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { Container } from '@/components/Container';

import socialMedias from '@/lib/socialmedias';

import image1 from '@/images/photos/image-1.jpg';
import image2 from '@/images/photos/image-2.jpg';
import image3 from '@/images/photos/image-3.jpg';
import image4 from '@/images/photos/image-4.jpg';
import image5 from '@/images/photos/image-5.jpg';

function SocialLink({ icon: Icon, ...props }) {
    return (
        <Link target="_blank" className="group -m-1 p-1" {...props}>
            <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
    );
}

function Photos() {
    let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];

    return (
        <div className="mt-16 sm:mt-20">
            <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
                    <div
                        key={image.src}
                        className={clsx(
                            'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                            rotations[imageIndex % rotations.length],
                        )}
                    >
                        <Image src={image} alt="" sizes="(min-width: 640px) 18rem, 11rem" className="absolute inset-0 h-full w-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <>
            <Head>
                <title>Justin Tagorda - Fullstack Dev</title>
                <meta name="description" content="I’m Justin, a website developer and entrepreneur based in Quezon City.." />
            </Head>
            <Container className="mt-10">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Fullstack Website Developer.</h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        I’m Justin, a software developer and entrepreneur based in Quezon City. I built many functional websites, from E-commerce to Multilevel Marketing website.
                    </p>

                    <div className="mt-6 flex gap-6">
                        {socialMedias.map((item, index) => (
                            <SocialLink key={index} href={item.href} icon={item.icon} />
                        ))}
                    </div>
                </div>
            </Container>
            <Photos />
        </>
    );
}
