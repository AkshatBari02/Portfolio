// // function HomePage(){
// //     return(
// //         <h1>New App</h1>
// //     );
// // }

// // export default HomePage;

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { CardActionArea } from "@mui/material";
import { Link } from 'react-router-dom';

export default function HomePage(props) {
  return (
    <>
<div className="row container">
      <div className="card-s col-lg-4" style={{ flexGrow: "1", padding: "2% 3%" }}>
            <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="290"
                    image={props.img}
                    alt={props.title}
                    style={{ width: "100%" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {props.title}
                    </Typography>
                    <Rating name="half-rating-read" defaultValue={(props.rating)/2} precision={0.1} readOnly />
                  </CardContent>
                </CardActionArea>
            </Card>
          </div>
    </div>
    </>
   );
 }





// import React, { useEffect, useState } from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
// // import MyRating from "../Rating";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Rating from "@mui/material/Rating";



// export default function ActionAreaCard() {
//   const [movieData, setMovieData] = useState();

//   const options = {
//     method: "GET",
//     url: "https://imdb-top-100-movies.p.rapidapi.com/",
//     headers: {
//       "X-RapidAPI-Key": "b6eeaa45eemsh70c723eebd55b41p10f430jsnf715937a4f87",
//       "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
//     },
//   };

//   async function getMovieData() {
//     try {
//       const response = await axios.request(options);
//       console.log(response.data);
//       setMovieData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     getMovieData();
//   }, []);

//   return (
    
// }