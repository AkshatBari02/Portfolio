import { useEffect, useState } from "react";
import HomePage from "./homePage";
import HomePageData from "./homePageData";
import axios from "axios";
import { Link } from "react-router-dom";
import React from "react";

function Home(){
    let [movieData,setMovieData]=useState();

const options = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': 'aabfdf78dfmshb304b19943edb80p1a9859jsnd1bc79ffd182',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

// async function getMoviesData(){
//     try {
//         const response = await axios.request(options);
//         setMovieData(response.data);
//         console.log(response.data);
//     } catch (error) {
//         console.error(error);
//     }
// }
// useEffect(() =>{ 
//     getMoviesData();
// },[])
async function getMoviesDataWithRetries() {
    const maxRetries = 3;
    let retries = 0;

    while (retries < maxRetries) {
      try {
        const response = await axios.request(options);
        setMovieData(response.data);
        console.log(response.data);
        break; // Exit the loop if request is successful
      } catch (error) {
        if (error.response && error.response.status === 429) {
          // Hit rate limit, wait for a while before retrying
          const retryDelay = (retries + 1) * 1000; // Increase delay with each retry
          await new Promise(resolve => setTimeout(resolve, retryDelay));
          retries++;
        } else {
          console.error(error);
          break; // Exit loop on other errors
        }
      }
    }
  }

  useEffect(() => {
    getMoviesDataWithRetries();
  }, []);
    return(
        <>
        {movieData && movieData.map((item,index) => {
            return (
                <>
            <Link to={`/movie/${item.id}`} style={{textDecoration:"none",color:"black"}}>
                <HomePage
                    img={item.image}
                    title={item.title}
                    content={item.description}
                    rating={Number((item.rating)/2)} />
                    </Link>
                    </>
            );
        })}
        </>
    );
}
export default Home;