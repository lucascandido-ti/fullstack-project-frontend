import { Box, Button, Container } from '@material-ui/core';
import styled from 'styled-components';
import HighchartsReact from 'highcharts-react-official';
import { Chart } from '../../components/Chart/Chart.component';

export const TitlePage = styled(Box)`
    width:300px;
    height:60px;

    h1{
        font-weight:500;
        letter-spacing:1px;
        color:white;
    }
`;

export const BoxFlex = styled(Box)`
    width:100%;
    height:230px;
    display:flex;
    justify-content:space-between;
    flex-direction:row;
`;

export const BoxGrid = styled(Box)`
    width:calc(100% - 350px);
    height:100%;

    h1{
        font-size:20px;
        font-weight:500;
        letter-spacing:0.5px;
        color:white;
    }
`;

export const BoxRegister = styled(Box)`
    width:330px;
    height:100%;
    display:flex;
    justify-content:space-between;
    flex-direction:column;

    h1{
        font-size:20px;
        font-weight:500;
        letter-spacing:0.5px;
        color:white;
    }
`;


export const Text = styled.div`
    display:flex;
    flex-direction:row;
    color:white;
    align-items:center;
`

export const InputNameFile = styled.input`
    width:95.5%;
    height:50px;
    border:1px solid #ffffff50;
    border-radius:3px;
    background-color:transparent;
    outline:none;
    padding-left:10px;
    font-size:15px;
    font-weight:500;
    color:#ffffffd4;
    
    &::-webkit-input-placeholder{
        font-size:15px;
        font-weight:500;
        letter-spacing:0.5px;
        color:#ffffffd4;
    }
`


export const InputFile = styled(Button)`
    width: 100%;
    height:40px;
    border:none;
    border-radius:none;
    background-color:transparent;
    color:white;
`

export const BoxChart = styled.div`
    /* width:1300px; */
    margin-top:50px;
    height:600px;

`



export const HighChartWrapper = styled(Chart)`
    /* some styles here */
    margin-top:25px;
    .highcharts-background{
        height:600px !important;
        fill: transparent !important;
    }
    .highcharts-markers{
        height:600px !important;
        fill: transparent !important;
    }
    .highcharts-plot-border {
        fill: transparent !important;
    }
    
`;

export const SlideControl = styled.div`
    width:30px;
    height:30px;
    position:absolute;
    display:flex;
    flex-direction:row;
    left:77%;
    top:10%;
`