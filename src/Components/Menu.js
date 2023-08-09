import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Summary from "./Summary";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};



const Menu = () => {

  const [articles, setArticles] = useState([])




  const updateNews = async () => {
    const url = `https://api.tvmaze.com/search/shows?q=all`;

    let data = await fetch(url);
    let parseData = await data.json();
    

    setArticles(parseData);
  }



  useEffect(() => {
    updateNews();
  }, [])


 

  return (

    <>
      <div className=" px-5 py-4" style={{background:"#06222c" ,height:"100vh"}} >

        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >

          {articles.map((element) => {
            return (

              <div className="" style={{boxShadow: " 0 0 15px 7px #48abe0"}} key={element.show.id}>
                <div className="card mx-4" >
                  <img src={element.show.image ? element.show.image.medium : "https://static.tvmaze.com/uploads/images/medium_portrait/24/60454.jpg"} className="card-img-top" alt="..." />
                  <p className='bg-dark text-white px-3 py-1'><i className="fa-solid fa-star" style={{color: "#e70808"}}></i> {element.show.rating ? element.show.rating.average :" "}  <span className='ms-5'><i className="fa-solid fa-thumbs-up" style={{color:" #14d220"}}></i>  {element.show.weight ? element.show.weight : " "}</span> </p>
                  <div className="card-body " style={{ marginTop: "-25px" }}>
                    <h5 className="card-title">{element.show.name ? element.show.name : " "}</h5>
                    <p className="card-text">{element.show.genres}</p>
                    <Link to={`/summary/${element.show.id}`} className="btn btn-info" >Summary</Link>
                  </div>
                </div>
              </div>
            );
          })}

        </Carousel>
      </div>

    </>
  );

}



export default Menu;
