import React from 'react';
import { CardBody, CardBoxFlex, CardContext, CardIndexItem } from './Card.styled';
import { Avatar, Box, Card, CardContent, CardHeader, Cards, colors, IconButton, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';
import { BoxFlex } from '../../pages/Home/Home.styled';

export function CardGrid(props) {
    return (
        <CardContext>
            {props.children}
        </CardContext>
    );
}

// 👍 Bom uso da componentização aqui
export function CardItem(props) {
    return (
        <CardIndexItem onClick={()=>props.clickFunction()}>
            <Card style={{width: 270, height:180, backgroundColor:'#1E1E1E',color:'white'}}>
                <CardHeader
                    avatar={
                        <Avatar style={{backgroundColor:'#C485CF'}} aria-label="pts">
                            <Typography variant='caption' style={{lineHeight:'10px',textAlign:'center'}}>
                                {props.textAvatar}
                            </Typography>
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings" onClick={()=>props.deleteFunction()}>
                            <Delete style={{color:'red'}} />
                        </IconButton>
                    }
                    title={props.title}
                    subheader={props.subtitle}
                    subheaderTypographyProps={{color:'white'}}
                />
                <CardBody>
                    <CardBoxFlex>
                        <Box style={{width:'60%', display:'flex',flexDirection:'column'}}>
                            <Typography variant='body1'>
                                Data
                            </Typography>
                            <Typography variant='caption'>
                                {props.mindate}
                            </Typography>
                            <Typography variant='caption'>
                                {props.maxdate}
                            </Typography>
                        </Box>
                        <Box style={{width:'40%', display:'flex',flexDirection:'column'}}>
                            <Typography variant='body1'>
                                Média
                            </Typography>
                            <Typography variant='caption'>
                                {props.average}
                            </Typography>
                        </Box>
                    </CardBoxFlex>
                </CardBody>
            </Card>
        </CardIndexItem>
        
    );
}
