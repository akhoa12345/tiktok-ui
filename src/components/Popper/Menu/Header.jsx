import PropTypes from 'prop-types'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

function Header({ title, onBack }) {
    return (
        <HeaderStyle>
            <button className="back-btn" onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>
            <h4 className="header-title">{title}</h4>
        </HeaderStyle>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
}

export default Header;

const HeaderStyle = styled.header`
    position: relative;
    height: 50px;
    margin-top: -8px;
    flex-shrink: 0;
    h4 {
        margin: 0;
    }

    .back-btn {
        width: 50px;
        height: 100%;
        background-color: transparent;
        cursor: pointer;
    }

    .header-title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #333;
    }
`;
