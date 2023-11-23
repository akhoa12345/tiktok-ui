import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '../../Button';
import styled from 'styled-components';

function AccountPreview() {
    return (
        <AccountPreviewStyle>
            <div className="header">
                <img
                    className="avatar"
                    src="https://files.fullstack.edu.vn/f8-tiktok/users/5297/64240b5e177d2.jpg"
                    alt=""
                />
                <Button className="follow-btn" primary>
                    Follow
                </Button>
            </div>
            <div className="body">
                <p className="nickname">
                    <strong>phunganhkhoa</strong>
                    <FontAwesomeIcon className="check" icon={faCheckCircle} />
                </p>
                <p className="name">Phùng Anh Khoa</p>
                <p className="analytics">
                    <strong className="value">8.2M</strong>
                    <span className="label">Followers</span>

                    <strong className="value">8.2M</strong>
                    <span className="label">Likes</span>
                </p>
            </div>
        </AccountPreviewStyle>
    );
}

export default AccountPreview;

const AccountPreviewStyle = styled.div`
    width: 320px;
    padding: 20px;

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .avatar {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            object-fit: cover;
        }

        .follow-btn {
            padding: 6px 16px;
        }
    }

    .body {
        margin-top: 12px;
        color: #161823;

        .nickname {
            margin: 0;
            font-size: 1.8rem;

            .check {
                font-size: 1.4rem;
                color: #20d5ec;
                margin-left: 4px;
            }
        }

        .name {
            margin: 0;
            font-size: 1.4rem;
        }

        .analytics {
            margin: 0;
            margin-top: 10px;
            font-size: 1.8rem;

            .value ~ .value {
                margin-left: 20px;
            }

            .label {
                color: #161823bf;
            }
        }
    }
`;
