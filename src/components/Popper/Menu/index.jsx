import PropTypes from 'prop-types';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import styled from 'styled-components';

import { Wrapper as PopperWrapper } from '../index.jsx';
import MenuItem from './MenuItem.jsx';
import Header from './Header.jsx';

const defaultFn = () => {};

function Menu({ items = [], onChange = defaultFn, hideOnClick = false, children }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => {
            return prev.slice(0, prev.length - 1);
        });
    }

    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <MenuStyle
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            content={
                <div className="menu-list">
                    <PopperWrapper className="menu-popper">
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={handleBack}
                            />
                        )}
                        <div className="menu-body">{renderItems()}</div>
                    </PopperWrapper>
                </div>
            }
            onHidden={handleResetMenu}
        >
            {children}
        </MenuStyle>
    );
}

Menu.propTypes = {
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default Menu;

const MenuStyle = styled(Tippy)`
    .menu-list {
        width: 224px;

        .menu-popper {
            padding-bottom: 8px;

            .menu-body {
                overflow-y: auto;
            }
        }
    }
`;
