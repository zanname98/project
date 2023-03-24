//Pahes

import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import Blog from '~/pages/Blog';
import Service from '~/pages/Service';
import Portfolio from '~/pages/Portfolio';
import Cv from '~/pages/Cv';

const publicRouters = [
    { path: '/', component: Home },
    { path: '/cv', component: Cv },
    { path: '/contact', component: Contact },
    { path: '/blog', component: Blog },
    { path: '/service', component: Service },
    { path: '/portfolio', component: Portfolio },
];

export { publicRouters };
