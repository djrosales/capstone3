import React from "react";
import BannerImg1 from '../BannerImg1.webp';
import BannerImg2 from '../BannerImg2.png';



export default function Banner(props){
    return(
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={BannerImg1} className="d-block w-100" alt00="banner-img"/>
    </div>
    <div className="carousel-item">
      <img src={BannerImg2}className="d-block w-100" alt="banner-img"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}