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





  

  
export default function ProductivityPage() {
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
 








{/*  Productivity Page content */}
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
              }} className='active'>Productivity</MenuItem>
			  <MenuItem onClick={()=>{
                router.push('/pages/gallery')
              }}>Gallery</MenuItem>
			  <MenuItem onClick={()=>{
                router.push('/pages/contact')
              }}>Contact Us</MenuItem>
			 {/*} <MenuItem onClick={()=>{
                router.push('/pages/quote')
              }}>Request a Quote</MenuItem>*/}
			  <MenuItem onClick={()=>{
                router.push('/pages/careers')
              }}>Careers</MenuItem>
			</menu>
    </div>
	
	
</div>
   
	<div className="productivity-banner">
	<a onClick={()=>{
                router.push('/pages/quote')
              }} className="request-button">Request a Quote</a>
		<img src="../images/productivity-banner.jpg" />
		<div className="title-blk-bar">
			<div className="container">
				<h1>Productivity <span>Success<br /><span>Our performance</span></span></h1>
				<div className="tagline">Efficiency in every extraction, productivity in every process.</div>
			</div>
		</div>
	</div>
	
</div>

<div className="container bot-mar">

	
<div className="product-tabs">

<Tabs>
    <TabList>
      <Tab>Today</Tab>
      <Tab>This Week 2</Tab>
	  <Tab>This Month</Tab>
	  <Tab>This Year</Tab>
    </TabList>

    <TabPanel>
      
<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2} spacing={2}>
	<Card sx={{ maxWidth: 345 }}> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='productivity_title'>
          White Quartz
        </Typography>
		<CardMedia
        sx={{ height: 140 }}
        image="/images/productivity-1.jpg"
        title="Excavators"
      />
        <Typography variant="body2" color="text.secondary" className="productivity-content">
			<div>Volume : <strong>sss</strong></div>
			<div> Working Time: <strong>sdfd</strong></div>
        </Typography>
      </CardContent>
      {/*<CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
	</CardActions>*/}
    </Card>
	</Unstable_Grid2>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
	<Card sx={{ maxWidth: 345 }}> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='productivity_title'>
          Black Quartz
        </Typography>
		<CardMedia
        sx={{ height: 140 }}
        image="/images/productivity-2.jpg"
        title="Excavators"
      />
        <Typography variant="body2" color="text.secondary" className="productivity-content">
			<div>Volume : <strong>sss</strong></div>
			<div> Working Time: <strong>sdfd</strong></div>
        </Typography>
      </CardContent>
      {/*<CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
	</CardActions>*/}
    </Card>
	</Unstable_Grid2>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
	<Card sx={{ maxWidth: 345 }}> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='productivity_title'>
          Rose Quartz
        </Typography>
		<CardMedia
        sx={{ height: 140 }}
        image="/images/productivity-3.jpg"
        title="Excavators"
      />
        <Typography variant="body2" color="text.secondary" className="productivity-content">
			<div>Volume : <strong>sss</strong></div>
			<div> Working Time: <strong>sdfd</strong></div>
        </Typography>
      </CardContent>
      {/*<CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
	</CardActions>*/}
    </Card>
	</Unstable_Grid2>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
	<Card sx={{ maxWidth: 345 }}> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='productivity_title'>
          Purple Quartz
        </Typography>
		<CardMedia
        sx={{ height: 140 }}
        image="/images/productivity-4.jpg"
        title="Excavators"
      />
        <Typography variant="body2" color="text.secondary" className="productivity-content">
			<div>Volume : <strong>sss</strong></div>
			<div> Working Time: <strong>sdfd</strong></div>
        </Typography>
      </CardContent>
      {/*<CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
	</CardActions>*/}
    </Card>
	</Unstable_Grid2>
</Unstable_Grid2>

<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2} spacing={2}>
	<Card sx={{ maxWidth: 345 }}> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='productivity_title'>
          Snow White Quartz
        </Typography>
		<CardMedia
        sx={{ height: 140 }}
        image="/images/productivity-5.jpg"
        title="Excavators"
      />
        <Typography variant="body2" color="text.secondary" className="productivity-content">
			<div>Volume : <strong>sss</strong></div>
			<div> Working Time: <strong>sdfd</strong></div>
        </Typography>
      </CardContent>
      {/*<CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
	</CardActions>*/}
    </Card>
	</Unstable_Grid2>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
	<Card sx={{ maxWidth: 345 }}> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='productivity_title'>
          Smoke Quartz
        </Typography>
		<CardMedia
        sx={{ height: 140 }}
        image="/images/productivity-6.jpg"
        title="Excavators"
      />
        <Typography variant="body2" color="text.secondary" className="productivity-content">
			<div>Volume : <strong>sss</strong></div>
			<div> Working Time: <strong>sdfd</strong></div>
        </Typography>
      </CardContent>
      {/*<CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
	</CardActions>*/}
    </Card>
	</Unstable_Grid2>
	
</Unstable_Grid2>


    </TabPanel>
    <TabPanel>
      
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2} spacing={2}>
	<Card sx={{ maxWidth: 345 }}> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='productivity_title'>
          Red Quartz
        </Typography>
		<CardMedia
        sx={{ height: 140 }}
        image="/images/productivity-7.jpg"
        title="Excavators"
      />
        <Typography variant="body2" color="text.secondary" className="productivity-content">
			<div>Volume : <strong>sss</strong></div>
			<div> Working Time: <strong>sdfd</strong></div>
        </Typography>
      </CardContent>
      {/*<CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
	</CardActions>*/}
    </Card>
	</Unstable_Grid2>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
	<Card sx={{ maxWidth: 345 }}> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='productivity_title'>
          Strawberry Quartz
        </Typography>
		<CardMedia
        sx={{ height: 140 }}
        image="/images/productivity-8.jpg"
        title="Excavators"
      />
        <Typography variant="body2" color="text.secondary" className="productivity-content">
			<div>Volume : <strong>sss</strong></div>
			<div> Working Time: <strong>sdfd</strong></div>
        </Typography>
      </CardContent>
      {/*<CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
	</CardActions>*/}
    </Card>
	</Unstable_Grid2>
	
</Unstable_Grid2>

    </TabPanel>
	<TabPanel>
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2} spacing={2}>
	<Card sx={{ maxWidth: 345 }}> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='productivity_title'>
		Quartz Sand Powder
        </Typography>
		<CardMedia
        sx={{ height: 140 }}
        image="/images/productivity-9.jpg"
        title="Excavators"
      />
        <Typography variant="body2" color="text.secondary" className="productivity-content">
			<div>Volume : <strong>sss</strong></div>
			<div> Working Time: <strong>sdfd</strong></div>
        </Typography>
      </CardContent>
      {/*<CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
	</CardActions>*/}
    </Card>
	</Unstable_Grid2>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
	<Card sx={{ maxWidth: 345 }}> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='productivity_title'>
		White Quartz Sand
        </Typography>
		<CardMedia
        sx={{ height: 140 }}
        image="/images/productivity-10.jpg"
        title="Excavators"
      />
        <Typography variant="body2" color="text.secondary" className="productivity-content">
			<div>Volume : <strong>sss</strong></div>
			<div> Working Time: <strong>sdfd</strong></div>
        </Typography>
      </CardContent>
      {/*<CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
	</CardActions>*/}
    </Card>
	</Unstable_Grid2>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
	<Card sx={{ maxWidth: 345 }}> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='productivity_title'>
		Quartz Grain
        </Typography>
		<CardMedia
        sx={{ height: 140 }}
        image="/images/productivity-11.jpg"
        title="Excavators"
      />
        <Typography variant="body2" color="text.secondary" className="productivity-content">
			<div>Volume : <strong>sss</strong></div>
			<div> Working Time: <strong>sdfd</strong></div>
        </Typography>
      </CardContent>
      {/*<CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
	</CardActions>*/}
    </Card>
	</Unstable_Grid2>
	
</Unstable_Grid2>
    </TabPanel>
	<TabPanel>
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2} spacing={2}>
	<Card sx={{ maxWidth: 345 }}> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='productivity_title'>
		White Quartz Grain
        </Typography>
		<CardMedia
        sx={{ height: 140 }}
        image="/images/productivity-12.jpg"
        title="Excavators"
      />
        <Typography variant="body2" color="text.secondary" className="productivity-content">
			<div>Volume : <strong>sss</strong></div>
			<div> Working Time: <strong>sdfd</strong></div>
        </Typography>
      </CardContent>
      {/*<CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
	</CardActions>*/}
    </Card>
	</Unstable_Grid2>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
	<Card sx={{ maxWidth: 345 }}> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='productivity_title'>
		Quartz Granules
        </Typography>
		<CardMedia
        sx={{ height: 140 }}
        image="/images/productivity-13.jpg"
        title="Excavators"
      />
        <Typography variant="body2" color="text.secondary" className="productivity-content">
			<div>Volume : <strong>sss</strong></div>
			<div> Working Time: <strong>sdfd</strong></div>
        </Typography>
      </CardContent>
      {/*<CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
	</CardActions>*/}
    </Card>
	</Unstable_Grid2>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
	<Card sx={{ maxWidth: 345 }}> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='productivity_title'>
		Snow White Quartz Granules
        </Typography>
		<CardMedia
        sx={{ height: 140 }}
        image="/images/productivity-14.jpg"
        title="Excavators"
      />
        <Typography variant="body2" color="text.secondary" className="productivity-content">
			<div>Volume : <strong>sss</strong></div>
			<div> Working Time: <strong>sdfd</strong></div>
        </Typography>
      </CardContent>
      {/*<CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
	</CardActions>*/}
    </Card>
</Unstable_Grid2>
	
	  <Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
	  <Card sx={{ maxWidth: 345 }}> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='productivity_title'>
		Silica Quartz Granules
        </Typography>
		<CardMedia
        sx={{ height: 140 }}
        image="/images/productivity-15.jpg"
        title="Excavators"
      />
        <Typography variant="body2" color="text.secondary" className="productivity-content">
			<div>Volume : <strong>sss</strong></div>
			<div> Working Time: <strong>sdfd</strong></div>
        </Typography>
      </CardContent>
	  </Card>
	</Unstable_Grid2>
	
</Unstable_Grid2>
<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2} spacing={2}>
	<Card sx={{ maxWidth: 345 }}> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='productivity_title'>
		Silica Quartz Granules
        </Typography>
		<CardMedia
        sx={{ height: 140 }}
        image="/images/productivity-16.jpg"
        title="Excavators"
      />
        <Typography variant="body2" color="text.secondary" className="productivity-content">
			<div>Volume : <strong>sss</strong></div>
			<div> Working Time: <strong>sdfd</strong></div>
        </Typography>
      </CardContent>
      {/*<CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
	</CardActions>*/}
    </Card>
	</Unstable_Grid2>
	
	
</Unstable_Grid2>
    </TabPanel>
  </Tabs>



  
  </div>





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


{/*  Productivity Page content Closed */}




      </div>
      
      }
    </div>
  );
}