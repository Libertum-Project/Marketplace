import React from 'react';
import css from "./page.module.css"

interface MarketplaceHomeProps {
}

const MarketplaceHome: React.FC<MarketplaceHomeProps> = ({}) => {

  return (
    <div className={css.heroContainer}>
      <div className={css.hero}>
      <h1>Marketplace Hero</h1>
      <h2>Marketplace filters</h2>
      <h3>MarketplaceCards</h3>
      </div>    
    </div>
  );
}

export default MarketplaceHome;
