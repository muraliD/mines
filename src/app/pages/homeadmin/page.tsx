"use client"
import React,{useEffect, useState} from 'react';

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

import FormControl from '@mui/material/FormControl';

import Select, { SelectChangeEvent } from '@mui/material/Select';

import Stack from '@mui/material/Stack';

//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

//import { Tabs } from "@tarragon/swipeable-tabs";




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




  
  

  

  
export default function HomeAdminpage() {
	    
	const changeTab =  (selectedTab:any)=>{
	  };
    const router = useRouter()
    const [windows,setwindows] = useState<any>(null);
	const [open, setOpen] = React.useState(false);
 

	  const [expanded, setExpanded] = React.useState<string | false>(false);

	
		

		

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
      
        






























{/*  Admin home page */}
<div className="banner admin">
	<div className="header bgwhite">
		<div className="menu-icon"></div>
		<a href="#" className="logo-2"><img src="images/logo-2.png" /></a>
		<div className="menu">
			<menu>
			<MenuItem onClick={()=>{
                router.push('/pages/homeadmin')
              }} className='active'>Home</MenuItem>
              <MenuItem onClick={()=>{
                router.push('/pages/aboutadmin')
              }}>About</MenuItem>
              <MenuItem onClick={()=>{
                router.push('/pages/productsadmin')
              }}>Our Products</MenuItem>
			  <MenuItem onClick={()=>{
                router.push('/pages/equipmentadmin')
              }} >Equipment</MenuItem>
			 
			  <MenuItem onClick={()=>{
                router.push('/pages/productivityadmin')
              }} >Productivity</MenuItem>
			  <MenuItem onClick={()=>{
                router.push('/pages/galleryadmin')
              }}>Gallery</MenuItem>
			
			 {/*} <MenuItem onClick={()=>{
                router.push('/pages/quote')
              }}>Request a Quote</MenuItem>*/}
			 
			</menu>
    	</div>
	</div>
	<div className="page-title"><div className="container"><h3>Home Page</h3></div></div>
</div>

<div className="container bot-mar admin">
	<div className="admin-title" bot-mar><h3>Sliding Banner</h3></div>
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar box">
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2} >
			
				<FormControl fullWidth>
					<label>Upload Banner images</label>
					<TextField type="file"  />
				</FormControl>
			
			<label>&nbsp;</label>
			<FormControl fullWidth >
				<TextField type="file" />
			</FormControl>
			<Button className="button-plus" >+</Button>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2} className="min-mar">
			<Unstable_Grid2 md={6} sm={6} xs={12} columnSpacing={2} spacing={2}>
				<label>&nbsp;</label>
				<FormControl fullWidth><TextField id="outlined-basic" label="Enter Banner text-1" variant="outlined" /></FormControl>
			</Unstable_Grid2>
			<Unstable_Grid2 md={6} sm={6} xs={12} columnSpacing={2} spacing={2}>
				<label>&nbsp;</label>
				<FormControl fullWidth><TextField id="outlined-basic" label="Enter Banner text-2" variant="outlined" /></FormControl>
			</Unstable_Grid2>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2} className="min-mar">
			<Unstable_Grid2 md={6} sm={6} xs={12} columnSpacing={2} spacing={2}>
				<label>&nbsp;</label>
				<FormControl fullWidth><TextField id="outlined-basic" label="Enter Banner text-3" variant="outlined" /></FormControl>
			</Unstable_Grid2>
			<Unstable_Grid2 md={6} sm={6} xs={12} columnSpacing={2} spacing={2}>
				<label>&nbsp;</label>
				<FormControl fullWidth><TextField id="outlined-basic" label="Enter Banner text-4" variant="outlined" /></FormControl>
			</Unstable_Grid2>
		</Unstable_Grid2>
		<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} >
			<Stack spacing={2} direction="row" className='text-right'>
				<Button variant="outlined">Cancel</Button>
				<Button variant="contained">Save</Button>
			</Stack>
		</Unstable_Grid2>
	</Unstable_Grid2>
	

	<div className="admin-title" bot-mar><h3>Title -1 and text content</h3></div>
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className='bot-mar box'>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Home title-1" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Home title-2" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Home title-3" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} className="min-mar">
			<FormControl fullWidth><TextareaAutosize id="outlined-basic3"  minRows={5.4} placeholder="Home - Who we are content" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} >
			<Stack spacing={2} direction="row" className='text-right'>
				<Button variant="outlined">Cancel</Button>
				<Button variant="contained">Save</Button>
			</Stack>
		</Unstable_Grid2>
	</Unstable_Grid2>
	

	<div className="admin-title" bot-mar><h3>Title -2</h3></div>
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar box">
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Home title-2-1" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Home title-2-2" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Home title-2-3" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} >
			<Stack spacing={2} direction="row" className='text-right'>
				<Button variant="outlined">Cancel</Button>
				<Button variant="contained">Save</Button>
			</Stack>
		</Unstable_Grid2>
	</Unstable_Grid2>
	
	<div className="admin-title" bot-mar><h3>Banner and products Content</h3></div>
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar box">
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
		<FormControl fullWidth ><label>Home Products Banner Image</label><TextField type="file"  />	</FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}>
			{/* loop starts here */}
			<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
				<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
					<FormControl fullWidth><label>Home Products Image-1</label><TextField type="file"  />	</FormControl>
				</Unstable_Grid2>
				<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
					<FormControl fullWidth><TextField id="outlined-basic" label="Home Products Image-1-title" variant="outlined" /></FormControl>
				</Unstable_Grid2>
				<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
					<FormControl fullWidth><TextareaAutosize id="outlined-basic3"  minRows={5.4} placeholder="Home products image-1 content" /></FormControl>
				</Unstable_Grid2>
			</Unstable_Grid2>
			{/* loop close here */}

			<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
				<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}  className="bot-mar">
					<FormControl fullWidth><label>Home Products Image-2</label><TextField type="file"  />	</FormControl>
				</Unstable_Grid2>
				<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}  className="bot-mar">
					<FormControl fullWidth><TextField id="outlined-basic" label="Home Products Image-2-title" variant="outlined" /></FormControl>
				</Unstable_Grid2>
				<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
					<FormControl fullWidth><TextareaAutosize id="outlined-basic3"  minRows={5.4} placeholder="Home products image-2 content" /></FormControl>
				</Unstable_Grid2>
			</Unstable_Grid2>

			<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
				<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}  className="bot-mar">
					<FormControl fullWidth><label>Home Products Image-3</label><TextField type="file"  />	</FormControl>
				</Unstable_Grid2>
				<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}  className="bot-mar">
					<FormControl fullWidth><TextField id="outlined-basic" label="Home Products Image-3-title" variant="outlined" /></FormControl>
				</Unstable_Grid2>
				<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
					<FormControl fullWidth><TextareaAutosize id="outlined-basic3"  minRows={5.4} placeholder="Home products image-3 content" /></FormControl>
				</Unstable_Grid2>
			</Unstable_Grid2>
			
			<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
				<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
					<FormControl fullWidth><label>Home Products Image-4</label><TextField type="file"  />	</FormControl>
				</Unstable_Grid2>
				<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
					<FormControl fullWidth><TextField id="outlined-basic" label="Home Products Image-4-title" variant="outlined" /></FormControl>
				</Unstable_Grid2>
				<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
					<FormControl fullWidth><TextareaAutosize id="outlined-basic3"  minRows={5.4} placeholder="Home products image-4 content" /></FormControl>
				</Unstable_Grid2>
			</Unstable_Grid2>

			<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
				<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}  className="bot-mar">
					<FormControl fullWidth><label>Home Products Image-5</label><TextField type="file"  />	</FormControl>
				</Unstable_Grid2>
				<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}  className="bot-mar">
					<FormControl fullWidth><TextField id="outlined-basic" label="Home Products Image-5-title" variant="outlined" /></FormControl>
				</Unstable_Grid2>
				<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
					<FormControl fullWidth><TextareaAutosize id="outlined-basic3"  minRows={5.4} placeholder="Home products image-5 content" /></FormControl>
				</Unstable_Grid2>
			</Unstable_Grid2>

			<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
				<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}  className="bot-mar">
					<FormControl fullWidth><label>Home Products Image-6</label><TextField type="file"  />	</FormControl>
				</Unstable_Grid2>
				<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}  className="bot-mar">
					<FormControl fullWidth><TextField id="outlined-basic" label="Home Products Image-6-title" variant="outlined" /></FormControl>
				</Unstable_Grid2>
				<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
					<FormControl fullWidth><TextareaAutosize id="outlined-basic3"  minRows={5.4} placeholder="Home products image-6 content" /></FormControl>
				</Unstable_Grid2>
			</Unstable_Grid2>

			<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} >
			<Stack spacing={2} direction="row" className='text-right'>
				<Button variant="outlined">Cancel</Button>
				<Button variant="contained">Save</Button>
			</Stack>
			</Unstable_Grid2>
		</Unstable_Grid2>
		
	</Unstable_Grid2>

	<div className="admin-title" bot-mar><h3>Title -3</h3></div>
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar box">
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Home title-3-1" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Home title-3-2" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Home title-3-3" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} >
			<Stack spacing={2} direction="row" className='text-right'>
				<Button variant="outlined">Cancel</Button>
				<Button variant="contained">Save</Button>
			</Stack>
		</Unstable_Grid2>
	</Unstable_Grid2>


	<div className="admin-title" bot-mar><h3>Locations</h3></div>
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar box">

		{/* loop starts here */}
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2} >
			<div className="min-mar">
				<FormControl fullWidth >
					<label>Home Location image -1</label>
					<TextField type="file"  />
				</FormControl>
			</div>	
			</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2} className="min-mar">
			<label>&nbsp;</label>
			<FormControl fullWidth><TextField id="outlined-basic" label="Home Location image title-1" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2} className="min-mar">
			<label>&nbsp;</label>
			<FormControl fullWidth><TextField id="outlined-basic" label="Home Location image title-2" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		{/* loop close here */}

		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2} >
			<div className="min-mar">
				<FormControl fullWidth >
					<label>Home Location image -1</label>
					<TextField type="file"  />
				</FormControl>
			</div>	
			</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2} className="min-mar">
			<label>&nbsp;</label>
			<FormControl fullWidth><TextField id="outlined-basic" label="Home Location image title-1" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2} className="min-mar">
			<label>&nbsp;</label>
			<FormControl fullWidth><TextField id="outlined-basic" label="Home Location image title-2" variant="outlined" /></FormControl>
		</Unstable_Grid2>


		

		<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} >
			<Button className="button-plus" >+</Button>
		</Unstable_Grid2>
		
		
		<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} >
			
			<Stack spacing={2} direction="row" className='text-right'>
				<Button variant="outlined">Cancel</Button>
				<Button variant="contained">Save</Button>
			</Stack>
			
		</Unstable_Grid2>
	</Unstable_Grid2>

	<div className="admin-title" bot-mar><h3>Title -4</h3></div>
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar box">
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Home title-4-1" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Home title-4-2" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth><TextField id="outlined-basic" label="Home title-4-3" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} >
			<Stack spacing={2} direction="row" className='text-right'>
				<Button variant="outlined">Cancel</Button>
				<Button variant="contained">Save</Button>
			</Stack>
		</Unstable_Grid2>
	</Unstable_Grid2>

	<div className="admin-title" bot-mar><h3>Partner Images</h3></div>
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar box">
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2} >
			
				<FormControl fullWidth>
					<label>Upload Partner images</label>
					<TextField type="file"  />
				</FormControl>
			
			<label>&nbsp;</label>
			<FormControl fullWidth >
				<TextField type="file" />
			</FormControl>
			<Button className="button-plus" >+</Button>
		</Unstable_Grid2>
		<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} >
			<Stack spacing={2} direction="row" className='text-right'>
				<Button variant="outlined">Cancel</Button>
				<Button variant="contained">Save</Button>
			</Stack>
		</Unstable_Grid2>
	</Unstable_Grid2>





</div>

{/*  Admin home page Closed */}
















      </div>
      
      }
    </div>
  );
}
