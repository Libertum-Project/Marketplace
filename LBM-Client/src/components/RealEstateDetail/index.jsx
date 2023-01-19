import React, {useState} from 'react'
import './index.scss'
import relaod from '../../assets/reload.svg';
import arrow from '../../assets/down.svg';
function RealEstateDetail() {
	const [ascendant, setAscendant] = useState(true);
    const handleOrder = () => {
		setAscendant(!ascendant);
	};
  return (
    <div className="realEstate">
			<div className="containerEstate">
				<h3>Real Estate</h3>
				<nav>
					<button className="isNotAButton">Filters</button>
					<button className="filters">
						<img src={relaod} alt="Reload" />
					</button>
					<div className="inputWrapper">
						<input
							type="search"
							className="input"
							placeholder="Search by NFTs"
						/>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="inputIcon"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<button
						id="order"
						className={ascendant ? null : 'highToLow'}
						onClick={handleOrder}
					>
						Price: {ascendant ? 'low to high' : 'high to low'}
						<img src={arrow} alt="Arrow" />
					</button>
				</nav>	
			</div>
		</div>
  )
}

export default RealEstateDetail