import styled from 'styled-components'

export const Container = styled.div`
    height: 150px;
    text-align: center;
    background: teal;
`;

export const Header = styled.h1`
`;

export const Title = styled.div`
    padding-top: 20px;
    color: #fff;

    @media screen and (max-width: 480px) {
      width: 90%;
      margin: auto;
      font-size: 26px;
    }
`