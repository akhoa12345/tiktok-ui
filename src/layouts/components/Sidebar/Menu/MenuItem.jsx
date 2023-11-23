import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function MenuItem({ title, to, icon, activeIcon }) {
    return (
        <NavLinkStyle to={to}>
            <span className="icon">{icon}</span>
            <span className="active-icon">{activeIcon}</span>
            <span className="title">{title}</span>
        </NavLinkStyle>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
};

export default MenuItem;

const NavLinkStyle = styled(NavLink)`
    display: flex;
    align-items: center;
    padding: 8px;
    font-size: 1.8rem;
    font-weight: 700;
    border-radius: 4px;
    color: var(--text-color);
    transition: background-color ease-in-out 200ms;

    &.active {
        color: var(--primary);

        .icon {
            display: none;
        }

        .active-icon {
            display: flex;
        }
    }

    &:hover {
        background-color: rgba(22, 24, 35, 0.03);
    }

    .icon,
    .active-icon {
        display: flex;
    }

    .active-icon {
        display: none;
    }

    .title {
        margin-left: 10px;
    }
`;
