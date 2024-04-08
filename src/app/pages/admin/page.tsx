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

export default function AdminPage() {
	    
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
      
        






























{/*  Admin home page */}
<div className="banner admin">
	<div className="header bgwhite">
		<div className="menu-icon"></div>
		<a href="#" className="logo-2"><img src="images/logo-2.png" /></a>
		<div className="menu">
			<menu>
				<MenuItem className='active'>Home</MenuItem>
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


{/*  Admin About page */}
<div className="banner admin">
	<div className="header bgwhite">
		<div className="menu-icon"></div>
		<a href="#" className="logo-2"><img src="images/logo-2.png" /></a>
		<div className="menu">
			<menu>
				<MenuItem className='active'>Home</MenuItem>
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


{/*  Admin Our Products page */}

<div className="banner admin">
	<div className="header bgwhite">
		<div className="menu-icon"></div>
		<a href="#" className="logo-2"><img src="images/logo-2.png" /></a>
		<div className="menu">
			<menu>
				<MenuItem className='active'>Home</MenuItem>
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
	<div className="page-title"><div className="container"><h3>Our Prodcuts Page</h3></div></div>
</div>


<div className="container bot-mar admin">

<div className="admin-title" bot-mar><h3>Our Prodcuts Banner</h3></div>
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

	<div className="admin-title" bot-mar><h3>Swipeable Tab Items</h3></div>
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className='bot-mar box'>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth>
				<label>Upload Products Tab image</label>
				<TextField type="file"  />
			</FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<label>&nbsp;</label>
			<FormControl fullWidth><TextField id="outlined-basic" label="Tab Image title" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		
		

		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
		<FormControl fullWidth>
				<label>Upload Tab content large image</label>
				<TextField type="file"  />
			</FormControl>
		</Unstable_Grid2>

		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<label>&nbsp;</label>
			<FormControl fullWidth><TextField id="outlined-basic" label="Tab content title-1" variant="outlined" /></FormControl>
		</Unstable_Grid2>

		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<label>&nbsp;</label>
			<FormControl fullWidth><TextField id="outlined-basic" label="Tab content title-2" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} className="min-mar">
			<FormControl fullWidth><TextareaAutosize id="outlined-basic3"  minRows={5.4} placeholder="Murali Use Rich Text Editor here...." /></FormControl>
		</Unstable_Grid2>

		<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} >
			<Stack spacing={2} direction="row" className='text-right'>
				<Button variant="outlined">Cancel</Button>
				<Button variant="contained">Save</Button>
			</Stack>
		</Unstable_Grid2>
	</Unstable_Grid2>
	<div className="container min-mar">
		<Button className="button-plus" >+</Button>
	</div>
	<div className="container">&nbsp;</div>


</div>




{/*  Admin  Our Products page Closed */}


{/*  Admin  Equipment page */}

<div className="banner admin">
	<div className="header bgwhite">
		<div className="menu-icon"></div>
		<a href="#" className="logo-2"><img src="images/logo-2.png" /></a>
		<div className="menu">
			<menu>
				<MenuItem className='active'>Home</MenuItem>
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
	<div className="page-title"><div className="container"><h3>Equipment Page</h3></div></div>
</div>


<div className="container bot-mar admin">

<div className="admin-title" bot-mar><h3>Equipment Banner</h3></div>
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

	<div className="admin-title" bot-mar><h3>Equipment Items</h3></div>
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className='bot-mar box'>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth>
				<label>Upload Equipment image</label>
				<TextField type="file"  />
			</FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<label>&nbsp;</label>
			<FormControl fullWidth><TextField id="outlined-basic" label="Equipment title" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		
		
		<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} className="min-mar">
			<FormControl fullWidth><TextareaAutosize id="outlined-basic3"  minRows={5.4} placeholder="Equipment content" /></FormControl>
		</Unstable_Grid2>

		<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} >
			<Stack spacing={2} direction="row" className='text-right'>
				<Button variant="outlined">Cancel</Button>
				<Button variant="contained">Save</Button>
			</Stack>
		</Unstable_Grid2>
	</Unstable_Grid2>
	<div className="container min-mar">
		<Button className="button-plus" >+</Button>
	</div>
	<div className="container">&nbsp;</div>


</div>

{/*  Admin  Equipment page Closed */}



{/*  Admin  Productivity page */}

<div className="banner admin">
	<div className="header bgwhite">
		<div className="menu-icon"></div>
		<a href="#" className="logo-2"><img src="images/logo-2.png" /></a>
		<div className="menu">
			<menu>
				<MenuItem className='active'>Home</MenuItem>
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
	<div className="page-title"><div className="container"><h3>Productivity Page</h3></div></div>
</div>


<div className="container bot-mar admin">

<div className="admin-title" bot-mar><h3>Productivity Banner</h3></div>
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

	<div className="admin-title" bot-mar><h3>Productivity Items</h3></div>
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className='bot-mar box'>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<FormControl fullWidth>
				<label>Upload Productivity image</label>
				<TextField type="file"  />
			</FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<label>&nbsp;</label>
			<FormControl fullWidth><TextField id="outlined-basic" label="Productivity image title" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<label>&nbsp;</label>
			<FormControl fullWidth><TextField id="outlined-basic" label="Enter Volume" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			<label>&nbsp;</label>
			<FormControl fullWidth><TextField id="outlined-basic" label="Enter Working Time" variant="outlined" /></FormControl>
		</Unstable_Grid2>
		

		<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} >
			<Stack spacing={2} direction="row" className='text-right'>
				<Button variant="outlined">Cancel</Button>
				<Button variant="contained">Save</Button>
			</Stack>
		</Unstable_Grid2>
	</Unstable_Grid2>
	<div className="container min-mar">
		<Button className="button-plus" >+</Button>
	</div>
	<div className="container">&nbsp;</div>


</div>

{/*  Admin  Productivity page Closed */}


{/*  Admin  Gallery page */}

<div className="banner admin">
	<div className="header bgwhite">
		<div className="menu-icon"></div>
		<a href="#" className="logo-2"><img src="images/logo-2.png" /></a>
		<div className="menu">
			<menu>
				<MenuItem className='active'>Home</MenuItem>
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
	<div className="page-title"><div className="container"><h3>Gallery Page</h3></div></div>
</div>


<div className="container bot-mar admin">

<div className="admin-title" bot-mar><h3>Gallery Banner</h3></div>
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

	<div className="admin-title" bot-mar><h3>Gallery category Items</h3></div>
	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className='bot-mar box'>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			
			<FormControl fullWidth><TextField id="outlined-basic" label="Gallery Category title" variant="outlined"  /></FormControl>
			<label>&nbsp;</label>
			<FormControl fullWidth>
				<label>Upload Gallery image</label>
				<TextField type="file"  />
			</FormControl>
			<Button className="button-plus" >+</Button>

		</Unstable_Grid2>
		<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
			
		</Unstable_Grid2>
		
		
		

		<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} >
			<Stack spacing={2} direction="row" className='text-right'>
				<Button variant="outlined">Cancel</Button>
				<Button variant="contained">Save</Button>
			</Stack>
		</Unstable_Grid2>
	</Unstable_Grid2>
	<div className="container min-mar">
		<Button className="button-plus" >+</Button>
	</div>
	<div className="container">&nbsp;</div>


</div>

{/*  Admin  Gallery page Closed */}


      </div>
      
      }
    </div>
  );
}
