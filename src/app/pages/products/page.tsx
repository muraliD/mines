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

//import { Tabs, Tab } from "@tarragon/swipeable-tabs";



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



  

  const Gallery4 = dynamic(() => import('react-owl-carousel'), {
    ssr: true,
    });
    
    const optionsGal4 = {
    loop:true,
    autoPlay :true,
      margin:14,
    padding:5,
    nav:true,
    Tabs:4,
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





  

  
export default function ProductsPage() {
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
		
    const [selectedTab, setSelectedTab] = React.useState("Tab 1");

    const changeTab: (selectedTab: {label: string; key: string | number; }) => void = updatedTab => {
      setSelectedTab(updatedTab.label);
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
     <div >
  






{/*  Products Page content */}


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
              }} className='active'>Our Products</MenuItem>
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
			</menu>
    </div>


</div>
  
	<div className="products-banner">
		<a onClick={()=>{
                router.push('/pages/quote')
              }} className="request-button">Request a Quote</a>
		<img src="../images/prodcuts-banner.jpg" />
		<div className="title-blk-bar">
			<div className="container">
				<h1>Our <span>Products<br /><span>Minerals</span></span></h1>
				<div className="tagline">Each product embodies the Earth's story, ethically sourced and sustainably processed.</div>
			</div>
		</div>
	</div>
            
	
<div className="container bot-mar products">

<Tabs>


    <TabList>
    <Gallery4 className="react-owl-carousel owl-theme" {...optionsGal4}>
     <Tab>
	  	<div className="tab-img"><img src="../images/prod-tab-img-1.jpg" /></div>
      <div className="tab-title"><span>White Quartz</span></div>
      </Tab>
    <Tab>
     
	  	<div className="tab-img"><img src="../images/h-prod-9.jpg" /></div>
      <div className="tab-title"><span>MICA QUARTZ</span></div>
      
    </Tab>
    <Tab>
	 
      
      <div className="tab-img"><img src="../images/h-prod-10.jpg" /></div>
      <div className="tab-title"><span>PINK QUARTZ</span></div>
      
    </Tab>
	  <Tab>
     
      <div className="tab-img"><img src="../images/h-prod-3.jpg" /></div>
      <div className="tab-title"><span>ROSE QUARTZ</span></div>
     
    </Tab>
    <Tab>
      
      <div className="tab-img"><img src="../images/h-prod-11.jpg" /></div>
      <div className="tab-title"><span>GLASSY QUARTZ</span></div>
     
    </Tab>
    <Tab>
    
      <div className="tab-img"><img src="../images/h-prod-12.jpg" /></div>
      <div className="tab-title"><span>SEMI GLASSY QUARTZ</span></div>
     
    </Tab>
    </Gallery4>
    
    </TabList>




    <TabPanel>
    <Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}>
	    <Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
        <div className="product-img"><img src="../images/whitequartz.jpg" /></div>
      </Unstable_Grid2>
      <Unstable_Grid2 md={8} sm={6} xs={12} columnSpacing={2} spacing={2}>
      <h1 className='no-mar-top rem-no-mar'>Quartz <span>White</span></h1>
	  <p>
	  White quartz is a crystalline mineral composed primarily of silicon dioxide (SiO2). It is one of the most abundant minerals on Earth and is found in various geological formations worldwide. Quartz comes in a variety of colors, but white quartz is particularly valued for its pure, clean appearance and versatility in various applications.
	  </p>
    <p>
Here are some key points about white quartz:
</p>
<p>
<strong>Composition:</strong> White quartz is made up of silicon dioxide molecules arranged in a repeating pattern. Its chemical formula is SiO2.
</p>
<p>
<strong>Appearance:</strong> As the name suggests, white quartz is typically white or colorless, although it may contain slight traces of impurities that can give it a milky or translucent appearance.
</p>
<p>
<strong>Formation:</strong> Quartz forms in a variety of geological environments, including igneous, metamorphic, and sedimentary rocks. It often crystallizes in cavities within rocks, forming well-defined crystals or aggregates.
</p>
<p>
<strong>Varieties:</strong> There are several varieties of white quartz, including milky quartz (which has a cloudy or milky appearance due to microscopic inclusions of fluids or gases) and snow quartz (which has a more opaque, whitish appearance).
</p>
<p>
<strong>Uses:</strong> White quartz has a wide range of uses due to its hardness, durability, and aesthetic appeal. Some common uses include:
</p>
<p>
<strong>Construction materials:</strong> It is used as a building stone for countertops, flooring, and decorative features.
</p>
<p>
<strong>Jewelry:</strong> High-quality white quartz crystals are sometimes cut and polished into gemstones for use in jewelry.
</p>
<p>
<strong>Metaphysical purposes:</strong> In some belief systems, quartz is thought to have healing or metaphysical properties and is used in rituals or as decorative objects.
</p>
<p>
<strong>Industrial applications:</strong> Quartz's hardness and resistance to chemical weathering make it valuable for use in abrasives, glassmaking, ceramics, and electronics.
</p>
<p>
<strong>Maintenance:</strong> White quartz is relatively low-maintenance compared to some other natural stones. It is resistant to staining and scratching but may require periodic sealing to maintain its appearance and protect against surface damage.
</p>

<p>
Overall, white quartz is a versatile and widely used mineral with a range of practical and decorative applications.
	  
	  </p>

      </Unstable_Grid2>
    </Unstable_Grid2>
    </TabPanel>
    <TabPanel>
     2
    </TabPanel>
    <TabPanel>
     3
    </TabPanel>
    <TabPanel>
      4
    </TabPanel>
    <TabPanel>
      5
    </TabPanel>
    <TabPanel>
      6
    </TabPanel>
  
  </Tabs>
{/*
  <Tabs value={selectedTab} onChange={changeTab}>
 
        <Tab label="Tab 1" key={0}>
          <div>Tab 1 Content</div>
        </Tab>
        <Tab label="Tab 2" key={1}>
          <div>Tab 2 content</div>
        </Tab>
        <Tab label="Tab 3" key={2}>
          <div>Tab 3 content</div>
        </Tab>
        <Tab label="Tab 4" key={3}>
          <div>Tab 4 content</div>
        </Tab>
        <Tab label="Tab 5" key={3}>
          <div>Tab 5 content</div>
        </Tab>
        <Tab label="Tab 6" key={3}>
          <div>Tab 4 content</div>
        </Tab>


      </Tabs>

*/}

</div>

</div>





<div className='footer'>
<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2} spacing={2}>
		<div className="footer-logo"><img src="../images/logo.png" /></div>
		<div className="terms">Terms & Conditions 2024<br />msminesandminerals.com</div>
	</Unstable_Grid2>
	<Unstable_Grid2 md={6} sm={6} xs={12} columnSpacing={2} spacing={2}>
		<ul className="footer-menu">
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
            


{/*  Products Page content Closed */}




      </div>
      
      }
    </div>
  );
}