import React, { useState } from 'react';

const BuyProperty = () => {
  const [rangeValue, setRangeValue] = useState(40);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img className="w-[50%]" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
        <div>
          <h1 className="text-5xl font-bold">St. Louis 384 - Virginia</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <input
            type="range"
            min="0"
            max="100"
            value={rangeValue}
            className="range"
            onChange={handleRangeChange}
          />
          <p>Buy <span className='font-extrabold'>{rangeValue}  </span> NFT</p>
          <button className="btn btn-primary mt-3">Buy Now!</button>
        </div>
      </div>
    </div>
  );
};

export default BuyProperty;
