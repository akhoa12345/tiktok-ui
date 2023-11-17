import Tippy from '@tippyjs/react';
import styled from 'styled-components';

import { Wrapper as PopperWrapper } from '../index.jsx';
import MenuItem from './MenuItem.jsx';

function Menu({ items = [], children }) {
    const renderItems = () => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item} />;
        });
    };

    return (
        <MenuStyle
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            content={
                <div className="menu-list">
                    <PopperWrapper className="menu-popper">{renderItems()}</PopperWrapper>
                </div>
            }
        >
            {children}
        </MenuStyle>
    );
}

export default Menu;

const MenuStyle = styled(Tippy)`
    .menu-list {
        width: 224px;

        .menu-popper {
            padding-bottom: 8px;
        }
    }
`;
