import "./Offers.css"
import exclusive_image from "../Assets/x.png"

const Offers = () => {
  return (
      <div className='offers'>
          <div className="offers-left">
              <h1>Exclusive</h1>
              <h1>Offers For You</h1>
              <p>Only on Best Sellers Products</p>
              <button>Check Now</button>
          </div>
          <div className="offers-right">
              <img id="offers_image" src={exclusive_image} alt="" />
          </div>
    </div>
  )
}

export default Offers