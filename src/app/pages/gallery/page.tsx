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
            window.$ = window.jQuery = $
        }
      }, [typeof window ]);

	  
  return (
    <div className='main-container'>
     {windows && 
	 //id: `simple-tab-${index}`,
	 //'aria-controls': `simple-tabpanel-${index}`,
     <div>
      <div class="home-banner">
	  
        <div class="header">
          <div class="menu-icon"></div>
          <a href="#" class="logo"></a>
          <div class="menu">
            <menu>
			
			<MenuItem onClick={()=>{
                router.push('/pages/home')
              }}>Home1</MenuItem>
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
			  </menu>

          
          </div>
      </div>
	 {/* <div class="banner-img"><img src="images/slider-1.jpg" />
	  </div>*/}
	  <div class="static-banner-pic">
		<div class="caption">Welcome to</div>
		<h2>Manasa Sharon <br /> <span>Mines & Minerals</span></h2>
		
		Delving into the depths of the earth for precious minerals.
		
		<div>
		<a href="inquiry.html" class="enquire-button">Request a Quote</a>
		</div>
		

    </div>
     {/*<Slider className="owl-theme slider" {...options}>
              <div className="item" width="100">
                <Image
                  src={ocean}
                  alt="Ocean"
                  width={100}
                  //height={100}
                />
              </div>
              <div className="item" width="100">
                <Image
                  src={sea}
                  alt="Sea"
                  width={100}
                  //height={100}
                />
              </div>
              <div className="item" width="100">
                <Image
                  src={woman}
                  alt="Woman"
                  width={100}
                 //height={100}
                />
              </div>
            </Slider>*/}
	 
        <SimpleImageSlider
        width='100%'
        height='100%'
        images={images}
        showBullets={true}
        showNavs={true}
		autoPlay={true}
		autoPlayDelay={4.0}
		slideDuration={2}
      />

        </div>
        <div class="container">
        <div class="home-about">
          <h1>Our <span>Exploration<br /><span>Who we are</span></span></h1>
          <p>
          Like many in the mines business, our journey probably involved a phase of exploration and discovery. This might have included conducting geological surveys, analyzing potential mining sites, and investing in exploration activities such as drilling and sampling. Eventually, this may have made significant discoveries of mineral deposits that 
        showed promise for development.
          </p>
        </div>
        </div>


	

     <Grid container spacing={2} rowSpacing={2} columnSpacing={4}  class="home-products-block">
	 <div class="cener-text"><h1>Our<span>Products<br /><span>Mines and Minerals</span></span></h1></div>
	 <Grid md={12} sm={12} xs={12} columnSpacing={2} >
		
		<Grid md={6} sm={6} xs={6} columnSpacing={2} spacing={2} class="home-products-img">
			<div><img src="images/home-prod-img.jpg" /></div>
		</Grid>
		<Grid md={6} class="home-products">
		<Grid container spacing={2} rowSpacing={2} columnSpacing={2}>
			<Grid md={6} sm={6} xs={12} columnSpacing={2}>
				<div class="home-products-item h-prod-borders">
					<div class="h-product-img"><img src="images/h-prod-1.jpg" /></div>
					<div class="h-product-title">WHITE QUARTZ</div>
					<div class="h-product-content">
						White quartz is a crystalline mineral composed primarily of silicon dioxide (SiO2). It is one of the most abundant minerals on Earth and is found in various geological formations worldwide. Quartz..... 
					</div>
				</div>
			</Grid>
			<Grid md={6} sm={6} xs={12} columnSpacing={2}>
				<div class="home-products-item h-prod-borders">
					<div class="h-product-img"><img src="images/h-prod-2.jpg" /></div>
					<div class="h-product-title">Black QUARTZ</div>
					<div class="h-product-content">
						Black quartz, also known as "morion," is a variety of quartz crystal that exhibits a deep black color. It is formed through natural processes that involve the inclusion of various impurities during the........
					</div>
				</div>
			</Grid>
			<Grid md={6} sm={12} xs={12}>
				<div class="home-products-item h-prod-borders">
					<div class="h-product-img"><img src="images/h-prod-3.jpg" /></div>
					<div class="h-product-title">Rose QUARTZ</div>
					<div class="h-product-content">
						Quartz rose, also known as rose quartz, is a popular variety of quartz crystal that is prized for its delicate pink to rose-red coloration. It's commonly used in various spiritual, healing, and decorative practices.....
					</div>
				</div>
			</Grid>
			<Grid md={6} sm={12} xs={12}>
				<div class="home-products-item h-prod-borders">
					<div class="h-product-img"><img src="images/h-prod-4.jpg" /></div>
					<div class="h-product-title">Purple QUARTZ</div>
					<div class="h-product-content">
						Quartz purple, also known as amethyst, is a variety of quartz that ranges in color from pale lilac to deep purple. It is a popular gemstone prized for its beauty and metaphysical properties.....
					</div>
				</div>
			</Grid>
			<Grid md={6} sm={12} xs={12}>
				<div class="home-products-item h-prod-borders">
					<div class="h-product-img"><img src="images/h-prod-5.jpg" /></div>
					<div class="h-product-title">Snow White Quartz</div>
					<div class="h-product-content">
						Snow White Quartz is a type of engineered quartz stone used primarily for countertops, backsplashes, and other interior design applications, is a man-made product composed of natural quartz crystals mixed with resins...
					</div>
				</div>
			</Grid>
			<Grid md={6} sm={12} xs={12}>
				<div class="home-products-item h-prod-borders">
					<div class="h-product-img"><img src="images/h-prod-6.jpg" /></div>
					<div class="h-product-title">Smoke Quartz</div>
					<div class="h-product-content">
						Smoke quartz, also known as smoky quartz, is a variety of quartz crystal with a grayish to brownish color. It gets its distinctive hue from natural irradiation and trace amounts of aluminum within the crystal structure.
					</div>
				</div>
			</Grid>
			<Grid md={6} sm={12} xs={12}>
				<div class="home-products-item h-prod-borders">
					<div class="h-product-img"><img src="images/h-prod-7.jpg" /></div>
					<div class="h-product-title">Red Quartz</div>
					<div class="h-product-content">
						Red quartz is a type of quartz crystal that exhibits a reddish hue due to various mineral inclusions or impurities within the crystal lattice. These impurities often include iron oxide or hematite......
					</div>
				</div>
			</Grid>
			<Grid md={6} sm={12} xs={12}>
				<div class="home-products-item h-prod-borders">
					<div class="h-product-img"><img src="images/h-prod-8.jpg" /></div>
					<div class="h-product-title">Strawberry Quartz</div>
					<div class="h-product-content">
						Strawberry quartz is a variety of quartz that's distinguished by its pinkish-red coloration. The name "strawberry quartz" is derived from its resemblance to the color of ripe strawberries.....
					</div>
				</div>
			</Grid>
		</Grid>


		</Grid>
	</Grid>
	</Grid>

<div class="margin-none">
<Grid md={6} class="text-center">
		<h1>Our <span>Projects<br /><span>Locations</span></span></h1>
	</Grid>
	<Grid md={6} class="carousel-2">
		<OwlCarousel className="react-owl-carousel owl-theme" {...options2}>
              <div className="item ">
				<div className="h-location-img">
                <Image
                  src={location1}
                  alt="Location-1"
                  //width={100}
                  //height={100}
                />
				</div>
				<div className='h-location-img-content'>
					<div class="h-location-title">LOCATION 1 TITLE GOES HERE <span>Nam at mattis libero, et laoreet leo. </span></div>
					<div class="h-location-arr"></div>
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
				<div className='h-location-img-content'>
					<div class="h-location-title">LOCATION 2 TITLE GOES HERE <span>Nam at mattis libero, et laoreet leo. </span></div>
					<div class="h-location-arr"></div>
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
				<div className='h-location-img-content'>
					<div class="h-location-title">LOCATION 3 TITLE GOES HERE <span>Nam at mattis libero, et laoreet leo. </span></div>
					<div class="h-location-arr"></div>
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
				<div className='h-location-img-content'>
					<div class="h-location-title">LOCATION 4 TITLE GOES HERE <span>Nam at mattis libero, et laoreet leo. </span></div>
					<div class="h-location-arr"></div>
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
				<div className='h-location-img-content'>
					<div class="h-location-title">LOCATION 1 TITLE GOES HERE <span>Nam at mattis libero, et laoreet leo. </span></div>
					<div class="h-location-arr"></div>
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
				<div className='h-location-img-content'>
					<div class="h-location-title">LOCATION 2 TITLE GOES HERE <span>Nam at mattis libero, et laoreet leo. </span></div>
					<div class="h-location-arr"></div>
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
				<div className='h-location-img-content'>
					<div class="h-location-title">LOCATION 3 TITLE GOES HERE <span>Nam at mattis libero, et laoreet leo. </span></div>
					<div class="h-location-arr"></div>
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
				<div className='h-location-img-content'>
					<div class="h-location-title">LOCATION 4 TITLE GOES HERE <span>Nam at mattis libero, et laoreet leo. </span></div>
					<div class="h-location-arr"></div>
				</div>
              </div>
            </OwlCarousel>

	</Grid>
</div>

<div class="row margin-none">
<Grid md={12} class="text-center">
		<h1>Our <span>Partners<br /><span>Making Business With us</span></span></h1>
	</Grid>
	<Grid md={12} class="carousel-3">

	<OwlCarousel3 className="react-owl-carousel owl-theme" {...options3}>
		<div className="item">
			<div className="item h-partner-img" >
				<Image
					src={hpartner1} 
					alt="h-partner-1"
					//width={100}
					//height={100}
					/>
			</div>
		</div>
		<div className="item" >
			<div className="item h-partner-img" >
				<Image
					src={hpartner2} 
					alt="h-partner-2"
					//width={100}
					//height={100}
					/>
			</div>
		</div>
		<div className="item" >
			<div className="item h-partner-img" >
				<Image
					src={hpartner3} 
					alt="h-partner-3"
					//width={100}
					//height={100}
					/>
			</div>
		</div>
		<div className="item" >
			<div className="item h-partner-img" >
				<Image
					src={hpartner4} 
					alt="h-partner-4"
					//width={100}
					//height={100}
					/>
			</div>
		</div>
		<div className="item" >
			<div className="item h-partner-img" >
				<Image
					src={hpartner5} 
					alt="h-partner-5"
					//width={100}
					//height={100}
					/>
			</div>
		</div>
		<div className="item" >
			<div className="item h-partner-img" >
				<Image
					src={hpartner6} 
					alt="h-partner-6"
					//width={100}
					//height={100}
					/>
			</div>
		</div>
		<div className="item" >
			<div className="item h-partner-img" >
				<Image
					src={hpartner7} 
					alt="h-partner-7"
					//width={100}
					//height={100}
					/>
			</div>
		</div>
	</OwlCarousel3>
		
	</Grid>
</div>

<Grid md={12} columnSpacing={2}>
	<div class="footer">
	<Grid md={3} sm={12} xs={12}>
			<div class="footer-logo"><img src="images/logo.png" /></div>
			<div class="terms">Terms & Conditions 2024<br />
msminesandminerals.com</div>
	</Grid>
	<Grid md={7} sm={12} xs={12}>
			<ul class="footer-menu">
				<li><a href="index.html">Home</a></li>
				<li><a href="about">ABOUT US</a></li>
				<li><a href="products.html">Our Products</a></li>
				<li><a href="equipment.html">Machinery</a></li>
				<li><a href="productivity">Productivity</a></li>
				<li><a href="gallery.html">Gallery</a></li>
				<li><a href="contact.html">Contact Us</a></li>
				<li><a href="enquiry.html">Request a Quote</a></li>
				<li><a href="career.html">Careers</a></li>
			</ul>
	</Grid>
	<Grid md={2} sm={12} xs={12}>
			<div class="social-icons">
				<ul>
					<li><a href="#"><img src="images/social-icon-1.png" /></a></li>
					<li><a href="#"><img src="images/social-icon-2.png" /></a></li>
					<li><a href="#"><img src="images/social-icon-3.png" /></a></li>
				</ul>
			</div>
	</Grid>
	</div>
</Grid>
{/*  About Page content  started */}
<div class="banner">
		<div class="header bgwhite">
		<div class="menu-icon"></div>
		<a href="#" class="logo-2"><img src="images/logo-2.png" /></a>
		<div class="menu">
		<menu>
			
			<MenuItem>Home</MenuItem>
			<MenuItem >About</MenuItem>
			<MenuItem>Our Products</MenuItem>
			<MenuItem>Machinery</MenuItem>
			<MenuItem>Productivity</MenuItem>
			<MenuItem>Gallery</MenuItem>
			<MenuItem>Contact Us</MenuItem>
			<MenuItem>Request a Quote</MenuItem>
			<MenuItem>Careers</MenuItem>
			</menu>
			
    	</div>
		</div>
		<div class="about-banner">
			<a href="enquiry.html" class="request-button">Request a Quote</a>
			<img src="images/about-banner.jpg" />
			<div class="title-blk-bar">
				<div class="container">
					<h1>About <span>Us<br /><span>What we are</span></span></h1>
					<div class="tagline">Harvesting the earth's natural resources responsibly.</div>
				</div>
			</div>
		</div>
</div>

	<div class="container bot-mar">
	
		<div class="about-text">
		<p >
		We are pioneers in the mining industry, driven by our unwavering commitment to excellence, sustainability, and social responsibility. With a legacy built on integrity and innovation, we stand at the forefront of responsible resource extraction, setting new standards for ethical conduct and environmental stewardship.</p>
		<p>
	We are visionaries, guided by a bold vision of a future where mining operations coexist harmoniously with nature and communities, creating lasting value for all stakeholders. Our foresight drives us to explore new frontiers, embrace emerging technologies, and pioneer sustainable practices that redefine the possibilities of responsible resource development.
		</p>
		</div>

	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}>
		<Unstable_Grid2 md={6} sm={6} xs={12} columnSpacing={2} spacing={2}>
		<div class="cener-text"><h2>Our<span>Mission</span></h2></div>
				<div class="about-page-pic"><img src="images/about-pic-1.jpg" /></div>
				<p>
				At Manasa Sharon Mines and Minerals Pvt Ltd, our mission transcends mere extraction; it embodies
a commitment to shaping the narrative of responsible mining. We aspire to redefine industry
standards, fostering a legacy where the richness of the Earth meets the elegance of sustainable
practices. With an unwavering focus on precision, innovation, and environmental stewardship, our
mission is to not only extract precious minerals but to contribute to a world where mining
harmonizes with nature
				</p>
		</Unstable_Grid2>
	
		<Unstable_Grid2 md={6} sm={6} xs={12} columnSpacing={2} spacing={2}>
		<div class="cener-text"><h2>Our<span>Vision</span></h2></div>
				<div class="about-page-pic"><img src="images/about-pic-2.jpg" /></div>
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
<div class="container bot-mar">

	<Unstable_Grid2 md={12} sm={12} xs={12} rowSpacing={2} >
			<div class="steward-pic"><img src="images/about-pic-3.jpg" /></div>
				<p class="bot-mar">
				<strong>Stewards of the Earth:</strong> As stewards of the Earth, we recognize the profound responsibility entrusted to us in managing the planet's finite resources. We approach our work with reverence for the environment, implementing rigorous conservation measures, and minimizing our ecological footprint at every stage of the mining lifecycle. Our commitment to sustainability extends beyond compliance to inspire meaningful change and leave a positive legacy for future generations.
				</p>
				<p>&nbsp;</p>
	</Unstable_Grid2>
</div>
<div class="container bot-mar">
	<Unstable_Grid2 md={12} sm={12} xs={12} rowSpacing={2}>
	<p>
				<div class="steward-pic move-right"><img src="images/about-pic-4.jpg" /></div><strong>Innovators:</strong> Innovation is the engine of progress, and we are relentless in our pursuit of new ideas, technologies, and approaches to mining. From advanced exploration techniques to state-of-the-art processing methods, we leverage innovation to optimize efficiency, enhance productivity, and minimize environmental impact, ensuring the long-term viability of our operations.
				</p>

	</Unstable_Grid2>
</div>

	



{/*  About Page contnt Closed */}


{/*  Equipment page content started */}

<div class="banner">
		<div class="header bgwhite">
		<div class="menu-icon"></div>
		<a href="#" class="logo-2"><img src="images/logo-2.png" /></a>
		<div class="menu">
		<menu>
			
			<MenuItem>Home</MenuItem>
			<MenuItem >About</MenuItem>
			<MenuItem>Our Products</MenuItem>
			<MenuItem>Machinery</MenuItem>
			<MenuItem>Productivity</MenuItem>
			<MenuItem>Gallery</MenuItem>
			<MenuItem>Contact Us</MenuItem>
			<MenuItem>Request a Quote</MenuItem>
			<MenuItem>Careers</MenuItem>
			</menu>
			
    	</div>
		</div>
		<div class="equip-banner">
		<a href="enquiry.html" class="request-button">Request a Quote</a>
		<img src="images/equip-banner.jpg" />
		<div class="title-blk-bar">
			<div class="container">
				<h1>Our <span>Equipment<br /><span>Machinery we use</span></span></h1>
				<div class="tagline">Where resilience thrives amidst the challenges of extraction.</div>
			</div>
		</div>
	</div>
</div>

<div class="container bot-mar">
		<div class="about-text">
			The equipment used in mining businesses can vary significantly depending on the type of mining operation, the scale of the operation, and the resources being extracted. However, here's a list of some common types of equipment used in various mining operations:
		</div>
<div className='equip-products'>
<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2} spacing={2}>
	<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/equip-1.png"
        title="Excavators"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Excavators: 
        </Typography>
        <Typography variant="body2" color="text.secondary" class="equip-content">
		These are heavy-duty machines used for digging and moving large amounts of earth, rock, and other materials. They are essential for tasks such as stripping overburden, digging ore, and constructing infrastructure.
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
      <CardMedia
        sx={{ height: 140 }}
        image="/images/equip-2.png"
        title="Dump Trucks"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
		Dump Trucks: 
        </Typography>
        <Typography variant="body2" color="text.secondary" class="equip-content">
		These are specialized trucks used to transport mined materials, such as ore, overburden, or waste, from the mining site to a processing facility or stockpile.
        </Typography>
      </CardContent>
      </Card>
	</Unstable_Grid2>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
	<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/equip-3.png"
        title="Dump Trucks"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
		Bulldozers: 
        </Typography>
        <Typography variant="body2" color="text.secondary" class="equip-content">
		Bulldozers are powerful machines equipped with a broad metal blade at the front, used for pushing and moving soil, rubble, and other materials. They are commonly used in earthmoving and site preparation activities in mining.
        </Typography>
      </CardContent>
      </Card>
	</Unstable_Grid2>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
	<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/equip-4.png"
        title="Dump Trucks"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
		Drills: 
        </Typography>
        <Typography variant="body2" color="text.secondary" class="equip-content">
		Various types of drills are used in mining operations for exploration, production drilling, and blasting. These may include rotary drills, percussion drills, and diamond drills, depending on the specific requirements of the operation.
        </Typography>
      </CardContent>
      </Card>
	</Unstable_Grid2>
</Unstable_Grid2>
<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} >
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
	<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/equip-5.png"
        title="Dump Trucks"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
		Loaders: 
        </Typography>
        <Typography variant="body2" color="text.secondary" class="equip-content">
		Loaders are heavy machinery equipped with a front-mounted bucket used for scooping, lifting, and loading materials such as ore, coal, or gravel into trucks or other hauling equipment.
        </Typography>
      </CardContent>
      </Card>
	</Unstable_Grid2>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
		<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/equip-6.png"
        title="Dump Trucks"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
		Pumps: 
        </Typography>
        <Typography variant="body2" color="text.secondary" class="equip-content">
		Pumps are used in mining operations for various purposes, including dewatering of mines, transporting slurries, and supplying water for processing and other activities.
        </Typography>
      </CardContent>
      </Card>
	</Unstable_Grid2>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
		<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/equip-7.png"
        title="Dump Trucks"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
		Safety Equipment: 
        </Typography>
        <Typography variant="body2" color="text.secondary" class="equip-content">
		Personal protective equipment (PPE), safety barriers, ventilation systems, and monitoring devices are essential in ensuring the safety of workers in mining environments.
        </Typography>
      </CardContent>
      </Card>
	</Unstable_Grid2>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
		<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/equip-8.png"
        title="Dump Trucks"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
		Excavators: 
        </Typography>
        <Typography variant="body2" color="text.secondary" class="equip-content">
		These are heavy-duty machines used for digging and moving large amounts of earth, rock, and other materials. They are essential for tasks such as stripping overburden, digging ore, and constructing infrastructure.
        </Typography>
      </CardContent>
      </Card>
	</Unstable_Grid2>
</Unstable_Grid2>
<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} >
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2} spacing={2}>
	<Unstable_Grid2 sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/equip-1.png"
        title="Excavators"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Excavators: 
        </Typography>
        <Typography variant="body2" color="text.secondary" class="equip-content">
		These are heavy-duty machines used for digging and moving large amounts of earth, rock, and other materials. They are essential for tasks such as stripping overburden, digging ore, and constructing infrastructure.
        </Typography>
      </CardContent>
      {/*<CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
	</CardActions>*/}
    </Unstable_Grid2>
</Unstable_Grid2>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
	<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/equip-2.png"
        title="Dump Trucks"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
		Dump Trucks: 
        </Typography>
        <Typography variant="body2" color="text.secondary" class="equip-content">
		These are specialized trucks used to transport mined materials, such as ore, overburden, or waste, from the mining site to a processing facility or stockpile.
        </Typography>
      </CardContent>
      </Card>
	</Unstable_Grid2>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
	<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/equip-3.png"
        title="Dump Trucks"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
		Bulldozers: 
        </Typography>
        <Typography variant="body2" color="text.secondary" class="equip-content">
		Bulldozers are powerful machines equipped with a broad metal blade at the front, used for pushing and moving soil, rubble, and other materials. They are commonly used in earthmoving and site preparation activities in mining.
        </Typography>
      </CardContent>
      </Card>
	</Unstable_Grid2>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
	<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/equip-4.png"
        title="Dump Trucks"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
		Drills: 
        </Typography>
        <Typography variant="body2" color="text.secondary" class="equip-content">
		Various types of drills are used in mining operations for exploration, production drilling, and blasting. These may include rotary drills, percussion drills, and diamond drills, depending on the specific requirements of the operation.
        </Typography>
      </CardContent>
      </Card>
	</Unstable_Grid2>
</Unstable_Grid2>
<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} >
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2} spacing={2} rowSpacing={2}>
	<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/equip-5.png"
        title="Dump Trucks"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
		Loaders: 
        </Typography>
        <Typography variant="body2" color="text.secondary" class="equip-content">
		Loaders are heavy machinery equipped with a front-mounted bucket used for scooping, lifting, and loading materials such as ore, coal, or gravel into trucks or other hauling equipment.
        </Typography>
      </CardContent>
      </Card>
	</Unstable_Grid2>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2} spacing={2} rowSpacing={2}>
		<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/equip-6.png"
        title="Dump Trucks"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
		Pumps: 
        </Typography>
        <Typography variant="body2" color="text.secondary" class="equip-content">
		Pumps are used in mining operations for various purposes, including dewatering of mines, transporting slurries, and supplying water for processing and other activities.
        </Typography>
      </CardContent>
      </Card>
	</Unstable_Grid2>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
		<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/equip-7.png"
        title="Dump Trucks"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
		Safety Equipment: 
        </Typography>
        <Typography variant="body2" color="text.secondary" class="equip-content">
		Personal protective equipment (PPE), safety barriers, ventilation systems, and monitoring devices are essential in ensuring the safety of workers in mining environments.
        </Typography>
      </CardContent>
      </Card>
	</Unstable_Grid2>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
		<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/equip-8.png"
        title="Dump Trucks"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
		Excavators: 
        </Typography>
        <Typography variant="body2" color="text.secondary" class="equip-content">
		These are heavy-duty machines used for digging and moving large amounts of earth, rock, and other materials. They are essential for tasks such as stripping overburden, digging ore, and constructing infrastructure.
        </Typography>
      </CardContent>
      </Card>
	</Unstable_Grid2>
</Unstable_Grid2>
</div>

</div>

{/*  Equipment Page content Closed */}



{/*  Contact Page content */}
<div class="banner">
		<div class="header bgwhite">
		<div class="menu-icon"></div>
		<a href="#" class="logo-2"><img src="images/logo-2.png" /></a>
		<div class="menu">
			
		<menu>
			
			<MenuItem>Home</MenuItem>
			<MenuItem >About</MenuItem>
			<MenuItem>Our Products</MenuItem>
			<MenuItem>Machinery</MenuItem>
			<MenuItem>Productivity</MenuItem>
			<MenuItem>Gallery</MenuItem>
			<MenuItem>Contact Us</MenuItem>
			<MenuItem>Request a Quote</MenuItem>
			<MenuItem>Careers</MenuItem>
			</menu>
    </div>
	
	
</div>
   
	<div class="contact-banner">
		<a href="enquiry.html" class="request-button">Request a Quote</a>
		<img src="images/contact-banner.jpg" />
		<div class="title-blk-bar">
			<div class="container">
				<h1>Contact <span>Us<br /><span>Connect with us</span></span></h1>
				<div class="tagline">Building a Sustainable Future through Mining.</div>
			</div>
		</div>
	</div>
	
</div>


<div class="container bot-mar">


<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={0}>
		<div class="about-text"><strong>Contact Us</strong>
		<div>Enter the following details for contacting us</div>
		</div>
		
		
<form>

	<Unstable_Grid2 container spacing={0} rowSpacing={-4}  className="bot-mar" >
	<FormControl fullWidth><TextField id="outlined-basic" label="Name" variant="outlined" /></FormControl>
	</Unstable_Grid2>

	<Unstable_Grid2 container spacing={0} rowSpacing={-4}  className="bot-mar" >
	<FormControl fullWidth><TextField id="outlined-basic2" label="Company Name" variant="outlined" /></FormControl>
	</Unstable_Grid2>

	<Unstable_Grid2 container spacing={0} rowSpacing={-4} >
	<FormControl fullWidth><TextareaAutosize id="outlined-basic3" label="Additional Details/Requirement:" minRows={3} placeholder="Additional Details/Requirement" /></FormControl>
	</Unstable_Grid2>

	  <div class="contact-buttons">

    <Stack spacing={2} direction="row">
      <Button variant="contained">Submit</Button>
      <Button variant="outlined">Cancel</Button>
    </Stack>
</div>

	</form>
	</Unstable_Grid2>

	
		<Unstable_Grid2 md={8} sm={6} xs={12} columnSpacing={2} spacing={2}>
		<div class="about-text"><strong>Find us on google map</strong></div>
				<div class="google-map">
					<img src='images/map.jpg'></img>
				</div>
		</Unstable_Grid2>
</Unstable_Grid2>
	<div class="row mar-top">&nbsp;</div>
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
		<div class="contact-icon1">
				<div><strong>Office:</strong></div>
				<div> Manasa Sharon Mines and Minerals Pvt. Ltd., India</div>
				<div>Fames Brindavanam, Flat-403, Mubarak Colony, Yendada, Visakhapatnam, Andhra Pradesh, India - 530045
				</div>
		</div>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
		<div class="contact-icon2">
			<div><strong>Phone:</strong></div>
			<div>+91 984 866 4245</div>
		</div>
		<div class="row mar-top">&nbsp;</div>
		<div class="contact-icon3">
			<div><strong>Email:</strong></div>
			<div><a href="mailto:">contact@msminesandminerals.com</a></div>
		</div>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
		<div class="contact-icon4">
			<div><strong>Production:</strong></div>
			<div>Manasa Sharon Minerals and Mines Pvt. Ltd.</div>
			<div>Sunki,</div>
			<div>Koraput,</div>
			<div>Odisha, India.</div>
		</div>
		</Unstable_Grid2>
	</Unstable_Grid2>
		
		
		</div>


{/*  Contact Page content Closed */}

{/*  Enquiry Page content */}

<div class="banner">
		<div class="header bgwhite">
		<div class="menu-icon"></div>
		<a href="#" class="logo-2"><img src="images/logo-2.png" /></a>
		<div class="menu">
			
		<menu>
			
			<MenuItem>Home</MenuItem>
			<MenuItem >About</MenuItem>
			<MenuItem>Our Products</MenuItem>
			<MenuItem>Machinery</MenuItem>
			<MenuItem>Productivity</MenuItem>
			<MenuItem>Gallery</MenuItem>
			<MenuItem>Contact Us</MenuItem>
			<MenuItem>Request a Quote</MenuItem>
			<MenuItem>Careers</MenuItem>
			</menu>
    </div>
	
	
</div>
   
	<div class="enquiry-banner">
		<a href="enquiry.html" class="request-button">Request a Quote</a>
		<img src="images/enquiry-banner.jpg" />
		<div class="title-blk-bar">
			<div class="container">
				<h1>Request a <span>Quote<br /><span>Connect with us</span></span></h1>
				<div class="tagline">The hidden gems of the earth: Exploring mines and minerals worldwide.</div>
			</div>
		</div>
	</div>
	
</div>
<div class="container bot-mar">
<div class="about-text"><strong>Request a Quote</strong>
<div>Please fill the following details for your quote</div></div>
	<Unstable_Grid2 container spacing={2} rowSpacing={-4} columnSpacing={4} className="bot-mar">
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Name" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Email" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Phone Number" variant="outlined" /></FormControl>
		</Unstable_Grid2>
	</Unstable_Grid2>

	<Unstable_Grid2 container spacing={2} rowSpacing={-4} columnSpacing={4} className="bot-mar">
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Company Name" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Service/Product of Interest:" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Quantity:" variant="outlined" /></FormControl>
		</Unstable_Grid2>
	</Unstable_Grid2>
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
		<Unstable_Grid2 md={8} sm={6} xs={12} columnSpacing={2} spacing={2} className="min-mar">
			<FormControl fullWidth><TextareaAutosize id="outlined-basic3" label="Additional Details/Requirement:" minRows={5.4} placeholder="Additional Details/Requirement" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2} >
		
<div class="min-mar">
		<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" className='select-label'>Budget range</InputLabel>
        <Select>
          <MenuItem value={10}>10L - 20L</MenuItem>
          <MenuItem value={20}>20L - 50L </MenuItem>
        </Select>
      </FormControl>
</div>
		
	<FormControl fullWidth >
		<label >
		Deadline:
			<input type="date" name="date" />
		</label>
	</FormControl>


		</Unstable_Grid2>
	</Unstable_Grid2>
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
	
    <FormControl fullWidth>
      <FormLabel id="demo-radio-buttons-group-label">Prefered Contact Method</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
		<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
			<Unstable_Grid2 md={6} sm={6} xs={12} columnSpacing={2} spacing={2}>
				<FormControlLabel value="phone" control={<Radio />} label="Phone" />
			</Unstable_Grid2>
			<Unstable_Grid2 md={6} sm={6} xs={12} columnSpacing={2} spacing={2}>
				<FormControlLabel value="email" control={<Radio />} label="Email" />
			</Unstable_Grid2>
        </Unstable_Grid2>
        
      </RadioGroup>
    </FormControl>


		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" className='select-label'>Preferred Contact Time</InputLabel>
        <Select>
          <MenuItem value={10}>9am - 12am</MenuItem>
          <MenuItem value={20}>1pm - 5pm </MenuItem>
        </Select>
      </FormControl>

		</Unstable_Grid2>
		
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth >
				<TextField type="file" />
			</FormControl>

		</Unstable_Grid2>
	</Unstable_Grid2>

<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
		
      <FormControlLabel control={<Checkbox />} label="I accept the terms and conditions" />
      
		</Unstable_Grid2>

		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Enter Captcha" variant="outlined" /></FormControl>
		</Unstable_Grid2>

		
</Unstable_Grid2>

<div class="contact-buttons">

    <Stack spacing={2} direction="row">
      <Button variant="contained">Submit</Button>
      <Button variant="outlined">Cancel</Button>
    </Stack>
</div>

</div>
{/*  Enquiry Page content Closed */}


{/*  Career Page content */}

<div class="banner">
		<div class="header bgwhite">
		<div class="menu-icon"></div>
		<a href="#" class="logo-2"><img src="images/logo-2.png" /></a>
		<div class="menu">
			
		<menu>
			
			<MenuItem>Home</MenuItem>
			<MenuItem >About</MenuItem>
			<MenuItem>Our Products</MenuItem>
			<MenuItem>Machinery</MenuItem>
			<MenuItem>Productivity</MenuItem>
			<MenuItem>Gallery</MenuItem>
			<MenuItem>Contact Us</MenuItem>
			<MenuItem>Request a Quote</MenuItem>
			<MenuItem>Careers</MenuItem>
			</menu>
    </div>
	
	
</div>
   
	<div class="careers-banner">
		<a href="enquiry.html" class="request-button">Request a Quote</a>
		<img src="images/careers-banner.jpg" />
		<div class="title-blk-bar">
			<div class="container">
				<h1>Open <span>Positions<br /><span>Employment</span></span></h1>
				<div class="tagline">Mining Minds, Shaping Futures: Innovating for Tomorrow's Challenges.</div>
			</div>
		</div>
	</div>
	
</div>

<div class="container bot-mar emp">
<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
		<Unstable_Grid2 md={6} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<h3>Positions:</h3>
			<strong>Executive Management:</strong>
					<p >
					<Button onClick={handleOpen} className='text-but'>Chief Executive Officer (CEO):</Button> 
The top executive responsible for overall strategic direction and management of the company.
					</p>
					<p>
					<Button onClick={handleOpen} className='text-but'>Chief Operating Officer (COO):</Button> 
					Oversees daily operations and ensures the company's operational strategies align with its overall goals
					</p>
					<p>
					<Button onClick={handleOpen} className='text-but'>Chief Financial Officer (CFO)::</Button> 
					Responsible for financial planning, reporting, and management.
					</p>
					<p>
					<Button onClick={handleOpen} className='text-but'>Chief Technical Officer (CTO):</Button> 
					Oversees technological aspects of mining operations, including exploration, extraction, and processing.
					</p>
					<p>
					<Button onClick={handleOpen} className='text-but'>Chief Sustainability Officer (CSO):</Button> 
					Responsible for ensuring environmental and social sustainability practices are integrated into operations.
					</p>
					<p>
					<Button onClick={handleOpen} className='text-but'>Chief Safety Officer (CSO):</Button> 
					Oversees safety protocols and regulations to ensure a safe working environment for all employees.
					</p>

					<strong>Middle Management:</strong>
					<p >
					<Button onClick={handleOpen} className='text-but'>Chief Executive Officer (CEO):</Button> 
The top executive responsible for overall strategic direction and management of the company.
					</p>
					<p>
					<Button onClick={handleOpen} className='text-but'>General Managers:</Button> 
					Oversee specific operations or divisions within the company, such as underground mining, surface mining, exploration, or processing plants.
					</p>
					<p>
					<Button onClick={handleOpen} className='text-but'>Mine Managers:</Button> 
					Responsible for the day-to-day operations of a specific mine or mining site.
					</p>
					<p>
					<Button onClick={handleOpen} className='text-but'>Department Heads:</Button> 
					Manage specific departments within the company, such as geology, engineering, health and safety, environmental compliance, human resources, or finance.
					</p>
					
					

		</Unstable_Grid2>
		<Unstable_Grid2 md={6} sm={6} xs={12} columnSpacing={2} spacing={2} className='accord'>
		<h3>Employee Benefits</h3>
		<div class="bot-mar">
				Employee benefits are non-wage compensations provided to employees in addition to their regular salary or wages. These benefits are offered by employers as a way to attract and retain talent, enhance job satisfaction, and promote overall employee well-being. Common employee benefits include:
				</div>


      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          //expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
		  Health insurance:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
		  Employers may offer health insurance coverage to help employees pay for medical expenses, including doctor visits, hospital stays, prescription medications, and preventive care.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          //expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>Retirement plans: </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
		  These include employer-sponsored retirement savings plans such as 401(k) or pension plans, where employers contribute funds to help employees save for retirement.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          //expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
		  Paid time off (PTO):
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
		  This includes vacation days, sick leave, and holidays during which employees are paid while not working.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          //expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }} className='acc-head'> Flexible work arrangements:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
		  Employers may offer options such as telecommuting, flexible scheduling, or part-time work to accommodate employees' personal needs and preferences.
          </Typography>
        </AccordionDetails>
      </Accordion>

	  <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          //expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }} className='acc-head'> Life insurance:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
		  Some employers provide life insurance coverage to employees, offering financial protection to their families in the event of the employee's death.
          </Typography>
        </AccordionDetails>
      </Accordion>

	  <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          //expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }} className='acc-head'> Disability insurance:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
		  This benefit provides income replacement for employees who are unable to work due to a disability or illness.
          </Typography>
        </AccordionDetails>
      </Accordion>

	  <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          //expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }} className='acc-head'> Dental and vision insurance:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
		  Coverage for dental care and vision-related expenses, such as eye exams, glasses, and contact lenses.
          </Typography>
        </AccordionDetails>
      </Accordion>

	 

		</Unstable_Grid2>
</Unstable_Grid2>
</div>

<div style={{ margin: "0%" }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
		  <Unstable_Grid2 container spacing={2} rowSpacing={4} columnSpacing={4} className="bot-mar pophead">Position: Chief Executive Officer (CEO):</Unstable_Grid2>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
		  	<div fullWidth  class="row margin-none career-content">
					

						<p class="bot-mar emp-content">


						<p>	<strong>Overview:</strong> 		
The CEO (Chief Executive Officer) is the highest-ranking executive in a company, responsible for making major corporate decisions, managing the overall operations and resources of the company, and acting as the main point of communication between the board of directors and corporate operations. </p>


<strong>Here's a more detailed job description for a CEO:</strong>
<p>
<strong>Setting Strategy and Vision:</strong> The CEO is responsible for developing and communicating the company's vision, mission, and overall direction. They set strategic goals and objectives in alignment with the company's mission and ensure that all employees understand and work towards achieving these goals.</p>
<p>
<strong>Leadership and Management:</strong> The CEO provides leadership to the executive team and other employees, motivating them to perform at their best and achieve company objectives. They establish a positive organizational culture that fosters innovation, collaboration, and high performance.</p>
<p>
<strong>Financial Management:</strong> The CEO oversees the financial health of the company, including budgeting, financial planning, and ensuring profitability and sustainability. They work closely with the CFO (Chief Financial Officer) to develop financial strategies and monitor financial performance.</p>
<p>
<strong>Stakeholder Relations:</strong> The CEO represents the company to stakeholders including investors, customers, employees, and the public. They build and maintain relationships with key stakeholders, ensuring transparency, trust, and alignment of interests.</p>
<p>
<strong>Board Relations:</strong> The CEO works closely with the board of directors, providing regular updates on company performance, seeking guidance and approval for major decisions, and implementing board directives.</p>
<p>
<strong>Risk Management:</strong> The CEO identifies and mitigates risks that could affect the company's reputation, financial stability, or operations. They develop strategies to address potential challenges and ensure business continuity.</p>
<p>
<strong>Strategic Partnerships and M&A:</strong> The CEO identifies opportunities for strategic partnerships, alliances, and acquisitions that align with the company's growth objectives. They negotiate and oversee partnerships and M&A deals to maximize value for the company.</p>
<p>
<strong>Talent Management:</strong> The CEO is responsible for attracting, retaining, and developing top talent within the organization. They create a culture of continuous learning and development, provide opportunities for career growth, and ensure diversity and inclusion in the workforce.</p>
<p>
<strong>Compliance and Ethics:</strong> The CEO ensures that the company operates in compliance with relevant laws, regulations, and industry standards. They promote ethical behavior and integrity throughout the organization, setting an example for employees at all levels.</p>
<p>
<strong>Public Relations and Brand Management:</strong> The CEO plays a key role in shaping the company's public image and managing its brand reputation. They engage with the media, participate in public events, and communicate the company's values and initiatives to the public.</p>
<p>
Overall, the CEO is responsible for driving the company's success and ensuring its long-term growth and sustainability through effective leadership, strategic planning, and sound decision-making.</p>

						</p>
		<Button  variant="contained">Apply</Button>
				</div>
          </Typography>
        </Box>
      </Modal>
</div> 
  

{/*  Career Page content Closed */}

{/*  Apply Page content */}

<div class="banner">
		<div class="header bgwhite">
		<div class="menu-icon"></div>
		<a href="#" class="logo-2"><img src="images/logo-2.png" /></a>
		<div class="menu">
			
		<menu>
			
			<MenuItem>Home</MenuItem>
			<MenuItem >About</MenuItem>
			<MenuItem>Our Products</MenuItem>
			<MenuItem>Machinery</MenuItem>
			<MenuItem>Productivity</MenuItem>
			<MenuItem>Gallery</MenuItem>
			<MenuItem>Contact Us</MenuItem>
			<MenuItem>Request a Quote</MenuItem>
			<MenuItem>Careers</MenuItem>
			</menu>
    </div>
	
	
</div>
   
	<div class="careers-banner">
		<a href="enquiry.html" class="request-button">Request a Quote</a>
		<img src="images/careers-banner.jpg" />
		<div class="title-blk-bar">
			<div class="container">
				<h1>Open <span>Positions<br /><span>Employment</span></span></h1>
				<div class="tagline">Mining Minds, Shaping Futures: Innovating for Tomorrow's Challenges.</div>
			</div>
		</div>
	</div>
	
</div>


<div class="container bot-mar">
<div class="about-text"><strong>Apply for the Position: COO</strong>
<div>Please fill the following details</div></div>
	<Unstable_Grid2 container spacing={2} rowSpacing={-4} columnSpacing={4} className="bot-mar">
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Name" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Email" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Phone Number" variant="outlined" /></FormControl>
		</Unstable_Grid2>
	</Unstable_Grid2>

	<Unstable_Grid2 container spacing={2} rowSpacing={-4} columnSpacing={4} className="bot-mar">
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Current Job" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Current Company" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Years of Experience" variant="outlined" /></FormControl>
		</Unstable_Grid2>
	</Unstable_Grid2>

	<Unstable_Grid2 container spacing={2} rowSpacing={-4} columnSpacing={4} className="bot-mar">
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label" className='select-label'>Highest level of Education Completed</InputLabel>
				<Select>
				<MenuItem value={10}>Graduation</MenuItem>
				<MenuItem value={20}>Post Graduation</MenuItem>
				</Select>
			</FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Field of Study" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Certifications" variant="outlined" /></FormControl>
		</Unstable_Grid2>
	</Unstable_Grid2>


	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
		<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} className="min-mar">
			<FormControl fullWidth><TextareaAutosize id="outlined-basic3" label="Describe your experience in leading operational teams and driving business growth" minRows={5.4} placeholder="Additional Details/Requirement" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} className="min-mar">
			<FormControl fullWidth><TextareaAutosize id="outlined-basic3" label="Please outline any specific achievements or projects that demonstrate your ability to optimize operations and improve efficiency" minRows={5.4} placeholder="Additional Details/Requirement" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} className="min-mar">
			<FormControl fullWidth><TextareaAutosize id="outlined-basic3" label="Describe your approach to strategic planning and execution" minRows={5.4} placeholder="Additional Details/Requirement" /></FormControl>
		</Unstable_Grid2>
	</Unstable_Grid2>

	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label" className='select-label'>Salary Expectation</InputLabel>
				<Select>
				<MenuItem value={10}>10L - 15L</MenuItem>
				<MenuItem value={20}>15L - 30L </MenuItem>
				</Select>
			</FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label" className='select-label'>Availability to Start</InputLabel>
				<Select>
				<MenuItem value={10}>Immediately</MenuItem>
				<MenuItem value={20}>1 Month Later </MenuItem>
				</Select>
			</FormControl>
		</Unstable_Grid2>
	</Unstable_Grid2>

<div class="contact-buttons">

    <Stack spacing={2} direction="row">
      <Button variant="contained">Submit</Button>
      <Button variant="outlined">Cancel</Button>
    </Stack>
</div>

</div>



{/*  Apply Page content Closed */}



{/*  Gallery Page content */}

<div class="banner">
		<div class="header bgwhite">
		<div class="menu-icon"></div>
		<a href="#" class="logo-2"><img src="images/logo-2.png" /></a>
		<div class="menu">	
			<menu>
				<MenuItem>Home</MenuItem>
				<MenuItem >About</MenuItem>
				<MenuItem>Our Products</MenuItem>
				<MenuItem>Machinery</MenuItem>
				<MenuItem>Productivity</MenuItem>
				<MenuItem>Gallery</MenuItem>
				<MenuItem>Contact Us</MenuItem>
				<MenuItem>Request a Quote</MenuItem>
				<MenuItem>Careers</MenuItem>
			</menu>
    	</div>
	
		</div>

   
	<div class="gallery-banner">
		<a href="enquiry.html" class="request-button">Request a Quote</a>
		<img src="images/gallery-banner.jpg" />
		<div class="title-blk-bar">
			<div class="container">
				<h1>Production <span>Portfolio<br /><span>Image Gallery</span></span></h1>
				<div class="tagline">Beyond Borders: Bridging Nations through Resource Extraction.</div>
			</div>
		</div>
	</div>
	</div>


	<div class="container mar-bot">
	<Grid md={12} class="carousel-2">
	<div><h1>Locations</h1></div>
	</Grid>

	<Grid md={12} class="carousel-2">
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

<div class="container mar-bot">
	<Grid md={12} class="carousel-2 ">
	<div><h1>Products</h1></div>
	</Grid>

	<Grid md={12} class="carousel-2">
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

<div class="container mar-bot">
	<Grid md={12} class="carousel-2 ">
	<div><h1>Operations</h1></div>
	</Grid>

	<Grid md={12} class="carousel-2">
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

{/*  Gallery Page content Closed */}




{/*  Productivity Page content */}
<div class="banner">
		<div class="header bgwhite">
		<div class="menu-icon"></div>
		<a href="#" class="logo-2"><img src="images/logo-2.png" /></a>
		<div class="menu">
			
		<menu>
				<MenuItem>Home</MenuItem>
				<MenuItem >About</MenuItem>
				<MenuItem>Our Products</MenuItem>
				<MenuItem>Machinery</MenuItem>
				<MenuItem>Productivity</MenuItem>
				<MenuItem>Gallery</MenuItem>
				<MenuItem>Contact Us</MenuItem>
				<MenuItem>Request a Quote</MenuItem>
				<MenuItem>Careers</MenuItem>
			</menu>
    </div>
	
	
</div>
   
	<div class="productivity-banner">
		<a href="enquiry.html" class="request-button">Request a Quote</a>
		<img src="images/productivity-banner.jpg" />
		<div class="title-blk-bar">
			<div class="container">
				<h1>Productivity <span>Success<br /><span>Our performance</span></span></h1>
				<div class="tagline">Where the earth yields its hidden riches.</div>
			</div>
		</div>
	</div>
	
</div>

<div class="container bot-mar">

	Tabs required here....

 
<Tabs>
    <TabList>
      <Tab>Today</Tab>
      <Tab>This Week 2</Tab>
	  <Tab>This Month</Tab>
	  <Tab>This Year</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
	<TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
	<TabPanel>
      <h2>Any content 4</h2>
    </TabPanel>
  </Tabs>
  


</div>


{/*  Productivity Page content Closed */}




      </div>
      
      }
    </div>
  );
}