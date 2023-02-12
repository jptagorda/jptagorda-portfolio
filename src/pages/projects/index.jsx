import Head from 'next/head';
import Image from 'next/image';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/layouts/SimpleLayout';
import logoPortfolio from '@/images/avatar.jpg';
import logoNextjs from '@/images/stacks/nextjs.svg';
import logoLyra from '@/images/projects/lyra.svg';
import Link from 'next/link';
import { GitHubIcon } from '@/components/SocialIcons';
import { ArrowTopRightOnSquareIcon, GlobeAsiaAustraliaIcon } from '@heroicons/react/24/solid';

const projects = [
    {
        name: 'My portfolio',
        description: 'My portfolio website resository.',
        logo: logoPortfolio,
        links: [
            {
                href: 'https://github.com/jxclsv/jptagorda-portfolio',
                icon: GitHubIcon,
            },
        ],
    },
    {
        name: 'Nextjs Todo',
        description: 'Simple todo list app built with Nextjs',
        logo: logoNextjs,
        links: [
            {
                href: 'https://github.com/jxclsv/nextjs-todo',
                icon: GitHubIcon,
            },
            {
                href: 'https://nextjs-todo.pages.dev/',
                icon: ArrowTopRightOnSquareIcon,
            },
        ],
    },
    {
        name: 'Laravel Lyra',
        description: 'High performance web animation library, hand-written in optimized WASM.',
        links: [{ href: '/projects/lyra', label: 'github.com', icon: ArrowTopRightOnSquareIcon }],
        logo: logoLyra,
    },
];

function LinkIcon({ icon, ...props }) {
    return { icon };
}

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects - Justin Tagorda</title>
                <meta name="description" content="Things I’ve made trying to put my dent in the universe." />
            </Head>
            <SimpleLayout
                title="Things I’ve made trying to put my dent in the universe."
                intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.">
                <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map(project => (
                        <Card as="li" key={project.name} className="flex h-72 justify-around">
                            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                <Image src={project.logo} alt="" className="h-8 w-8 rounded-full" unoptimized />
                            </div>
                            <h2 className="z-20 mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">{project.name}</h2>
                            <Card.Description>{project.description}</Card.Description>
                            <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
                            <div className="flex space-x-5">
                                {project.links.map((item, index) => (
                                    <Link key={index} href={item.href} className="z-50" target="_blank">
                                        <item.icon className="f h-6 w-6 hover:opacity-75" />
                                    </Link>
                                ))}
                            </div>
                        </Card>
                    ))}
                </ul>
            </SimpleLayout>
        </>
    );
}
