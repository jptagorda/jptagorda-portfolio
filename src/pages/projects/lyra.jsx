import React from 'react';
import ProjectShowLayout from '@/layouts/ProjectShowLayout';

import LogoLaravel from '@/images/stack/laravel.svg';
import LogoInertia from '@/images/stack/inertiajs.svg';
import LogoTailwindcss from '@/images/stack/tailwindcss.svg';
import LogoReactjs from '@/images/stack/react.svg';

export default function lyra() {
    const project = {
        title: 'Lyra',
        avatar: '/images/logos/lyra.svg',
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
            { name: 'Laravel', icon: LogoLaravel, href: 'https://laravel.com' },
            { name: 'Reactjs', icon: LogoReactjs, href: 'https://beta.reactjs.org' },
            { name: 'Inertiajs', icon: LogoInertia, href: 'https://inertiajs.com' },
            { name: 'Tailwindcss', icon: LogoTailwindcss, href: 'https://tailwindcss.com' },
        ],
    };

    return <ProjectShowLayout project={project} />;
}
