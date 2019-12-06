import styled from 'styled-components';
import logoPng from './assets/logo.png';

const Logo = styled.div`
    height: 45px;
    width: 170px;
    background: url("${logoPng}") no-repeat left;
    background-size: contain;
`;

export default Logo;
