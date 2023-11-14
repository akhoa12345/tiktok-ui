import styled from 'styled-components';

import Header from '../components/Header';
import Sidebar from './Sidebar';

const DefaultLayoutStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .container {
        width: var(--default-layout-width);
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

export default DefaultLayout;
