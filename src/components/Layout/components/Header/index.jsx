import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleNotch,
    faCircleXmark,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '../../../Button';
import images from '../../../../assets/images/';
import { Wrapper as PopperWrapper } from '../../../Popper/';
import AccountItem from '../../../AccountItem';
import Menu from '../../../Popper/Menu';

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <HeaderStyle>
            <div className="inner">
                <div className="logo">
                    <img src={images.logo} alt="Tiktok" />
                </div>

                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className="search-result" tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className="search-title">Accounts</h4>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className="search">
                        <input type="text" placeholder="Search accounts and videos" spellCheck={false} />
                        <button className="clear">
                            <FontAwesomeIcon icon={faCircleXmark} style={{ color: '#b6bdc8' }} />
                        </button>
                        <FontAwesomeIcon className="loading" icon={faCircleNotch} style={{ color: '#b6bdc8' }} />
                        <button className="search-btn">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className="action">
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>

                    <Menu items={MENU_ITEM}>
                        <button className="more-btn">
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </HeaderStyle>
    );
}

export default Header;

const HeaderStyle = styled.header`
    --search-border-radius: 92px;
    --search-height: 46px;
    --search-top-spacer: 9px;
    --search-button-width: 52px;

    width: 100%;
    height: var(--default-layout-header-height, 60px);
    box-shadow: 0px 1px 1px rgb(0 0 0 / 12%);
    display: flex;
    justify-content: center;

    .inner {
        height: 100%;
        width: var(--default-layout-width);
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo {
        }

        .search,
        .search-result {
            width: 361px;
        }

        .search {
            position: relative;
            height: var(--search-height);
            width: 361px;
            padding-left: 16px;
            display: flex;
            background-color: rgba(22, 24, 35, 0.06);
            border-radius: var(--search-border-radius);
            border: 1.5px solid transparent;

            input {
                flex: 1;
                height: 100%;
                color: var(--black);
                font-size: 1.6rem;
                caret-color: var(--primary);
                background-color: transparent;
            }

            input:not(:placeholder-shown) ~ .search-btn {
                color: rgba(22, 24, 35, 0.75);
            }

            &::after {
                content: '';
                position: absolute;
                top: var(--search-top-spacer);
                right: var(--search-button-width);
                width: 1px;
                height: calc(var(--search-height) - var(--search-top-spacer) * 2);
                background-color: rgba(22, 24, 35, 0.12);
            }

            &:focus-within {
                border-color: rgba(22, 24, 35, 0.2);
            }

            .clear,
            .loading {
                position: absolute;
                right: calc(var(--search-button-width) + 16px);
                top: 50%;
                transform: translateY(-50%);
            }

            .search-btn {
                width: var(--search-button-width);
                height: 100%;
                border-top-right-radius: var(--search-border-radius);
                border-bottom-right-radius: var(--search-border-radius);
                font-size: 1.8rem;
                color: #b6bdc8;

                &:hover {
                    cursor: pointer;
                    background-color: rgba(22, 24, 35, 0.03);
                }

                &:active {
                    background-color: rgba(22, 24, 35, 0.06);
                }
            }
        }

        .search-title {
            margin: 0px;
            padding: 5px 12px;
            font-size: 1.4rem;
            font-weight: 600;
            color: rgba(22, 24, 35, 0.5);
        }

        .action {
            .more-btn {
                font-size: 2rem;
                margin-left: 28px;
                padding: 4px 8px;
                background-color: transparent;
            }
        }
    }
`;
