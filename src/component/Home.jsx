import React from 'react'
import img from '../assets/image 54.png'
import { Link } from 'react-router-dom';


const Home = () => {
  
  const containerStyle = {
    position: 'relative',

    

  };

  const imageStyle = {
    width: "100%",
    height: "82vh",
    objectFit: "cover",
  };

  const absolute = {
    position: 'absolute',
    textAlign: 'center',
    justifyContent: 'cenetr',
    inset: 0,
    color: 'white',
    // height: '100vh',
    paddingTop: '10%',
  };
  const position = {

    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '100%',
  }

  return (
    <div style={containerStyle}>
      <img style={imageStyle} src={img} alt="" />
      <div style={absolute}>
        <div style={position}>
          <span style={{fontSize:'37px'}}  className='fw-bold mb-3 fs-1 w-100 text-white font-bold text-3xl mt-10' >You got the travel plans, we got the travel vans.</span> <br /> <br />  
          <div className='tex-base font-medium mb-6' >Add Adventure to your life by joining the #vanlife movement, Rent the perfect van to make your perfect road trip.</div> <br />
          <button className='bg-orange-600   btn-block text-white fw-bold' type='button' style={{ height: '50px', width:'65%' }}> <Link to="/van">
          Find your Van
          </Link> </button>
          
        </div>
      </div>
    </div>
  );
};


export default Home;



