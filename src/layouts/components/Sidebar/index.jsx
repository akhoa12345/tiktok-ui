import styled from 'styled-components';
import config from '../../../config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '../../../components/Icons';

function Sidebar() {
    return (
        <SidebarStyle>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
        </SidebarStyle>
    );
}
const SidebarStyle = styled.aside`
    width: 356px;
    padding: 20px 0 26px 8px;
    margin-left: -18px;
`;

export default Sidebar;
