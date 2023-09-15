import React from 'react'
import './navbar.css';

const Navbar = () => {
  return (
    <>
    <div className="navbar">
    <span>
        <img src="./media/logo.png" alt="" />
    </span>

    <span>
        <i class="fa-solid fa-location-dot location"></i>
            <div>
                <p>Hello</p>
                <p>Select your address</p>
            </div>
    </span>
    <span class="searchBar">
        <select name="All" id="categories">
            <option disabled selected>All</option>
            <option>All Categories</option>
            <option>Books</option>
            <option>Computer</option>
            <option>Mobile</option>
            <option>Furniture</option>
            <option>Cloths</option>
        </select>

        <input type="text" placeholder="Search Amazon.in"/>
        <span class="searchGallery">
            <i class="fa-brands fa-instagram fa-xl"></i>
        </span>
        <span class="searchIcon">
            <i class="fa-solid fa-magnifying-glass fa-xl"></i>
        </span>
    </span>
    <span>
        <img src="./media/flag.png" alt="" id="flag"/>
        <select name="language" id="language">
            <option >EN</option>
            <option>Hi</option>
            <option>Ud</option>
            <option>PN</option>
            <option>MR</option>
        </select>
    </span>
    <div><p>Hello, sign in</p>
    <p>Account & Lists</p>
    </div>

    <div>
        <p>Returns</p>
        <p>& Orders</p>
    </div>
    <span class="cart">
        <i class="fa-solid fa-cart-shopping fa-2xl"></i>
        <p>Cart</p>
        <div>
            0
        </div>
    </span>
</div>
<div class="menuBar">
    <span>
        <i class="fa-solid fa-bars fa-xl"></i>
        <p>All</p>
    </span>
    <span>
        <p>Amazon miniTV</p>
    </span>
    <span>
        <p>Sell</p>
    </span>
    <span>
        <p>Best Sellers</p>
    </span>
    <span>
        <p>Mobiles</p>
    </span>
    <span>
        <p>Today's Deals</p>
    </span>
    <span>
        <p>New Releases</p>
    </span>
    <span>
        <p>Customer Service</p>
    </span>
    <span>
        <p>Prime</p>
    </span>
    <span>
        <p>Electronics</p>
    </span>
    <span>
        <p>Gift Ideas</p>
    </span>
    <span>
        <p>Home & Kitchen</p>
    </span>

    <span class="spl">
        <img src="./media/parcel.png" alt=""/>
        <p>Shopping made easy | Download the app</p>
    </span>
</div>
    </>
  )
}

export default Navbar