import styled from 'styled-components';

const HeaderStyle = styled.header`
    width: 100%;
    height: var(--default-layout-header-height, 60px);
    box-shadow: 0px 1px 1px rgb(0 0 0 / 12%);
    display: flex;
    justify-content: center;

    .inner {
        height: 100%;
        width: var(--default-layout-width);
    }
`;

function Header() {
    return (
        <HeaderStyle>
            <div className="inner"></div>
        </HeaderStyle>
    );
}

export default Header;
