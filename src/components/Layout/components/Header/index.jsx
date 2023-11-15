import styled from 'styled-components';

import images from '../../../../assets/images/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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

        .search {
            position: relative;
            width: 361px;
            height: var(--search-height);
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
    }
`;

function Header() {
    return (
        <HeaderStyle>
            <div className="inner">
                <div className="logo">
                    <img src={images.logo} alt="Tiktok" />
                </div>
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
                <div className="action"></div>
            </div>
        </HeaderStyle>
    );
}

export default Header;
