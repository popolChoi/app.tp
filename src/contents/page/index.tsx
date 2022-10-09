import React, { HtmlHTMLAttributes, MouseEventHandler } from "react";

import { Link, Element } from "react-scroll"

import { styled } from '@mui/material/styles';
import {
    Box,
	Grid,
    Container,
    Button,
} from '@mui/material';

import './style.scss';


const BootstrapButton = styled(Button)({
    // boxShadow: 'none',
    // textTransform: 'none',
    // // fontSize: 16,
    // // padding: '6px 12px',
    // border: '1px solid',
    // lineHeight: 1.5,
    backgroundColor: '#f4623a',
    borderColor: '#f4623a',
    // fontFamily: [
    //   '-apple-system',
    //   'BlinkMacSystemFont',
    //   '"Segoe UI"',
    //   'Roboto',
    //   '"Helvetica Neue"',
    //   'Arial',
    //   'sans-serif',
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    // ].join(','),
    '&:hover': {
      backgroundColor: '#f68161',
      borderColor: '#f68161',
      boxShadow: 'none',
    },
    // '&:active': {
    //   boxShadow: 'none',
    //   backgroundColor: '#0062cc',
    //   borderColor: '#005cbf',
    // },
    // '&:focus': {
    //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    // },
  });


export function index(props: any){
    const onClick = (e: any) => {

        
        location.href="#test";

    };
    return( 
        <React.Fragment>
            <div className="portfolio">
                <div className="portfolio-gate">
                    <Container fixed  className="center">
                        <div className="portfolio-gate-title">- 최수지 -<br />웹 개발자 포트폴리오</div>
                        <div>
                            안녕하세요. <br />
                            함께 성장하고 싶은 개발자 최수지 입니다. 
                        </div>


                        <Link to="#1" spy={true} smooth={true}>
                            <BootstrapButton  variant="contained" size="large" >더 알아보기</BootstrapButton>
                            {/* <a href="https://cdg-portfolio.com/">https://cdg-portfolio.com/</a> */}
                        </Link>
                        


                    </Container>
                </div>

                    <article id="#1">
                    
                    </article>       
                
               
            </div>
         
        </React.Fragment>
    );
}

export default index;