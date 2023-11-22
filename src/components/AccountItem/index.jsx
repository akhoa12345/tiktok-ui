import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import Image from '../Image';
import { Link } from 'react-router-dom';

function AccountItem({ data }) {
    return (
        <AccountItemStyle to={`/@${data.nickname}`}>
            <Image src={data.avatar} alt={data.full_name} className="avatar" />
            <div className="info">
                <h4 className="name">
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className="check" icon={faCheckCircle} />}
                </h4>
                <span className="username">{data.full_name}</span>
            </div>
        </AccountItemStyle>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object,
};

export default AccountItem;

const AccountItemStyle = styled(Link)`
    display: flex;
    align-items: center;
    padding: 6px 16px;
    cursor: pointer;

    &:hover {
        background: rgba(22, 24, 35, 0.03);
    }

    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
    }

    .info {
        flex: 1;
        margin-left: 12px;

        .name {
            margin: 0px;
            font-size: 1.6rem;
            font-weight: 500;
            .check {
                margin-left: 6px;
                color: rgb(32, 213, 236);
            }
        }

        .username {
            font-size: 1.4rem;
            color: rgba(22, 24, 35, 0.5);
        }
    }
`;
