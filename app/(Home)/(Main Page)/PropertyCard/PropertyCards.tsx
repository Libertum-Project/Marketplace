'use client';
import React, {
  useState,
  useEffect,
  type ReactElement,
} from 'react';
import css from './PropertyCards.module.css';
import GridPropertyComponent from './GridCard/GridCard';
import ListPropertyComponent from './ListCard/ListCard';
import SortComponent from './Sort/Sort';


export function PropertyCard(): ReactElement {
 
  const [properties, setProperties] = useState<any[]>([]);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [grid, setGrid] = useState<boolean>(true); 

  const toggleView = () => {
    setGrid(!grid);
  };

  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await fetch('https://libertum.azurewebsites.net/properties');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      const data = await response.json();
      setProperties(data);
    }catch (error) {
      console.error('Error fetching properties:', error);
    }
  }

  fetchProperties();
}, []);

  const handleCardClick = (address: string) => {
    if (expandedCard === address) {
      setExpandedCard(null);
    } else {
      setExpandedCard(address);
    }
  };


  return (
<div className={css.marketplaceLayout}>
      <SortComponent grid={grid} toggleView={toggleView} />
      {grid ? (
        <GridPropertyComponent
          properties={properties}
          expandedCard={expandedCard}
          handleCardClick={handleCardClick}
        />
      ) : (
        <ListPropertyComponent
          properties={properties}
          expandedCard={expandedCard}
          handleCardClick={handleCardClick}
        />
      )}
    </div>
  );
}

export default PropertyCard;
