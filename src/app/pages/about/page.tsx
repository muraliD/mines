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





  

  
export default function AboutPage() {
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

{/*  About Page content  started */}
<div className="banner">
		<div className="header bgwhite">
		<div className="menu-icon"></div>
		<a onClick={()=>{
                router.push('/pages/home')
              }}  className="logo-2"><img src="../images/logo-2.png" /></a>
		<div className="menu">
		<menu>
		<MenuItem onClick={()=>{
                router.push('/pages/home')
              }}>Home</MenuItem>
              <MenuItem onClick={()=>{
                router.push('/pages/about')
              }} className='active'>About</MenuItem>
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
			  {/*<MenuItem onClick={()=>{
                router.push('/pages/quote')
              }}>Request a Quote</MenuItem>*/}
			  <MenuItem onClick={()=>{
                router.push('/pages/careers')
              }}>Careers</MenuItem>
			</menu>
			
    	</div>
		</div>
		<div className="about-banner">
			<img src="../images/about-banner.jpg" />
			<a onClick={()=>{
                router.push('/pages/quote')
              }} className="request-button">Request a Quote</a>
			<div className="title-blk-bar">
				<div className="container">
					<h1>About <span>Us<br /><span>What we are</span></span></h1>
					<div className="tagline">Our legacy: stewards of the Earth, builders of tomorrow.</div>
				</div>
			</div>
		</div>
</div>

	<div className="container bot-mar">
	
		<div className="about-text">
		<p >
		Welcome to Manasa Sharon Mines and Minerals Pvt Ltd, where the artistry of mining converges with
the science of sustainability. Founded on principles of excellence, integrity, and innovation, we
stand at the forefront of the mining industry, a testament to our unwavering commitment to
responsible practices.</p>

		<p>
    <h3>Legacy of Excellence:</h3>
With a rich history steeped in achievement, our journey has been a symphony of milestones and
breakthroughs. From the genesis of our operations to our current stature, we have consistently
pushed boundaries, setting benchmarks in ethical mining practices.
		</p>

    <p>

    <h3>Leadership Pioneers:</h3>
Meet the architects of our success – a dynamic leadership team fueled by passion and expertise.
Their collective vision guides us towards new horizons, shaping a future where mining and
sustainability coalesce seamlessly.
    </p>

<p>
<h3>Commitment to Sustainability:</h3>
At Manasa Sharon, sustainability isn't a choice; it's a responsibility. Our commitment to ecofriendly mining practices is ingrained in every facet of our operations. From community engagement
to environmental conservation, we go beyond compliance, setting standards for responsible
mining.
</p>

<p>

<h3>Innovation at the Core:</h3>
Innovation is the heartbeat of our operations. From state-of-the-art extraction techniques to
advancements in environmental monitoring, we embrace cutting-edge technologies that redefine
what's possible in the mining landscape.
</p>


		</div>

	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}>
		<Unstable_Grid2 md={6} sm={6} xs={12} columnSpacing={2} spacing={2}>
		<div className="cener-text"><h2>Our<span>Mission</span></h2></div>
				<div className="about-page-pic"><img src="../images/about-pic-1.jpg" /></div>
				<p>
				At Manasa Sharon Mines and Minerals Pvt Ltd, our mission transcends mere extraction; it embodies
a commitment to shaping the narrative of responsible mining. We aspire to redefine industry
standards, fostering a legacy where the richness of the Earth meets the elegance of sustainable
practices. With an unwavering focus on precision, innovation, and environmental stewardship, our
mission is to not only extract precious minerals but to contribute to a world where mining
harmonizes with nature.
				</p>
		</Unstable_Grid2>
	
		<Unstable_Grid2 md={6} sm={6} xs={12} columnSpacing={2} spacing={2}>
		<div className="cener-text"><h2>Our<span>Vision</span></h2></div>
				<div className="about-page-pic"><img src="../images/about-pic-2.jpg" /></div>
				<p>
				Our vision at Manasa Sharon Mines and Minerals Pvt Ltd is to be the beacon of ethical excellence in
the mining industry. We envision a future where the pursuit of natural resources seamlessly
integrates with ecological balance. Through cutting-edge technologies, meticulous processes, and
a steadfast commitment to sustainability, we strive to be the vanguard of a mining renaissance. Our
vision extends beyond the extraction of minerals; it embraces the responsibility of being custodians
of the Earth's treasures, ensuring a harmonious coexistence between industry progress and
environmental preservation.
				</p>
		</Unstable_Grid2>
	</Unstable_Grid2>

	

</div>
<div className="container bot-mar">

	<Unstable_Grid2 md={12} sm={12} xs={12} rowSpacing={2} >
			<div className="steward-pic"><img src="../images/about-pic-3.jpg" /></div>
				<p className="bot-mar">
				<strong>Stewards of the Earth:</strong> As stewards of the Earth, we recognize the profound responsibility entrusted to us in managing the planet's finite resources. We approach our work with reverence for the environment, implementing rigorous conservation measures, and minimizing our ecological footprint at every stage of the mining lifecycle. Our commitment to sustainability extends beyond compliance to inspire meaningful change and leave a positive legacy for future generations.
				</p>
				<p>&nbsp;</p>
	</Unstable_Grid2>
</div>
<div className="container bot-mar">
	<Unstable_Grid2 md={12} sm={12} xs={12} rowSpacing={2}>
	<p>
				<div className="steward-pic move-right"><img src="../images/about-pic-4.jpg" /></div><strong>Innovators:</strong> Innovation is the engine of progress, and we are relentless in our pursuit of new ideas, technologies, and approaches to mining. From advanced exploration techniques to state-of-the-art processing methods, we leverage innovation to optimize efficiency, enhance productivity, and minimize environmental impact, ensuring the long-term viability of our operations.
				</p>

	</Unstable_Grid2>
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



{/*  About Page contnt Closed */}







      </div>
      
      }
    </div>
  );
}