import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
    padding: 10px;
    text-align: ${((props) => (props.alignCenter ? "center" : "start"))};
    border: 1px solid #80808094;
    word-break: break-all;

    svg{
        width: 18px;
        height: 18px;
    }
`;
