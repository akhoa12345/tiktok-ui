// Layouts
import { HeaderOnly } from '../components/Layout/';

import Home from '../pages/Home/Home.jsx';
import Following from '../pages/Following/Following.jsx';
import Upload from '../pages/Upload/Upload.jsx';

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/upload', component: Upload, layout: HeaderOnly},
];

const privatRoutes = [];

export { publicRoutes, privatRoutes };
