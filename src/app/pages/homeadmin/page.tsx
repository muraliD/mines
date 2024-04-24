"use client"
import React, { useEffect, useState, useMemo } from 'react';
import { AppDispatch,RootState } from '../../redux/store';

import { useDispatch, useSelector } from "react-redux";

import { uploadMatterFiles } from '../../redux/features/jobs/jobsSlice';

import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import JoditEditor from "jodit-react";
import { Editor } from 'react-draft-wysiwyg';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import * as Yup from "yup";

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













export default function HomeAdminpage() {
	const dispatch = useDispatch<AppDispatch>();
	const changeTab = (selectedTab: any) => {
	};
	const router = useRouter()
	const [windows, setwindows] = useState<any>(null);
	const [open, setOpen] = React.useState(false);


	const [expanded, setExpanded] = React.useState<string | false>(false);






	useEffect(() => {
		if (typeof window !== 'undefined') {
			setwindows(window);
			// window.$ = window.jQuery = $
		}
	}, [typeof window]);

	const config = useMemo(
		() => ({
			readonly: false
		}),
		[]
	);


	return (
		<div className='main-container'>
			{windows &&
				//id: `simple-tab-${index}`,
				//'aria-controls': `simple-tabpanel-${index}`,


				<Formik
					initialValues={{
						"_id": "6624c696f5097d231ff14206",
						"banners": {
							"images": ["", ""],
							"text1": "werr",
							"text2": "rrr",
							"text3": "rrrre",
							"text4": "fdd"
						},
						"title1": {
							"text1": "1",
							"text2": "12",
							"text3": "13",
							"content": "14"
						},
						"title2": {
							"text1": "2",
							"text2": "21",
							"text3": "22",
							"content": "23"
						},
						"productinfo": {
							"bannerimage": "",
							"products": [
								{
									"image": "",
									"title": "ffff",
									"content": "ddd"
								},
								{
									"image": "",
									"title": "rr",
									"content": "dd"
								},
								{
									"image": "",
									"title": "ss",
									"content": "d"
								}

							]
						},
						"title3": {
							"text1": "3",
							"text2": "31",
							"text3": "32",
							"content": "33"
						},
						"title4": {
							"text1": "4",
							"text2": "41",
							"text3": "42",
							"content": "43"
						},
						"locations": [
							{
								"image": "",
								"title": "loc",
								"content": "loccon"
							}
						],
						"partnerImages": [
							{
								"image": ""
							}
						],

					}}
					validationSchema={Yup.object({
						banners: Yup.object().shape({


							text1: Yup.string().required("text1 required"),
							text2: Yup.string().required("text2 required"),
							text3: Yup.string().required("text3 required"),
							text4: Yup.string().required("text4 required"),
							images: Yup.array().of(
								Yup.object().shape({
									file: Yup.mixed()
								})
							)
						}),
						// title1: Yup.object().shape({
						// 	text1: Yup.string().required("text1 required"),
						// 	text2: Yup.string().required("text2 required"),
						// 	text3: Yup.string().required("text3 required"),
						// 	content: Yup.string().required("content required"),

						// }),
						// title2: Yup.object().shape({
						// 	text1: Yup.string().required("text1 required"),
						// 	text2: Yup.string().required("text2 required"),
						// 	text3: Yup.string().required("text3 required"),
						// 	content: Yup.string(),

						// }),
						// title3: Yup.object().shape({
						// 	text1: Yup.string().required("text1 required"),
						// 	text2: Yup.string().required("text2 required"),
						// 	text3: Yup.string().required("text3 required"),
						// 	content: Yup.string(),

						// }),
						// productinfo: Yup.object().shape({
						// 	bannerimage: Yup.mixed(),

						// 	products: Yup.array().of(
						// 		Yup.object().shape({
						// 			image: Yup.mixed(),
						// 			title: Yup.string().required("text3 required"),
						// 			content: Yup.string().required("content required"),
						// 		})
						// 	)
						// }),
						// locations: Yup.array().of(
						// 	Yup.object().shape({
						// 		image: Yup.mixed(),
						// 		title: Yup.string().required("text3 required"),
						// 		content: Yup.string().required("content required"),
						// 	})
						// ),
						// partnerImages:Yup.array().of(
						// 		Yup.object().shape({
						// 			image: Yup.mixed()

						// 		})
						// 	)
						

					})}
					onSubmit={(values) => {
						alert(JSON.stringify(values, null, 2));
						console.log("data====", values);

						
					}}
					render={({ values, touched, errors, handleChange, handleBlur, isValid, setFieldValue, handleReset, setErrors }) => (
						<Form>
							<div>
































								{/*  Admin home page */}
								<div className="banner admin">
									<div className="header bgwhite">
										<div className="menu-icon"></div>
										<a href="#" className="logo-2"><img src="images/logo-2.png" /></a>
										<div className="menu">
											<menu>
												<MenuItem onClick={() => {
													router.push('/pages/homeadmin')
												}} className='active'>Home</MenuItem>
												<MenuItem onClick={() => {
													router.push('/pages/aboutadmin')
												}}>About</MenuItem>
												<MenuItem onClick={() => {
													router.push('/pages/productsadmin')
												}}>Our Products</MenuItem>
												<MenuItem onClick={() => {
													router.push('/pages/equipmentadmin')
												}} >Equipment</MenuItem>

												<MenuItem onClick={() => {
													router.push('/pages/productivityadmin')
												}} >Productivity</MenuItem>
												<MenuItem onClick={() => {
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


											<label>Upload Banner images</label>
											<FieldArray
												name={`banners["images"]`}
												render={(arrayHelpers) => {
													const filespath = values.banners.images;
													return (
														<div>
															{filespath && filespath.length > 0 && filespath.map((user, index) => {
																return <FormControl fullWidth key={index}>

																	<TextField

																		type="file"

																		name={`banners.images.${index}`}
																		value={values.banners["images"][index] || ""}
																		onChange={(v) => {


																			setFieldValue(`banners.images.${index}`, v.target.value)
																		}}


																	/>

																</FormControl>

															})}




														</div>)

												}}

											/>






											{/* <label>&nbsp;</label>
											<FormControl fullWidth >
												<TextField type="file" />
											</FormControl> */}


											{/* <Button className="button-plus" >+</Button> */}
										</Unstable_Grid2>
										<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2} className="min-mar">
											<Unstable_Grid2 md={6} sm={6} xs={12} columnSpacing={2} spacing={2}>
												<label>&nbsp;</label>


												{/* <Field placeholder="Organization name" name={`banners["text1"]`} /> */}
												<ErrorMessage name={'banners["text1"]'} />
												<FormControl fullWidth><TextField id="outlined-basic" label="Enter Banner text-1" variant="outlined"
													name={`banners["text1"]`}
													value={values.banners["text1"] || ""}
													onChange={(v) => {

														setFieldValue(`banners.text1`, v.target.value)
													}}


												/></FormControl>
											</Unstable_Grid2>
											<Unstable_Grid2 md={6} sm={6} xs={12} columnSpacing={2} spacing={2}>
												<label>&nbsp;</label>
												<FormControl fullWidth><TextField id="outlined-basic" label="Enter Banner text-2" variant="outlined"
													name={`banners["text2"]`}
													value={values.banners["text2"] || ""}
													onChange={(v) => {

														setFieldValue(`banners.text2`, v.target.value)
													}}


												/></FormControl>
											</Unstable_Grid2>
										</Unstable_Grid2>
										<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2} className="min-mar">
											<Unstable_Grid2 md={6} sm={6} xs={12} columnSpacing={2} spacing={2}>
												<label>&nbsp;</label>
												<FormControl fullWidth><TextField id="outlined-basic" label="Enter Banner text-3" variant="outlined"
													name={`banners["text3"]`}
													value={values.banners["text3"] || ""}
													onChange={(v) => {

														setFieldValue(`banners.text3`, v.target.value)
													}}

												/></FormControl>
											</Unstable_Grid2>
											<Unstable_Grid2 md={6} sm={6} xs={12} columnSpacing={2} spacing={2}>
												<label>&nbsp;</label>
												<FormControl fullWidth><TextField id="outlined-basic" label="Enter Banner text-4" variant="outlined"
													name={`banners["text4"]`}
													value={values.banners["text4"] || ""}
													onChange={(v) => {

														setFieldValue(`banners.text4`, v.target.value)
													}}

												/></FormControl>
											</Unstable_Grid2>
										</Unstable_Grid2>
										<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} >
											<Stack spacing={2} direction="row" className='text-right'>
												<Button variant="outlined">Cancel</Button>
												<Button type="submit" variant="contained">Save</Button>
											</Stack>
										</Unstable_Grid2>
									</Unstable_Grid2>


									<div className="admin-title" bot-mar><h3>Title -1 and text content</h3></div>
									<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className='bot-mar box'>
										<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
											<FormControl fullWidth>
												<TextField id="outlined-basic" label="Home title-1"
													variant="outlined"
													name={`title1["text1"]`}
													value={values.title1["text1"] || ""}
													onChange={(v) => {

														setFieldValue(`title1.text1`, v.target.value)
													}}
												/>
											</FormControl>
										</Unstable_Grid2>
										<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
											<FormControl fullWidth><TextField id="outlined-basic" label="Home title-2"
												name={`title1["text2"]`}
												value={values.title1["text2"] || ""}
												onChange={(v) => {

													setFieldValue(`title1.text2`, v.target.value)
												}}
												variant="outlined"
											/></FormControl>
										</Unstable_Grid2>
										<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
											<FormControl fullWidth><TextField id="outlined-basic" label="Home title-3"
												variant="outlined"
												name={`title1["text3"]`}
												value={values.title1["text3"] || ""}
												onChange={(v) => {

													setFieldValue(`title1.text3`, v.target.value)
												}}

											/></FormControl>
										</Unstable_Grid2>
										<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} className="min-mar">


											<FormControl fullWidth>


												<TextareaAutosize
													value={values.title1["content"] || ""}
													onChange={(v) => {
														debugger

														setFieldValue(`title1.content`, v.target.value)
													}}

													id="outlined-basic3" minRows={5.4} placeholder="Home - Who we are content" />


											</FormControl>
										</Unstable_Grid2>
										<Unstable_Grid2 md={12} sm={12} xs={12} columnSpacing={2} spacing={2} >
											<Stack spacing={2} direction="row" className='text-right'>
												<Button variant="outlined">Cancel</Button>
												<Button variant="contained">Save</Button>
											</Stack>
										</Unstable_Grid2>
									</Unstable_Grid2>


									<div className="admin-title" bot-mar><h3>Title -22</h3></div>
									<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar box">
										<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
											<FormControl fullWidth><TextField id="outlined-basic" label="Home title-2-1" variant="outlined"
												name={`title2["text1"]`}
												value={values.title2["text1"] || ""}
												onChange={(v) => {

													setFieldValue(`title2.text1`, v.target.value)
												}}

											/></FormControl>
										</Unstable_Grid2>
										<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
											<FormControl fullWidth><TextField id="outlined-basic" label="Home title-2-2" variant="outlined"
												name={`title2["text2"]`}
												value={values.title2["text2"] || ""}
												onChange={(v) => {

													setFieldValue(`title2.text2`, v.target.value)
												}}

											/></FormControl>
										</Unstable_Grid2>
										<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
											<FormControl fullWidth><TextField id="outlined-basic" label="Home title-2-3" variant="outlined"
												name={`title2["text3"]`}
												value={values.title2["text3"] || ""}
												onChange={(v) => {

													setFieldValue(`title2.text3`, v.target.value)
												}}
											/></FormControl>
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
											<FormControl fullWidth ><label>Home Products Banner Image</label><TextField type="file"
												name={`productinfo.bannerimage`}
												value={values.productinfo["bannerimage"] || ""}
												onChange={(v) => {


													setFieldValue(`productinfo.bannerimage`, v.target.value)
												}}


											/>	</FormControl>
										</Unstable_Grid2>
										<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4}>
											{/* loop starts here */}



											<FieldArray
												name={`productinfo["products"]`}
												render={(arrayHelpers) => {
													const filespath = values.productinfo.products;
													return (
														<>
															{filespath && filespath.length > 0 && filespath.map((user, index) => {
																return <Unstable_Grid2 key={index} md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
																	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
																		<FormControl fullWidth><label>Home Products Image-{index + 1}</label><TextField type="file"

																			name={`productinfo.products.${index}.image`}
																			value={values.productinfo["products"][index].image || ""}
																			onChange={(v) => {


																				setFieldValue(`productinfo.products.${index}.image`, v.target.value)
																			}}

																		/>	</FormControl>
																	</Unstable_Grid2>
																	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
																		<FormControl fullWidth><TextField id="outlined-basic" label="Home Products Image-1-title" variant="outlined"
																			name={`productinfo.products.${index}.title`}
																			value={values.productinfo["products"][index].title || ""}
																			onChange={(v) => {


																				setFieldValue(`productinfo.products.${index}.title`, v.target.value)
																			}}



																		/></FormControl>
																	</Unstable_Grid2>
																	<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
																		<FormControl fullWidth><TextareaAutosize id="outlined-basic3" minRows={5.4} placeholder="Home products image-1 content"
																			name={`productinfo.products.${index}.content`}
																			value={values.productinfo["products"][index].content || ""}
																			onChange={(v) => {


																				setFieldValue(`productinfo.products.${index}.content`, v.target.value)
																			}}
																		/></FormControl>
																	</Unstable_Grid2>
																</Unstable_Grid2>

															})}




														</>)

												}}

											/>





											{/* <Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
												<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
													<FormControl fullWidth><label>Home Products Image-1</label><TextField type="file" />	</FormControl>
												</Unstable_Grid2>
												<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
													<FormControl fullWidth><TextField id="outlined-basic" label="Home Products Image-1-title" variant="outlined" /></FormControl>
												</Unstable_Grid2>
												<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
													<FormControl fullWidth><TextareaAutosize id="outlined-basic3" minRows={5.4} placeholder="Home products image-1 content" /></FormControl>
												</Unstable_Grid2>
											</Unstable_Grid2>
											

											<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
												<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
													<FormControl fullWidth><label>Home Products Image-2</label><TextField type="file" />	</FormControl>
												</Unstable_Grid2>
												<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
													<FormControl fullWidth><TextField id="outlined-basic" label="Home Products Image-2-title" variant="outlined" /></FormControl>
												</Unstable_Grid2>
												<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
													<FormControl fullWidth><TextareaAutosize id="outlined-basic3" minRows={5.4} placeholder="Home products image-2 content" /></FormControl>
												</Unstable_Grid2>
											</Unstable_Grid2>

											<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
												<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
													<FormControl fullWidth><label>Home Products Image-3</label><TextField type="file" />	</FormControl>
												</Unstable_Grid2>
												<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
													<FormControl fullWidth><TextField id="outlined-basic" label="Home Products Image-3-title" variant="outlined" /></FormControl>
												</Unstable_Grid2>
												<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
													<FormControl fullWidth><TextareaAutosize id="outlined-basic3" minRows={5.4} placeholder="Home products image-3 content" /></FormControl>
												</Unstable_Grid2>
											</Unstable_Grid2>

											<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
												<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
													<FormControl fullWidth><label>Home Products Image-4</label><TextField type="file" />	</FormControl>
												</Unstable_Grid2>
												<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
													<FormControl fullWidth><TextField id="outlined-basic" label="Home Products Image-4-title" variant="outlined" /></FormControl>
												</Unstable_Grid2>
												<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
													<FormControl fullWidth><TextareaAutosize id="outlined-basic3" minRows={5.4} placeholder="Home products image-4 content" /></FormControl>
												</Unstable_Grid2>
											</Unstable_Grid2>

											<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
												<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
													<FormControl fullWidth><label>Home Products Image-5</label><TextField type="file" />	</FormControl>
												</Unstable_Grid2>
												<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
													<FormControl fullWidth><TextField id="outlined-basic" label="Home Products Image-5-title" variant="outlined" /></FormControl>
												</Unstable_Grid2>
												<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
													<FormControl fullWidth><TextareaAutosize id="outlined-basic3" minRows={5.4} placeholder="Home products image-5 content" /></FormControl>
												</Unstable_Grid2>
											</Unstable_Grid2>

											<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
												<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
													<FormControl fullWidth><label>Home Products Image-6</label><TextField type="file" />	</FormControl>
												</Unstable_Grid2>
												<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
													<FormControl fullWidth><TextField id="outlined-basic" label="Home Products Image-6-title" variant="outlined" /></FormControl>
												</Unstable_Grid2>
												<Unstable_Grid2 container spacing={2} rowSpacing={2} columnSpacing={4} className="bot-mar">
													<FormControl fullWidth><TextareaAutosize id="outlined-basic3" minRows={5.4} placeholder="Home products image-6 content" /></FormControl>
												</Unstable_Grid2>
											</Unstable_Grid2> */}

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
											<FormControl fullWidth><TextField id="outlined-basic" label="Home title-3-1" variant="outlined"
												name={`title3["text1"]`}
												value={values.title3["text1"] || ""}
												onChange={(v) => {

													setFieldValue(`title3.text1`, v.target.value)
												}}

											/></FormControl>
										</Unstable_Grid2>
										<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
											<FormControl fullWidth><TextField id="outlined-basic" label="Home title-3-2" variant="outlined"
												name={`title3["text2"]`}
												value={values.title3["text2"] || ""}
												onChange={(v) => {

													setFieldValue(`title3.text2`, v.target.value)
												}}
											/></FormControl>
										</Unstable_Grid2>
										<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
											<FormControl fullWidth><TextField id="outlined-basic" label="Home title-3-3" variant="outlined"
												name={`title3["text3"]`}
												value={values.title3["text3"] || ""}
												onChange={(v) => {

													setFieldValue(`title3.text3`, v.target.value)
												}}


											/></FormControl>
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


										<FieldArray
											name={`locations`}
											render={(arrayHelpers) => {
												const filespath = values.locations;
												return (
													<>
														{filespath && filespath.length > 0 && filespath.map((user, index) => {
															return <>       <Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2} >
																<div className="min-mar">
																	<FormControl fullWidth >
																		<label>Home Location image -{index + 1}</label>
																		<TextField type="file"

																			name={`locations.${index}.image`}
																			value={values.locations[index].image || ""}
																			onChange={(v) => {


																				setFieldValue(`locations.${index}.image`, v.target.value)
																			}}


																		/>
																	</FormControl>
																</div>
															</Unstable_Grid2>
																<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2} className="min-mar">
																	<label>&nbsp;</label>
																	<FormControl fullWidth><TextField id="outlined-basic" label="Home Location image title-1" variant="outlined" 
																	name={`locations.${index}.title`}
																	value={values.locations[index].title || ""}
																	onChange={(v) => {


																		setFieldValue(`locations.images.${index}.title`, v.target.value)
																	}}
																	
																	/></FormControl>
																</Unstable_Grid2>
																<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2} className="min-mar">
																	<label>&nbsp;</label>
																	<FormControl fullWidth><TextField id="outlined-basic" label="Home Location image title-2" variant="outlined" 
																	name={`locations.${index}.content`}
																	value={values.locations[index].content || ""}
																	onChange={(v) => {


																		setFieldValue(`locations.images.${index}.content`, v.target.value)
																	}}
																	
																	/></FormControl>
																</Unstable_Grid2> </>

														})}




													</>)

											}}

										/>






										




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
											<FormControl fullWidth><TextField id="outlined-basic" label="Home title-4-1" variant="outlined"
												name={`title4["text1"]`}
												value={values.title4["text1"] || ""}
												onChange={(v) => {

													setFieldValue(`title4.text1`, v.target.value)
												}}


											/></FormControl>
										</Unstable_Grid2>
										<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
											<FormControl fullWidth><TextField id="outlined-basic" label="Home title-4-2" variant="outlined"
												name={`title4["text2"]`}
												value={values.title4["text2"] || ""}
												onChange={(v) => {

													setFieldValue(`title4.text2`, v.target.value)
												}}


											/></FormControl>
										</Unstable_Grid2>
										<Unstable_Grid2 md={4} sm={6} xs={12} columnSpacing={2} spacing={2}>
											<FormControl fullWidth><TextField id="outlined-basic" label="Home title-4-3" variant="outlined"
												name={`title4["text3"]`}
												value={values.title4["text3"] || ""}
												onChange={(v) => {

													setFieldValue(`title4.text3`, v.target.value)
												}}


											/></FormControl>
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




										<FieldArray
												name={`partnerImages`}
												render={(arrayHelpers) => {
													const filespath = values.partnerImages;
													return (
														<div>
															{filespath && filespath.length > 0 && filespath.map((user, index) => {
																
																
																
																
																
																
																
																return <FormControl fullWidth key={index}>

																	<TextField

																		type="file"

																		name={`partnerImages.${index}.image`}
																		value={values.partnerImages[index] .image|| ""}
																		onChange={(v) => {


																			setFieldValue(`partnerImages.${index}.image`, v.target.value)
																		}}


																	/>

																</FormControl>

															})}




														</div>)

												}}

											/>




											

											{/* <label>&nbsp;</label>
											<FormControl fullWidth >
												<TextField type="file" />
											</FormControl> */}




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
						</Form>

					)}
				/>

			}
		</div>
	);
}
