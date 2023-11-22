import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '../../../components/Button';
import images from '../../../assets/images';
import Menu from '../../../components/Popper/Menu';
import { UploadIcon, MessageIcon, InboxIcon } from '../../../components/Icons';
import Image from '../../../components/Image';
import Search from '../Search';
import config from '../../../config';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
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
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <HeaderStyle>
            <div className="inner">
                <Link to={config.routes.home} className="logo-link">
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                {/* Search */}
                <Search />

                <div className="action">
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className="action-btn">
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className="action-btn">
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className="action-btn">
                                    <InboxIcon />
                                    <span className="badge">12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className="user-avatar"
                                src="https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745"
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className="more-btn">
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
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

    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    width: 100%;
    height: var(--default-layout-header-height, 60px);
    box-shadow: 0px 1px 1px rgb(0 0 0 / 12%);
    background-color: var(--white);

    .inner {
        height: 100%;
        width: var(--default-layout-width);
        padding: 0px var(--default-layout-horizontal-spacer);
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo-link {
            display: flex;
        }

        .action {
            display: flex;
            align-items: center;

            .action-btn {
                position: relative;
                display: flex;
                font-size: 2.2rem;
                color: #161823;
                background-color: transparent;
                padding: 4px 10px;
                cursor: pointer;

                .badge {
                    position: absolute;
                    top: -3px;
                    right: 0px;
                    padding: 0px 6px;
                    height: 2rem;
                    line-height: 2rem;
                    border-radius: 10px;
                    font-size: 1.4rem;
                    font-weight: 600;
                    color: var(--white);
                    font-family: var(--font-family);
                    background-color: var(--primary);
                }
            }

            .user-avatar {
                width: 32px;
                height: 32px;
                object-fit: cover;
                border-radius: 50%;
                margin-left: 14px;
                cursor: pointer;
            }

            .more-btn {
                font-size: 2rem;
                margin-left: 28px;
                padding: 4px 8px;
                background-color: transparent;
                cursor: pointer;
            }
        }
    }
`;
