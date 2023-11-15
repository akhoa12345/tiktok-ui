import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

function AccountItem() {
    return (
        <AccountItemStyle>
            <img
                src="https://st.nettruyenus.com/data/comics/150/dung-hong-them-muon-nhan-sac-cua-de-de-x-8348.jpg"
                alt=""
                className="avatar"
            />
            <div className="info">
                <h4 className="name">
                    <span>Nguyen Van B</span>
                    <FontAwesomeIcon className="check" icon={faCheckCircle} />
                </h4>
                <span className="username">nguyenvana</span>
            </div>
        </AccountItemStyle>
    );
}

export default AccountItem;

const AccountItemStyle = styled.div`
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
