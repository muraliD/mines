"use client"
import React,{useEffect, useState} from 'react';
import $ from 'jquery';
import Image from 'next/image';

import location1 from '../../../../public/images/dummy.jpg';
import location2 from '../../../../public/images/dummy.jpg';
import location3 from '../../../../public/images/dummy.jpg';
import location4 from '../../../../public/images/dummy.jpg';
import hpartner1 from '../../../../public/images/h-partner.png';
import hpartner2 from '../../../../public/images/h-partner.png';
import hpartner3 from '../../../../public/images/h-partner.png';
import hpartner4 from '../../../../public/images/h-partner.png';
import hpartner5 from '../../../../public/images/h-partner.png';
import hpartner6 from '../../../../public/images/h-partner.png';
import hpartner7 from '../../../../public/images/h-partner.png';


import { useRouter } from 'next/navigation'


import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import { CardActions, CardMedia, Grid, ListItem, Menu, MenuItem, TextareaAutosize, Unstable_Grid2 } from '@mui/material';

//import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


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





  

  
export default function HomePage() {
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
      <div className="home-banner">
	  
        <div className="header">
          <div className="menu-icon"></div>
          <a href="#" className="logo"></a>
          <div className="menu">
            <menu>
			
            <MenuItem onClick={()=>{
                router.push('/pages/home')
              }} className='active'>Home</MenuItem>
              <MenuItem onClick={()=>{
                router.push('/pages/about')
              }} >About</MenuItem>
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
                router.push('/pages/careers')
              }}>Careers</MenuItem>
			  </menu>

          
          </div>
      </div>
	 {/* <div className="banner-img"><img src="images/slider-1.jpg" />
	  </div>*/}
	  <div className="static-banner-pic">
		<div className="caption">Welcome to</div>
		<h2>Manasa Sharon <br /> <span>Mines & Minerals</span></h2>
		
		Unearthing the treasures of the Earth, cultivating a sustainable future.
		
		<div >
		<a onClick={()=>{
                router.push('/pages/quote')
              }} className='enquire-button'> Request a Quote</a>

		
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
        <div className="container">
        <div className="home-about">
          <h1>Our <span>Exploration<br /><span>Who we are</span></span></h1>
          <p>
          Driven by a passion for discovery and a commitment to responsible resource development, our
exploration activities at Manasa Sharon Mines and Minerals Pvt Ltd are at the forefront of
technological innovation. Our experienced teams of geologists, engineers, and environmental
experts employ cutting-edge techniques to identify and assess potential mining sites. We prioritize
the thorough evaluation of geological data to ensure the viability and sustainability of our
operations.
          </p>
		  <p>

		  Community engagement is a cornerstone of our exploration efforts. We understand the importance
of involving local stakeholders from the outset, seeking to build collaborative relationships based
on open communication and shared benefits. Our exploration endeavors not only aim to uncover
valuable mineral resources but also to contribute to the economic and social development of the
communities where we operate.
		  </p>
		  <p>

		  At Manasa Sharon Mines and Minerals Pvt Ltd, our explorations are more than a search for
minerals; they represent our commitment to shaping a future where responsible mining practices
and environmental stewardship coexist seamlessly, ensuring a sustainable legacy for
generations to come.
		  </p>
        </div>
        </div>


	

     <Grid container spacing={2} rowSpacing={2} columnSpacing={4}  className="home-products-block">
	 <div className="container cener-text"><h1>Our<span>Products<br /><span>Mines and Minerals</span></span></h1></div>
	 <Grid md={12} sm={12} xs={12} columnSpacing={2} >
		
		<Grid md={6} sm={6} xs={6} columnSpacing={2} spacing={2} className="home-products-img">
			<div className="home-prod-img"></div>
		</Grid>
		<Grid md={6} className="home-products">
		<Grid container spacing={2} rowSpacing={2} columnSpacing={2}>
			<Grid md={6} sm={6} xs={12} columnSpacing={2}>
				<div className="home-products-item h-prod-borders">
					<div className="h-product-img"><img src="../images/h-prod-1.jpg" /></div>
					<div className="h-product-title">WHITE QUARTZ</div>
					<div className="h-product-content">
					In the realm of geology, White Quartz stands as a timeless testament to the beauty and diversity of
minerals our planet offers. Revered for its pristine appearance and unique properties...
					</div>
				</div>
			</Grid>
			<Grid md={6} sm={6} xs={12} columnSpacing={2}>
				<div className="home-products-item h-prod-borders">
					<div className="h-product-img"><img src="../images/h-prod-9.jpg" /></div>
					<div className="h-product-title">MICA QUARTZ</div>
					<div className="h-product-content">
					Our geological journey unfolds to reveal Mica Quartz, a captivating mineral where the elegance of
quartz seamlessly intertwines with the intriguing allure of mica. This enchanting fusion creates a....
					</div>
				</div>
			</Grid>
			<Grid md={6} sm={6} xs={12} columnSpacing={2}>
				<div className="home-products-item h-prod-borders">
					<div className="h-product-img"><img src="../images/h-prod-10.jpg" /></div>
					<div className="h-product-title">PINK QUARTZ</div>
					<div className="h-product-content">
					Our exploration of the captivating world of quartz delves into the depths of Pink Quartz, a mineral
that graces the Earth with its delicate and rosy hues. As we unveil its unique characteristics and.....
					</div>
				</div>
			</Grid>
			<Grid md={6} sm={12} xs={12}>
				<div className="home-products-item h-prod-borders">
					<div className="h-product-img"><img src="../images/h-prod-3.jpg" /></div>
					<div className="h-product-title">Rose QUARTZ</div>
					<div className="h-product-content">
						Quartz rose, also known as rose quartz, is a popular variety of quartz crystal that is prized for its delicate pink to rose-red coloration. It's commonly used in various spiritual, healing, and decorative practices.....
					</div>
				</div>
			</Grid>
			<Grid md={6} sm={12} xs={12}>
				<div className="home-products-item h-prod-borders">
					<div className="h-product-img"><img src="../images/h-prod-11.jpg" /></div>
					<div className="h-product-title">Glassy QUARTZ</div>
					<div className="h-product-content">
					In our continued exploration of the captivating quartz family, we now set our sights on the dazzling
beauty of Glassy Quartz. Characterized by its exceptional transparency and crystalline clarity, this....
					</div>
				</div>
			</Grid>
			<Grid md={6} sm={12} xs={12}>
				<div className="home-products-item h-prod-borders">
					<div className="h-product-img"><img src="../images/h-prod-12.jpg" /></div>
					<div className="h-product-title">Semi Glassy QUARTZ</div>
					<div className="h-product-content">
					Our captivating exploration of the quartz family reaches another intriguing chapter with the
mesmerizing allure of Semi-Glassy Quartz. This exquisite mineral, characterized by a harmonious
blend of crystalline transparency...
					</div>
				</div>
			</Grid>
			
			
		</Grid>


		</Grid>
	</Grid>
	</Grid>

<div className="bot-mar">
<Grid md={6} className="text-center">
		<h1>Our <span>Projects<br /><span>Locations</span></span></h1>
	</Grid>
	<Grid md={6} className="carousel-2">
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
					<div className="h-location-title">LOCATION 1 TITLE GOES HERE <span>Nam at mattis libero, et laoreet leo. </span></div>
					<div className="h-location-arr"></div>
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
					<div className="h-location-title">LOCATION 2 TITLE GOES HERE <span>Nam at mattis libero, et laoreet leo. </span></div>
					<div className="h-location-arr"></div>
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
					<div className="h-location-title">LOCATION 3 TITLE GOES HERE <span>Nam at mattis libero, et laoreet leo. </span></div>
					<div className="h-location-arr"></div>
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
					<div className="h-location-title">LOCATION 4 TITLE GOES HERE <span>Nam at mattis libero, et laoreet leo. </span></div>
					<div className="h-location-arr"></div>
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
					<div className="h-location-title">LOCATION 1 TITLE GOES HERE <span>Nam at mattis libero, et laoreet leo. </span></div>
					<div className="h-location-arr"></div>
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
					<div className="h-location-title">LOCATION 2 TITLE GOES HERE <span>Nam at mattis libero, et laoreet leo. </span></div>
					<div className="h-location-arr"></div>
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
					<div className="h-location-title">LOCATION 3 TITLE GOES HERE <span>Nam at mattis libero, et laoreet leo. </span></div>
					<div className="h-location-arr"></div>
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
					<div className="h-location-title">LOCATION 4 TITLE GOES HERE <span>Nam at mattis libero, et laoreet leo. </span></div>
					<div className="h-location-arr"></div>
				</div>
              </div>
            </OwlCarousel>

	</Grid>
</div>

<div className="row margin-none">
<Grid md={12} className="text-center">
		<h1>Our <span>Partners<br /><span>Making Business With us</span></span></h1>
	</Grid>
	<Grid md={12} className="carousel-3">

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


      </div>
      
      }
    </div>
  );
}