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





  

  
export default function CareerPage() {
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
      


{/*  Career Page content */}

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
              }}>Gallery</MenuItem>
			  <MenuItem onClick={()=>{
                router.push('/pages/contact')
              }}>Contact Us</MenuItem>
			  {/*<MenuItem onClick={()=>{
                router.push('/pages/quote')
              }}>Request a Quote</MenuItem>*/}
			  <MenuItem onClick={()=>{
                router.push('/pages/careers')
              }} className='active'>Careers</MenuItem>
			</menu>
    </div>
	
	
</div>
   
	<div className="careers-banner">
	<a onClick={()=>{
                router.push('/pages/quote')
              }} className="request-button">Request a Quote</a>
		<img src="../images/careers-banner.jpg" />
		<div className="title-blk-bar">
			<div className="container">
				<h1>Open <span>Positions<br /><span>Employment</span></span></h1>
				<div className="tagline">Join us in shaping a future where every career is a contribution to sustainable mining</div>
			</div>
		</div>
	</div>
	
</div>

<div className="container bot-mar emp">
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
		<div className="bot-mar">
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
		  	<div  className="row margin-none career-content">
					

						<p className="bot-mar emp-content">


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
		<Button onClick={()=>{
                router.push('/pages/quote')
              }} variant="contained">Apply</Button>
				</div>
          </Typography>
        </Box>
      </Modal>
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