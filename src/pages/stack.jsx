import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import React from 'react';
import collect from 'collect.js';

import {
    NextJSIcon,
    ReactJSIcon,
    NuxtJSIcon,
    VueJSIcon,
    TailwindCSSIcon,
    BootstrapIcon,
    LaravelIcon,
    ExpressJSIcon,
    NodeJSIcon,
    PHPIcon,
    MysqlIcon,
    MongoDBIcon,
    GraphQLIcon,
    MariaDBIcon,
    FirebaseIcon,
    LaravelForgeIcon,
    LaravelVaporIcon,
    AmazonAWSIcon,
    RedisIcon,
    PiniaIcon,
    LaravelBreezeIcon,
    LaravelDuskIcon,
    LaravelFortifyIcon,
    LaravelHorizonIcon,
    LaravelJetstreamIcon,
    LaravelNovaIcon,
    LaravelSanctumIcon,
    LaravelSocialiteIcon,
    LaravelTelescopeIcon,
    LaravelValetIcon,
    InertiaJSIcon,
    SpatieIcon,
    AlpineJSIcon,
    LaravelLivewireIcon,
} from '@/components/StackIcons';

export default function Stack() {
    const stacks = collect([
        { name: 'Laravel', type: 'primary stack', avatar: LaravelIcon, href: 'https://laravel.com' },
        { name: 'InertiaJS', type: 'primary stack', avatar: InertiaJSIcon, href: 'https://inertiajs.com' },
        { name: 'ReactJS', type: 'primary stack', avatar: ReactJSIcon, href: 'https://beta.reactjs.org' },
        { name: 'VueJS', type: 'primary stack', avatar: VueJSIcon, href: 'https://vuejs.org' },
        { name: 'TailwindCSS', type: 'primary stack', avatar: TailwindCSSIcon, href: 'https://tailwindcss.com' },
        { name: 'TailwindUI', type: 'primary stack', avatar: TailwindCSSIcon, href: 'https://tailwindui.com' },

        { name: 'VueJS', type: 'frontend frameworks', avatar: VueJSIcon, href: 'https://vuejs.org' },
        { name: 'NuxtJS', type: 'frontend frameworks', avatar: NuxtJSIcon, href: 'https://nuxt.com/' },
        { name: 'ReactJS', type: 'frontend frameworks', avatar: ReactJSIcon, href: 'https://beta.reactjs.org' },
        { name: 'NextJS', type: 'frontend frameworks', avatar: NextJSIcon, href: 'https://beta.nextjs.org' },
        { name: 'AlpineJS', type: 'frontend frameworks', avatar: AlpineJSIcon, href: 'https://alpinejs.dev/' },

        { name: 'TailwindCSS', type: 'css frameworks', avatar: TailwindCSSIcon, href: 'https://tailwindcss.com' },
        { name: 'TailwindUI', type: 'css frameworks', avatar: TailwindCSSIcon, href: 'https://tailwindui.com' },
        { name: 'Bootstrap', type: 'css frameworks', avatar: BootstrapIcon, href: 'https://getbootstrap.com' },

        { name: 'Laravel', type: 'backend frameworks', avatar: LaravelIcon, href: 'https://laravel.com' },
        { name: 'Laravel Livewire', type: 'backend frameworks', avatar: LaravelLivewireIcon, href: 'https://laravel-livewire.com' },
        { name: 'InertiaJS', type: 'backend frameworks', avatar: InertiaJSIcon, href: 'https://inertiajs.com' },
        { name: 'ExpressJS', type: 'backend frameworks', avatar: ExpressJSIcon, href: 'https://expressjs.com' },
        { name: 'NodeJS', type: 'backend frameworks', avatar: NodeJSIcon, href: 'https://nodejs.org' },
        { name: 'PHP', type: 'backend frameworks', avatar: PHPIcon, href: 'https://php.net' },

        { name: 'Mysql', type: 'database', avatar: MysqlIcon, href: 'https://mysql.com' },
        { name: 'Mariadb', type: 'database', avatar: MariaDBIcon, href: 'https://mariadb.org' },
        { name: 'GraphQL', type: 'database', avatar: GraphQLIcon, href: 'https://graphql.org' },
        { name: 'MongoDB', type: 'database', avatar: MongoDBIcon, href: 'https://mongodb.com' },
        { name: 'Firebase', type: 'database', avatar: FirebaseIcon, href: 'https://firebase.google.com' },

        { name: 'Forge', type: 'devops', avatar: LaravelForgeIcon, href: 'https://forge.laravel.com' },
        { name: 'Vapor', type: 'devops', avatar: LaravelVaporIcon, href: 'https://vapor.laravel.com' },

        { name: 'Amazon S3', type: 'storage', avatar: AmazonAWSIcon, href: 'https://s3.amazon.com' },
        { name: 'Redis', type: 'storage', avatar: RedisIcon, href: 'https://redis.io' },

        { name: 'Pinia', type: 'vue-packages', avatar: PiniaIcon, href: 'pinia.vuejs.org' },
        { name: 'Vuex', type: 'vue-packages', avatar: VueJSIcon, href: 'vuex.vuejs.org' },

        { name: 'Laravel Breeze', type: 'laravel-packages', avatar: LaravelBreezeIcon, href: 'https://laravel.com/docs/starter-kits#laravel-breeze' },
        { name: 'Laravel Dusk', type: 'laravel-packages', avatar: LaravelDuskIcon, href: 'https://laravel.com/docs/dusk' },
        // { name: 'Laravel Fortify', type: 'laravel-packages', avatar: LaravelFortifyIcon, href: 'https://laravel.com/docs/fortify' },
        { name: 'Laravel Horizon', type: 'laravel-packages', avatar: LaravelHorizonIcon, href: 'https://laravel.com/docs/horizon' },
        { name: 'Laravel Jetstream', type: 'laravel-packages', avatar: LaravelJetstreamIcon, href: 'https://jetstream.laravel.com' },
        { name: 'Laravel Nova', type: 'laravel-packages', avatar: LaravelNovaIcon, href: 'https://nova.laravel.com' },
        { name: 'Laravel Sanctum', type: 'laravel-packages', avatar: LaravelSanctumIcon, href: 'https://laravel.com/docs/sanctum' },
        { name: 'Laravel Socialite', type: 'laravel-packages', avatar: LaravelSocialiteIcon, href: 'https://laravel.com/docs/socialite' },
        { name: 'Laravel Telescope', type: 'laravel-packages', avatar: LaravelTelescopeIcon, href: 'https://laravel.com/docs/telescope' },
        { name: 'Laravel Valet', type: 'laravel-packages', avatar: LaravelValetIcon, href: 'https://laravel.com/docs/valet' },
        { name: 'Spatie Laravel Permission', type: 'laravel-packages', avatar: SpatieIcon, href: 'https://github.com/spatie/laravel-permission' },
        { name: 'Spatie Laravel Sluggable', type: 'laravel-packages', avatar: SpatieIcon, href: 'https://github.com/spatie/laravel-sluggable' },
    ])
        .groupBy('type')
        .all();
    return (
        <>
            <Container className="mt-16 sm:mt-32">
                {Object.keys(stacks).map((type, index) => (
                    <div key={index}>
                        <h1 className="my-32 text-center font-bold uppercase tracking-wider">{type}</h1>
                        <ul role="list" className="grid grid-cols-2 gap-x-16 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
                            {stacks[type].items.map(stack => (
                                <Card as="li" key={stack.name + stack.type}>
                                    <div className="relative z-10 m-auto flex h-12 w-12 items-center justify-center">
                                        <stack.avatar className="h-full w-full" />
                                    </div>
                                    <h2 className="m-auto mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                                        <Card.Link href={stack.href} target="_blank">
                                            {stack.name}
                                        </Card.Link>
                                    </h2>
                                </Card>
                            ))}
                        </ul>
                    </div>
                ))}
            </Container>
        </>
    );
}
