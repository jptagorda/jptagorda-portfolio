import React from 'react';
import ProjectShowLayout from '@/layouts/ProjectShowLayout';
import { InertiaJSIcon, LaravelIcon, ReactJSIcon, TailwindCSSIcon } from '@/components/StackIcons';

import { LyraIcon } from '@/components/ProjectIcons';

export default function lyra() {
    const project = {
        name: 'Lyra',
        avatar: LyraIcon,
        description: (
            <>
                <p className="text-lg">
                    A personal boilerplate for projects that I create. It helps a lot to kick-start the project and skip the annoying things that UI needs to develop over and over
                    again eg. modals, notifications, and more.
                </p>
            </>
        ),
        images: [...Array(8)],
        stacks: [
            { name: 'Laravel', icon: LaravelIcon, href: 'https://laravel.com' },
            { name: 'Reactjs', icon: ReactJSIcon, href: 'https://beta.reactjs.org' },
            { name: 'Inertiajs', icon: InertiaJSIcon, href: 'https://inertiajs.com' },
            { name: 'Tailwindcss', icon: TailwindCSSIcon, href: 'https://tailwindcss.com' },
        ],
    };

    return <ProjectShowLayout project={project} />;
}
