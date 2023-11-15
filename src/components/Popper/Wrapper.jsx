import styled from 'styled-components';

function Wrapper({ children }) {
    return <WrapperStyle>{children}</WrapperStyle>;
}

export default Wrapper;

const WrapperStyle = styled.div`
    width: 100%;
    max-height: min(calc((100vh - 96px) - 60px), 734px);
    min-height: 100px;
    padding-top: 8px;
    border-radius: 8px;
    background: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 12%) 0px 2px 12px;
`;
