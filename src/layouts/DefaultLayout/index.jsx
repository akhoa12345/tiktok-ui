import PropTypes from 'prop-types'
import styled from 'styled-components';

import Header from '../components/Header';
import Sidebar from './Sidebar';

const DefaultLayoutStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .container {
        width: var(--default-layout-width);
        padding: 0px var(--default-layout-horizontal-spacer);
        margin-top: var(--default-layout-header-height);
        display: flex;

        .content {
            flex: 1;
        }
    }
`;

function DefaultLayout({ children }) {
    return (
        <DefaultLayoutStyle>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </DefaultLayoutStyle>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultLayout;
