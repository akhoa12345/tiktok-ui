import config from '../config';

// Layouts
import { HeaderOnly } from '../layouts';

// Pages
import Home from '../pages/Home/Home.jsx';
import Following from '../pages/Following/Following.jsx';
import Upload from '../pages/Upload/Upload.jsx';
import Profile from '../pages/Profile/Profile.jsx';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.profile, component: Profile },
];

const privatRoutes = [];

export { publicRoutes, privatRoutes };
