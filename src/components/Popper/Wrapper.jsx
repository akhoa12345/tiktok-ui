import PropTypes from 'prop-types';
import styled from 'styled-components';

function Wrapper({ className, children }) {
    return <WrapperStyle className={className}>{children}</WrapperStyle>;
}

Wrapper.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Wrapper;

const WrapperStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: min(calc((100vh - 96px) - 60px), 734px);
    min-height: 100px;
    padding-top: 8px;
    border-radius: 8px;
    background: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 12%) 0px 2px 12px;
`;
