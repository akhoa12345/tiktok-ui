// Layouts
import { HeaderOnly } from '../components/Layout/';

import Home from '../pages/Home/Home.jsx';
import Following from '../pages/Following/Following.jsx';
import Upload from '../pages/Upload/Upload.jsx';
import Profile from '../pages/Profile/Profile.jsx';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/@:nickname', component: Profile },
];

const privatRoutes = [];

export { publicRoutes, privatRoutes };
