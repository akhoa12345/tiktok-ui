import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '../../../Popper/';
import AccountItem from '../../../AccountItem';
import { SearchIcon } from '../../../Icons';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 0);
    }, []);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <SearchStyle>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                onClickOutside={handleHideResult}
                render={(attrs) => (
                    <div className="search-result" tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className="search-title">Accounts</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className="search">
                    <input
                        ref={inputRef}
                        value={searchValue}
                        type="text"
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && (
                        <button className="clear" onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} style={{ color: '#b6bdc8' }} />
                        </button>
                    )}
                    {/* <FontAwesomeIcon className="loading" icon={faCircleNotch} style={{ color: '#b6bdc8' }} /> */}
                    <button className="search-btn">
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </SearchStyle>
    );
}

export default Search;

const SearchStyle = styled.div`
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
            display: flex;
            align-items: center;
            justify-content: center;
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
`;
