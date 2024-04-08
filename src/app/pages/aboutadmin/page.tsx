"use client"
import React,{useEffect, useState} from 'react';

import { useRouter } from 'next/navigation'

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {  MenuItem, TextareaAutosize, Unstable_Grid2 } from '@mui/material';

//import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Button from '@mui/material/Button';


import TextField from '@mui/material/TextField';

import FormControl from '@mui/material/FormControl';


import Stack from '@mui/material/Stack';


import 'react-tabs/style/react-tabs.css';

export default function AboutAdminPage() {
	    
	const changeTab =  (selectedTab:any)=>{
	  };
    const router = useRouter()
    const [windows,setwindows] = useState<any>(null);
	const [open, setOpen] = React.useState(false);
  	const handleOpen = () => setOpen(true);
  	const handleClose = () => setOpen(false);
	const [selectedTab, setSelectedTab] = React.useState(0);

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
      
        





































<div className="banner admin">
	<div className="header bgwhite">
		<div className="menu-icon"></div>
		<a href="#" className="logo-2"><img src="images/logo-2.png" /></a>
		<div className="menu">
			<menu>
      <MenuItem onClick={()=>{
                router.push('/pages/homeadmin')
              }} >Home</MenuItem>
              <MenuItem onClick={()=>{
                router.push('/pages/aboutadmin')
              }} className='active'>About</MenuItem>
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
			</menu>
    	</div>
	</div>
	<div className="page-title"><div className="container"><h3>About Page</h3></div></div>
</div>

<div className="container bot-mar admin">
<div className="admin-title" bot-mar><h3>About Banner</h3></div>
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar box">
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2} >
			<FormControl fullWidth>
				<label>Upload Banner images</label>
				<TextField type="file"  />
			</FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2} >
			<label>&nbsp;</label>
			<FormControl fullWidth><TextField id="outlined-basic" label="Enter Caption" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		
		<Unstable_Grid2 container md={12} sm={12} xs={12} className="min-mar">
			<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2} >
					<label>&nbsp;</label>
					<FormControl fullWidth><TextField id="outlined-basic" label="Banner Title-1" variant="outlined" /></FormControl>
			</Unstable_Grid2>
			<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
				<label>&nbsp;</label>
				<FormControl fullWidth><TextField id="outlined-basic" label="Banner Title-2" variant="outlined" /></FormControl>
			</Unstable_Grid2>
			<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
				<label>&nbsp;</label>
				<FormControl fullWidth><TextField id="outlined-basic" label="Banner Title-3" variant="outlined" /></FormControl>
			</Unstable_Grid2>
			<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} >
				<Stack spacing={2} direction="row" className='text-right'>
					<Button variant="outlined">Cancel</Button>
					<Button variant="contained">Save</Button>
				</Stack>
			</Unstable_Grid2>
		</Unstable_Grid2>
	</Unstable_Grid2>

	<div className="admin-title" bot-mar><h3>About content</h3></div>
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className='bot-mar box'>
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

	<div className="admin-title" bot-mar><h3>Our Mission content</h3></div>
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className='bot-mar box'>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth>
				<label>Upload Mission images</label>
				<TextField type="file"  />
			</FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<label>&nbsp;</label>
			<FormControl fullWidth><TextField id="outlined-basic" label="Our Mission title-1" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<label>&nbsp;</label>
			<FormControl fullWidth><TextField id="outlined-basic" label="Our Mission title-2" variant="outlined" /></FormControl>
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

	<div className="admin-title" bot-mar><h3>Our Vision content</h3></div>
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className='bot-mar box'>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth>
				<label>Upload Vision images</label>
				<TextField type="file"  />
			</FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<label>&nbsp;</label>
			<FormControl fullWidth><TextField id="outlined-basic" label="Our Vision title-1" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<label>&nbsp;</label>
			<FormControl fullWidth><TextField id="outlined-basic" label="Our Vision title-2" variant="outlined" /></FormControl>
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

	<div className="admin-title" bot-mar><h3>Circle Image-1</h3></div>
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className='bot-mar box'>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth>
				<label>Upload Circle image-1</label>
				<TextField type="file"  />
			</FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<label>&nbsp;</label>
			<FormControl fullWidth><TextField id="outlined-basic" label="Circle Image-1 title" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		
		<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} className="min-mar">
			<FormControl fullWidth><TextareaAutosize id="outlined-basic3"  minRows={5.4} placeholder="Circle Image-1 content" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} >
			<Stack spacing={2} direction="row" className='text-right'>
				<Button variant="outlined">Cancel</Button>
				<Button variant="contained">Save</Button>
			</Stack>
		</Unstable_Grid2>
	</Unstable_Grid2>

	<div className="admin-title" bot-mar><h3>Circle Image-2</h3></div>
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className='bot-mar box'>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth>
				<label>Upload Circle image-2</label>
				<TextField type="file"  />
			</FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<label>&nbsp;</label>
			<FormControl fullWidth><TextField id="outlined-basic" label="Circle Image-2 title" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		
		<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} className="min-mar">
			<FormControl fullWidth><TextareaAutosize id="outlined-basic3"  minRows={5.4} placeholder="Circle Image-2 content" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} >
			<Stack spacing={2} direction="row" className='text-right'>
				<Button variant="outlined">Cancel</Button>
				<Button variant="contained">Save</Button>
			</Stack>
		</Unstable_Grid2>
	</Unstable_Grid2>

</div>


{/*  Admin About page Closed */}















      </div>
      
      }
    </div>
  );
}
