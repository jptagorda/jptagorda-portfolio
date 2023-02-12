import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Container } from '@/components/Container';

function StackLink({ className, href, icon: Icon, children }) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                target="_blank"
                href={href}
                className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-purple-500 dark:text-zinc-200 dark:hover:text-purple-500"
            >
                <Icon className="h-10 w-10" />
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    );
}

export default function ProjectShowLayout({ project }) {
    return (
        <>
            <Head>
                <title>{project.name} | Projects - Justin Tagorda</title>
                <meta name="description" content="I’m Justin Tagorda. I live in Quezon City, Philippines Code Blooded." />
            </Head>
            <Container className="mt-16 sm:mt-28">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                            <project.avatar className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"/>
                            {/* <img
                                src={project.avatar}
                                alt=""
                                sizes="(min-width: 1024px) 32rem, 20rem"
                                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                            /> */}
                        </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">{project.title}</h1>
                        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">{project.description}</div>
                    </div>
                    {/* <div className="mb-20 lg:pl-20">
                        <h3>Stacks used</h3>
                        <ul role="list" className="space-y-4">
                            {project.stacks?.map((item, index) => (
                                <StackLink key={index} href={item.href} icon={item.icon} className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
                                    {item.name}
                                </StackLink>
                            ))}
                        </ul>
                    </div> */}
                </div>

                <div className="mt-10 space-y-10">
                    <h2 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">Stacks used</h2>
                    <ul role="list" className="grid grid-cols-2 gap-y-5 lg:grid-cols-4">
                        {project.stacks?.map((item, index) => (
                            <StackLink key={index} href={item.href} icon={item.icon} className=" border-zinc-100 dark:border-zinc-700/40">
                                {item.name}
                            </StackLink>
                        ))}
                    </ul>
                </div>

                <div className="mt-10 space-y-10">
                    <h2 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">Screenshots</h2>

                    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-8">
                        {project.images.map((file, index) => (
                            <div key={index} className="space-y-5">
                                <li className="relative">
                                    <Link href={`/images/projects/Lyra/sample-screenshot-${index + 1}.png`} target="_blank">
                                        <div className="aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                            <img src={`/images/projects/Lyra/sample-screenshot-${index + 1}.png`} alt="" className={'pointer-events-none object-cover'} />
                                            <button type="button" className="absolute inset-0 focus:outline-none"></button>
                                        </div>
                                    </Link>
                                </li>
                                <li className="relative">
                                    <Link href={`/images/projects/Lyra/sample-screenshot-${index + 1}-dark.png`} target="_blank">
                                        <div className="aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                            <img src={`/images/projects/Lyra/sample-screenshot-${index + 1}-dark.png`} alt="" className={'pointer-events-none object-cover'} />
                                            <button type="button" className="absolute inset-0 focus:outline-none"></button>
                                        </div>
                                    </Link>
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>
            </Container>
        </>
    );
}
