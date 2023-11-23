import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import styled from 'styled-components';

function SuggestedAccounts({ label }) {
    return (
        <SuggestedAccountsStyle>
            <p className="label">{label}</p>

            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className="more-btn">See all</p>
        </SuggestedAccountsStyle>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;

const SuggestedAccountsStyle = styled.div`
    border-top: 1px solid #e3e3e4;

    .label {
        margin: 0;
        padding: 8px;
        font-size: 1.4rem;
        font-weight: 600;
    }

    .more-btn {
        margin: 0;
        padding: 8px;
        font-size: 1.4rem;
        font-weight: 700;
        color: #fe2c55;
        cursor: pointer;
    }
`;
