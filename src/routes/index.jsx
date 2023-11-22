import routesConfig from '../config/routes.jsx';

// Layouts
import { HeaderOnly } from '../components/Layout/';

// Pages
import Home from '../pages/Home/Home.jsx';
import Following from '../pages/Following/Following.jsx';
import Upload from '../pages/Upload/Upload.jsx';
import Profile from '../pages/Profile/Profile.jsx';

// Public routes
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.profile, component: Profile },
];

const privatRoutes = [];

export { publicRoutes, privatRoutes };
