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





  

  
export default function MachineryPage() {
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




{/*  Equipment page content started */}

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
              }} className='active'>Machinery</MenuItem>
			  <MenuItem onClick={()=>{
                router.push('/pages/productivity')
              }}>Productivity</MenuItem>
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
		<div className="equip-banner">
		<a onClick={()=>{
                router.push('/pages/quote')
              }} className="request-button">Request a Quote</a>
		<img src="../images/equip-banner.jpg" />
		<div className="title-blk-bar">
			<div className="container">
				<h1>Our <span>Equipment<br /><span>Machinery we use</span></span></h1>
				<div className="tagline">Empowering mining excellence with cutting-edge technology and robust equipment.</div>
			</div>
		</div>
	</div>
</div>

<div className="container bot-mar">
		<div className="about-text">
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
        <Typography gutterBottom  className='equiphead' component="div">
          Excavators: 
        </Typography>
        <Typography variant="body2" color="text.secondary" className="equip-content">
        Meet the workhorses and the backbone of our mining operations - Excavators and Bulldozers.
These giants not only clear the path to quartz riches but also ensure a safe and accessible mining
environment. They play a pivotal role in site preparation and overburden removal. Excavators are
used to dig and remove large quantities of earth, exposing the quartz deposits beneath. 
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
        <Typography gutterBottom  className='equiphead' component="div">
		Dump Trucks: 
        </Typography>
        <Typography variant="body2" color="text.secondary" className="equip-content">
        Loaders and haul trucks are indispensable in the transportation of extracted quartz from the
mining face to the processing plant. Loaders efficiently scoop up the fragmented quartz and load it
onto haul trucks for transportation. The choice of loaders and haul trucks depends on factors such
as the scale of the operation, distance to the processing plant, and terrain conditions. Robust and
reliable models from manufacturers like Volvo, Caterpillar, and Liebherr are favored for their
capacity and durability, ensuring the seamless flow of raw material from the extraction point to the
processing facility. Well-maintained fleets of loaders and haul trucks contribute significantly to the
overall efficiency of the quartz mining operation.

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
        <Typography gutterBottom  className='equiphead' component="div">
		Bulldozers: 
        </Typography>
        <Typography variant="body2" color="text.secondary" className="equip-content">
        Bulldozers are then employed to level the terrain, create access roads, and push aside unwanted materials.
The efficiency of these machines is crucial in optimizing the mining process, as their robust
capabilities streamline the initial phases of quartz extraction. Our carefully selected models
guarantee optimal performance, turning the earth in your favour. 
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
        <Typography gutterBottom className='equiphead' component="div">
		Drills: 
        </Typography>
        <Typography variant="body2" color="text.secondary" className="equip-content">
        Drilling equipment is essential for the precise and strategic extraction of quartz from the earth.
Whether utilizing rotary or percussion drilling methods, the goal is to create well-placed blast holes
for controlled fragmentation of the quartz deposits. The choice of drilling equipment is influenced
by the geological characteristics of the deposit, including hardness and depth. Modern drilling
technologies, such as those offered by our state-of-the-art drilling equipment ensure accurate
blast hole placement, paving the way for controlled and efficient fragmentation of quartz deposits.
        </Typography>
      </CardContent>
      </Card>
	</Unstable_Grid2>


<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
	<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/equip-5.png"
        title="Dump Trucks"
      />
      <CardContent>
        <Typography gutterBottom  className='equiphead' component="div">
        Blasting Equipment: 
        </Typography>
        <Typography variant="body2" color="text.secondary" className="equip-content">
        Blasting equipment is a critical component in the process of liberating quartz from the surrounding
rock. Controlled explosions break the quartz-bearing rock into manageable pieces, facilitating
easier extraction. Detonators, explosives, and blasting mats are employed to ensure precision and
safety during the blasting process. The proper sequencing of blasts and consideration of the
geological structure are essential to prevent damage to the valuable quartz crystals. Rigorous
safety measures and compliance with regulatory standards are paramount in handling explosives,
underscoring the need for skilled professionals in the coordination and execution of blasting
operations.

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
        <Typography gutterBottom  className='equiphead' component="div">
        Crushers and Grinders: 
        </Typography>
        <Typography variant="body2" color="text.secondary" className="equip-content">
        Crushers and grinders are pivotal in the initial stages of quartz processing, reducing the extracted
quartz from large rocks into smaller, manageable sizes. Jaw crushers, cone crushers, impact
crushers, and grinding mills play a crucial role in breaking down the quartz into particles suitable
for further processing. The choice of equipment depends on factors such as the required final
product size, capacity, and the hardness of the quartz. The efficiency of these machines directly
impacts the subsequent stages of processing, making the selection of crushers and grinders a
critical decision in the overall success of the quartz mining operation. Regular maintenance and
monitoring of these machines are essential to ensure a continuous and reliable crushing and
grinding process.
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
        <Typography gutterBottom  className='equiphead' component="div">
        Screening Equipment: 
        </Typography>
        <Typography variant="body2" color="text.secondary" className="equip-content">
        Screening equipment is employed to classify crushed quartz into different particle sizes before
further processing. Vibrating screens and trommel screens are commonly used for this purpose,
separating the quartz particles based on size and ensuring uniformity in the material. The efficiency
of the screening process directly influences the quality of the final product and the subsequent
stages of processing. Well-designed and properly maintained screening equipment is crucial to
achieving the desired size distribution of the quartz, meeting market specifications, and optimizing
the downstream processing steps.
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
        <Typography gutterBottom  className='equiphead' component="div">
        Gravity Separation Equipment: 
        </Typography>
        <Typography variant="body2" color="text.secondary" className="equip-content">
        Gravity separation equipment is employed to separate quartz from other minerals based on
differences in density. This method is particularly effective when dealing with coarse particles. Jig
machines, spiral separators, and shaking tables are commonly used for gravity separation in quartz
mining operations. The principles of gravity separation rely on the fact that quartz, being heavier
than many impurities, settles more quickly under the influence of gravity. Careful control of
variables such as water flow and particle size is essential to optimize the efficiency of gravity
separation processes, ensuring a high-purity quartz concentrate is obtained for further processing.
        </Typography>
      </CardContent>
      </Card>
	</Unstable_Grid2>
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
		<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/equip-9.png"
        title="Dump Trucks"
      />
      <CardContent>
        <Typography gutterBottom  className='equiphead' component="div">
        Magnetic Separators: 
        </Typography>
        <Typography variant="body2" color="text.secondary" className="equip-content">
        Magnetic separation is a key process in quartz mining, aiming to remove magnetic minerals and
impurities from the quartz ore. Magnetic drum separators and magnetic pulleys are widely used in
this phase of the operation. By exploiting the magnetic properties of certain minerals, these
separators attract and separate magnetic particles from the quartz. The result is a cleaner quartz
concentrate with reduced impurities. Careful calibration and monitoring of magnetic separators are
crucial to achieving the desired level of purity in the extracted quartz, ensuring it meets the
stringent quality requirements of various industries.

        </Typography>
      </CardContent>
      </Card>
	</Unstable_Grid2>



<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
	<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/equip-10.png"
        title="Dump Trucks"
      />
      <CardContent>
        <Typography gutterBottom  className='equiphead'component="div">
        Flotation Equipment: 
        </Typography>
        <Typography variant="body2" color="text.secondary" className="equip-content">
        Flotation equipment is integral in the separation of quartz particles from impurities in the ore. This
process relies on the differential surface properties of minerals, utilizing air bubbles to selectively
attach to and float the quartz particles, while leaving impurities behind. Flotation cells and froth
flotation equipment are commonly employed in this stage of quartz processing. The effectiveness
of the flotation process is influenced by factors such as the type of reagents used, pH levels, and
the specific characteristics of the quartz ore. Strict control and optimization of these variables are
essential to achieve a high-quality quartz concentrate suitable for further processing
        </Typography>
      </CardContent>
      </Card>
	</Unstable_Grid2>

	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
	<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/equip-11.png"
        title="Dump Trucks"
      />
      <CardContent>
        <Typography gutterBottom  className='equiphead' component="div">
       Dewatering Equipment:
        </Typography>
        <Typography variant="body2" color="text.secondary" className="equip-content">
        Dewatering equipment is employed to remove excess water from the processed quartz, ensuring
the final product meets market specifications. Thickeners and filter presses are commonly used in
this stage of the operation. Proper dewatering is essential for reducing transportation costs, as
water content adds weight and volume to the material. Additionally, dewatering contributes to the
overall efficiency of downstream processing steps by minimizing the need for excessive drying.
Careful monitoring and adjustment of dewatering equipment are critical to maintaining the desired
moisture content in the final quartz product.
        </Typography>
      </CardContent>
      </Card>
	</Unstable_Grid2>
  
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
	<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/equip-12.png"
        title="Dump Trucks"
      />
      <CardContent>
        <Typography gutterBottom  className='equiphead' component="div">
        Quality Control and Sorting: 
        </Typography>
        <Typography variant="body2" color="text.secondary" className="equip-content">
        Quality control and sorting equipment are crucial in ensuring that the final quartz product meets
the required specifications. Optical sorters and color sorters are commonly used to separate
quartz based on characteristics such as size, color, and purity. These technologies enhance the
market value of the quartz by removing impurities and ensuring a consistent quality product.
Regular calibration and maintenance of sorting equipment are essential to achieve accurate and
reliable separation, meeting the stringent standards of various industries that rely on high-quality
quartz for their applications.

        </Typography>
      </CardContent>
      </Card>
	</Unstable_Grid2>
{/*}
	<Unstable_Grid2 md={3} sm={6} xs={12} columnSpacing={2}>
	<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/images/equip-4.png"
        title="Dump Trucks"
      />
      <CardContent>
        <Typography gutterBottom className='equiphead' component="div">
        Environmental Control: 
        </Typography>
        <Typography variant="body2" color="text.secondary" className="equip-content">
        Environmental control equipment is implemented to minimize the impact of quartz mining
operations on the surrounding ecosystem. Dust control systems, sediment control measures, and
water recycling technologies are vital components of responsible mining practices. Dust control
systems mitigate the dispersion of airborne particles, promoting air quality and reducing the
environmental footprint. Sediment control measures prevent soil erosion and water pollution,
safeguarding nearby water bodies. Water recycling technologies contribute to sustainable water
management, reducing the demand on local water sources. Compliance with environmental
regulations and the adoption of best practices in environmental control are integral to the long-term
sustainability and acceptance of quartz mining operations within the community and regulatory
frameworks.
        </Typography>
      </CardContent>
      </Card>
	</Unstable_Grid2>
*/}

</Unstable_Grid2>

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
            


{/*  Equipment Page content Closed */}







      </div>
      
      }
    </div>
  );
}