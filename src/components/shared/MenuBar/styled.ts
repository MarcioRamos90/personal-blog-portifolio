import Styled from "styled-components";

import { FormControl } from '@material-ui/core';
export const Container = Styled.div`
    display: flex;
    align-items: center;
    width: 1220px;
    justify-content: space-between;
`;

export const Content = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Title = Styled.p`
    color: #BEBFC0;
    font-Size: 30px;
`;

export const MenuLinks = Styled.div`
    width: 250px;
    display: flex;
    justify-content: space-between;

`;

export const Link = Styled.p`
    color: #BEBFC0;
    font-Size: 15px;
`;

export const Form = Styled(FormControl).attrs({
})`
    width: 100px;
    margin-right: 30px;
`;
