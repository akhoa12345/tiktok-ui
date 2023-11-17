import styled from 'styled-components';

import Button from '../../Button';

function MenuItem({ data }) {
    return (
        <MenuItemStyle leftIcon={data.icon} to={data.to}>
            {data.title}
        </MenuItemStyle>
    );
}

export default MenuItem;

const MenuItemStyle = styled(Button)`
    width: 100%;
    justify-content: flex-start;
    border-radius: 0px;
    padding: 11px 16px;

    &:hover {
        background-color: rgba(22, 24, 35, 0.03);
    }
`;
