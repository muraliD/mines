"use client"
import React,{useEffect, useState} from 'react';
import $ from 'jquery';
import Image from 'next/image';
import ocean from "../../../../public/images/slider-1.jpg";
import sea from '../../../../public/images/slider-2.jpg';
import woman from '../../../../public/images/slider-3.jpg';
import location1 from '../../../../public/images/location-1.jpg';
import location2 from '../../../../public/images/location-2.jpg';
import location3 from '../../../../public/images/location-3.jpg';
import location4 from '../../../../public/images/location-4.jpg';
import hpartner1 from '../../../../public/images/h-partner-1.png';
import hpartner2 from '../../../../public/images/h-partner-2.png';
import hpartner3 from '../../../../public/images/h-partner-3.png';
import hpartner4 from '../../../../public/images/h-partner-4.png';
import hpartner5 from '../../../../public/images/h-partner-5.png';
import hpartner6 from '../../../../public/images/h-partner-6.png';
import hpartner7 from '../../../../public/images/h-partner-7.png';
import prodgal1 from '../../../../public/images/prod-tab-img-1-l.jpg';
import prodgal2 from '../../../../public/images/prod-tab-img-2-l.jpg';
import prodgal3 from '../../../../public/images/prod-tab-img-3-l.jpg';
import prodgal4 from '../../../../public/images/prod-tab-img-4-l.jpg';
import prodgal5 from '../../../../public/images/prod-tab-img-5-l.jpg';
import prodgal6 from '../../../../public/images/prod-tab-img-6-l.jpg';
import prodgal7 from '../../../../public/images/prod-tab-img-7-l.jpg';
import prodgal8 from '../../../../public/images/prod-tab-img-8-l.jpg';

import opergal1 from '../../../../public/images/Operations-1.jpg';
import opergal2 from '../../../../public/images/Operations-2.jpg';
import opergal3 from '../../../../public/images/Operations-3.jpg';
import opergal4 from '../../../../public/images/Operations-4.jpg';

import { useRouter } from 'next/navigation'


import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import { CardActions, CardMedia, Grid, ListItem, Menu, MenuItem, TextareaAutosize, Unstable_Grid2 } from '@mui/material';
import { Content } from 'next/font/google';
//import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Modal from '@mui/material/Modal';


import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';




import SimpleImageSlider from "react-simple-image-slider";
const images = [
  { url: "../images/slider-1.jpg" },
  { url: "../images/slider-2.jpg" },
  { url: "../images/slider-3.jpg" },
];
 




const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


	



const Slider = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

const options = {
	slideBy: 1,
	navSpeed : 2000,
	nav: true,
	//pagination:true,
	  autoPlay :true,
	  //loop: true,
	  items:1,
};


const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
	ssr: false,
  });
  
  const options2 = {
	loop:true,
	autoPlay :true,
    margin:14,
	padding:5,
	nav:true,
	items:4,
    responsiveClass:true,
	responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1200:{
            items:4,
            nav:true,
            loop:false
        }
    }
  };

  const OwlCarousel3 = dynamic(() => import('react-owl-carousel'), {
	ssr: false,
  });
  
  const options3 = {
	loop:true,
	autoPlay :true,
    margin:14,
	padding:5,
	nav:true,
	items:7,
    responsiveClass:true,
	responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
		800:{
            items:4,
            nav:true
        },
        1200:{
            items:7,
            nav:true,
            loop:false
        }
    }
  };

  const Gallery1 = dynamic(() => import('react-owl-carousel'), {
	ssr: false,
  });
  
  const optionsGal1 = {
	loop:true,
	autoPlay :true,
    margin:14,
	padding:5,
	nav:true,
	items:4,
    responsiveClass:true,
	responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1200:{
            items:4,
            nav:true,
            loop:false
        }
    }
  };


  const Gallery2 = dynamic(() => import('react-owl-carousel'), {
	ssr: false,
  });
  
  const optionsGal2 = {
	loop:true,
	autoPlay :true,
    margin:14,
	padding:5,
	nav:true,
	items:4,
    responsiveClass:true,
	responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1200:{
            items:4,
            nav:true,
            loop:false
        }
    }
  };

  const Gallery3 = dynamic(() => import('react-owl-carousel'), {
	ssr: false,
  });
  
  const optionsGal3 = {
	loop:true,
	autoPlay :true,
    margin:14,
	padding:5,
	nav:true,
	items:4,
    responsiveClass:true,
	responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1200:{
            items:4,
            nav:true,
            loop:false
        }
    }
  };





  

  
export default function GalleryPage() {
    const router = useRouter()
    const [windows,setwindows] = useState<any>(null);
	const [open, setOpen] = React.useState(false);
  	const handleOpen = () => setOpen(true);
  	const handleClose = () => setOpen(false);


	  const [expanded, setExpanded] = React.useState<string | false>(false);

	  const handleChange =
		(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
		  setExpanded(isExpanded ? panel : false);
		};
		

		

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setwindows(window);
            // window.$ = window.jQuery = $
        }
      }, [typeof window ]);

	  
  return (
    <div className='main-container'>
     {windows && 
	 //id: `simple-tab-${index}`,
	 //'aria-controls': `simple-tabpanel-${index}`,
     <div>
      





{/*  Gallery Page content */}

<div className="banner">
		<div className="header bgwhite">
		<div className="menu-icon"></div>
		<a onClick={()=>{
                router.push('/pages/home')
              }} className="logo-2"><img src="../images/logo-2.png" /></a>
		<div className="menu">	
			<menu>
			<MenuItem onClick={()=>{
                router.push('/pages/home')
              }}>Home</MenuItem>
              <MenuItem onClick={()=>{
                router.push('/pages/about')
              }}>About</MenuItem>
              <MenuItem onClick={()=>{
                router.push('/pages/products')
              }}>Our Products</MenuItem>
			  <MenuItem onClick={()=>{
                router.push('/pages/machinery')
              }}>Machinery</MenuItem>
			  <MenuItem onClick={()=>{
                router.push('/pages/productivity')
              }}>Productivity</MenuItem>
			  <MenuItem onClick={()=>{
                router.push('/pages/gallery')
              }} className='active'>Gallery</MenuItem>
			  <MenuItem onClick={()=>{
                router.push('/pages/contact')
              }}>Contact Us</MenuItem>
			  {/*<MenuItem onClick={()=>{
                router.push('/pages/quote')
              }}>Request a Quote</MenuItem>*/}
			  <MenuItem onClick={()=>{
                router.push('/pages/careers')
              }}>Careers</MenuItem>
			
			</menu>
    	</div>
	
		</div>

   
	<div className="gallery-banner">
	<a onClick={()=>{
                router.push('/pages/quote')
              }} className="request-button">Request a Quote</a>
		<img src="../images/gallery-banner.jpg" />
		<div className="title-blk-bar">
			<div className="container">
				<h1>Production <span>Portfolio<br /><span>Image Gallery</span></span></h1>
				<div className="tagline">Witness the story of minerals, responsibly extracted, beautifully transformed.</div>
			</div>
		</div>
	</div>
	</div>


	<div className="container mar-bot">
	<Grid md={12} className="carousel-2">
	<div><h1>Locations</h1></div>
	</Grid>

	<Grid md={12} className="carousel-2">
		<Gallery1 className="react-owl-carousel owl-theme" {...optionsGal1}>
              <div className="item ">
				<div className="h-location-img">
                <Image
                  src={location1}
                  alt="Location-1"
                  //width={100}
                  //height={100}
                />
				</div>
				
              </div>
              <div className="item" >
			  <div className="h-location-img">
                <Image
                  src={location2}
                  alt="Location-2"
                  //width={100}
                  //height={100}
                />
				</div>
				
              </div>
              <div className="item" >
			  <div className="h-location-img">
                <Image
                  src={location3}
                  alt="Location-3"
                 // width={100}
                  //height={100}
                />
				</div>
				
              </div>
			  <div className="item" >
			  <div className="h-location-img">
                <Image
                  src={location4}
                  alt="Location-4"
                  //width={100}
                  //height={100}
                />
				</div>
				
              </div>
			  <div className="item ">
				<div className="h-location-img">
                <Image
                  src={location1}
                  alt="Location-1"
                  //width={100}
                  //height={100}
                />
				</div>
				
              </div>
              <div className="item" >
			  <div className="h-location-img">
                <Image
                  src={location2}
                  alt="Location-2"
                  //width={100}
                  //height={100}
                />
				</div>
				
              </div>
              <div className="item" >
			  <div className="h-location-img">
                <Image
                  src={location3}
                  alt="Location-3"
                 // width={100}
                  //height={100}
                />
				</div>
				
              </div>
			  <div className="item" >
			  <div className="h-location-img">
                <Image
                  src={location4}
                  alt="Location-4"
                  //width={100}
                  //height={100}
                />
				</div>
				
              </div>
            </Gallery1>

	</Grid>
</div>

<div className="container mar-bot">
	<Grid md={12} className="carousel-2 ">
	<div><h1>Products</h1></div>
	</Grid>

	<Grid md={12} className="carousel-2">
		<Gallery2 className="react-owl-carousel owl-theme" {...optionsGal2}>
              <div className="item ">
				<div className="h-location-img">
                <Image
                  src={prodgal1}
                  alt="Location-1"
                  //width={100}
                  //height={100}
                />
				</div>
				
              </div>
              <div className="item" >
			  <div className="h-location-img">
                <Image
                  src={prodgal2}
                  alt="Location-2"
                  //width={100}
                  //height={100}
                />
				</div>
				
              </div>
              <div className="item" >
			  <div className="h-location-img">
                <Image
                  src={prodgal3}
                  alt="Location-3"
                 // width={100}
                  //height={100}
                />
				</div>
				
              </div>
			  <div className="item" >
			  <div className="h-location-img">
                <Image
                  src={prodgal4}
                  alt="Location-4"
                  //width={100}
                  //height={100}
                />
				</div>
				
              </div>
			  <div className="item ">
				<div className="h-location-img">
                <Image
                  src={prodgal5}
                  alt="Location-1"
                  //width={100}
                  //height={100}
                />
				</div>
				
              </div>
              <div className="item" >
			  <div className="h-location-img">
                <Image
                  src={prodgal6}
                  alt="Location-2"
                  //width={100}
                  //height={100}
                />
				</div>
				
              </div>
              <div className="item" >
			  <div className="h-location-img">
                <Image
                  src={prodgal7}
                  alt="Location-3"
                 // width={100}
                  //height={100}
                />
				</div>
				
              </div>
			  <div className="item" >
			  <div className="h-location-img">
                <Image
                  src={prodgal8}
                  alt="Location-4"
                  //width={100}
                  //height={100}
                />
				</div>
				
              </div>
            </Gallery2>

	</Grid>
</div>

<div className="container mar-bot">
	<Grid md={12} className="carousel-2 ">
	<div><h1>Operations</h1></div>
	</Grid>

	<Grid md={12} className="carousel-2">
		<Gallery3 className="react-owl-carousel owl-theme" {...optionsGal3}>
              <div className="item ">
				<div className="h-location-img">
                <Image
                  src={opergal1}
                  alt="Location-1"
                  //width={100}
                  //height={100}
                />
				</div>
				
              </div>
              <div className="item" >
			  <div className="h-location-img">
                <Image
                  src={opergal2}
                  alt="Location-2"
                  //width={100}
                  //height={100}
                />
				</div>
				
              </div>
              <div className="item" >
			  <div className="h-location-img">
                <Image
                  src={opergal3}
                  alt="Location-3"
                 // width={100}
                  //height={100}
                />
				</div>
				
              </div>
			  <div className="item" >
			  <div className="h-location-img">
                <Image
                  src={opergal4}
                  alt="Location-4"
                  //width={100}
                  //height={100}
                />
				</div>
				
              </div>
			  
			  
            </Gallery3>

	</Grid>
</div>

<div className='footer'>
<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2} spacing={2}>
		<div className="footer-logo"><img src="../images/logo.png" /></div>
		<div className="terms">Terms & Conditions 2024<br />msminesandminerals.com</div>
	</Unstable_Grid2>
	<Unstable_Grid2 md={6} sm={6} xs={12} columnSpacing={2} spacing={2}>
		<ul className="footer-menu" >
			<MenuItem onClick={()=>{
                router.push('/pages/home')
              }}>Home</MenuItem>
              <MenuItem onClick={()=>{
                router.push('/pages/about')
              }}>About</MenuItem>
              <MenuItem onClick={()=>{
                router.push('/pages/products')
              }}>Our Products</MenuItem>
			  <MenuItem onClick={()=>{
                router.push('/pages/machinery')
              }}>Machinery</MenuItem>
			  <MenuItem onClick={()=>{
                router.push('/pages/productivity')
              }}>Productivity</MenuItem>
			  <MenuItem onClick={()=>{
                router.push('/pages/gallery')
              }}>Gallery</MenuItem>
			  <MenuItem onClick={()=>{
                router.push('/pages/contact')
              }}>Contact Us</MenuItem>
			  <MenuItem onClick={()=>{
                router.push('/pages/quote')
              }}>Request a Quote</MenuItem>
			  <MenuItem onClick={()=>{
                router.push('/pages/careers')
              }}>Careers</MenuItem>
		</ul>
	</Unstable_Grid2>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2} spacing={2}>
		<div className="social-icons">
				<ul>
					<li><a href="#"><img src="../images/social-icon-1.png" /></a></li>
					<li><a href="#"><img src="../images/social-icon-2.png" /></a></li>
					<li><a href="#"><img src="../images/social-icon-3.png" /></a></li>
				</ul>
			</div>
	</Unstable_Grid2>
</Unstable_Grid2>
</div>

{/*  Gallery Page content Closed */}







      </div>
      
      }
    </div>
  );
}