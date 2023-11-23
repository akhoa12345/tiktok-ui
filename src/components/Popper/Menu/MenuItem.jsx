import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../../Button';

function MenuItem({ data, onClick }) {
    return (
        <MenuItemStyle leftIcon={data.icon} separate={data.separate} to={data.to} onClick={onClick}>
            {data.title}
        </MenuItemStyle>
    );
}

Button.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;

const MenuItemStyle = styled(Button)`
    width: 100%;
    justify-content: flex-start;
    border-radius: 0px;
    padding: 11px 16px;
    line-height: 1.8rem;

    border-top: ${(props) => (props.separate ? '1px solid rgba(22,24, 35, 0.12) !important' : 'none')};

    &:hover {
        background-color: rgba(22, 24, 35, 0.03);
    }
`;
