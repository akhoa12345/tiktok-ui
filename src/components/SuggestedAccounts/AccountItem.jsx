import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview';

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div className="preview" tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <AccountItemStyle>
                    <img
                        className="avatar"
                        src="https://files.fullstack.edu.vn/f8-tiktok/users/5297/64240b5e177d2.jpg"
                        alt=""
                    />
                    <div className="item-info">
                        <p className="nickname">
                            <strong>phunganhkhoa</strong>
                            <FontAwesomeIcon className="check" icon={faCheckCircle} />
                        </p>
                        <p className="name">Phùng Anh Khoa</p>
                    </div>
                </AccountItemStyle>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;

const AccountItemStyle = styled.div`
    display: flex;
    padding: 8px;
    cursor: pointer;

    .avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
    }

    .item-info {
        flex: 1;
        margin-left: 12px;

        .nickname {
            margin: 0;
            font-size: 1.6rem;
            color: #161823;
            line-height: 1;

            .check {
                margin-left: 4px;
                font-size: 1.4rem;
                color: #20d5ec;
            }
        }

        .name {
            margin: 0;
            font-size: 1.2rem;
            opacity: #161823bf;
        }
    }
`;
