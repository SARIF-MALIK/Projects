import React from 'react'
import Navbar from './Navbar'
import NavBarLanding from './NavBarLanding'
const Home = () => {
  return (
    <>
        <Navbar/>
        <NavBarLanding/>
        <section classNameName="container">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div classNameName="carousel-inner">
              <div classNameName="carousel-item active">
                <img src="./media/crousal1.jpg" classNameName="d-block w-100" alt="..."/>
              </div>
              <div classNameName="carousel-item">
                <img src="./media/crousal2.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="./media/crousal3.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="./media/crousal4.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="./media/crousal5.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="./media/crousal6.jpg" className="d-block w-100" alt="..."/>
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
          </section>
    </>
  )
}

export default Home;