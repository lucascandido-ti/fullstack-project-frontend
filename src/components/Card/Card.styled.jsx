import { CardContent } from '@material-ui/core';
import styled from 'styled-components';

export const CardContext = styled.div`
    width:840px;
    height:210px;
    display:flex;
    flex-direction:row;
`

export const CardIndexItem = styled.div`
    width:280px;
    height:180px;
    margin:5px;
`

export const CardBody = styled(CardContent)`
    margin:0;
    padding:0;
    &:hover{
        transition:0.3s;
        background-color:#2F2F2F;
        cursor:pointer;
    }
`

export const CardBoxFlex = styled.div`
    width:100%;
    height:90px;
    margin:5px;
    display:flex;
    justify-content:space-between;
    flex-direction:row;
`