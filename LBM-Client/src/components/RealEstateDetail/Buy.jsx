import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./Aboutproperty.module.scss";
import Icons from "./IconsAmenities/Icons";

const Buy = (props) => {
  const { Square_foot, rooms, amenities, image, id, address, location, PIT, PRY, AvailablesNFT } = props;

  const [isSticky, setIsSticky] = useState(false);
  const [hasReachedScrollLimit, setHasReachedScrollLimit] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('buyComponent');

      if (el) {
        const elTop = el.getBoundingClientRect().top;

        // Definir límite para activar el sticky (por ejemplo, 200 pixeles desde la parte superior)
        const stickyLimit = 250;

        if (!hasReachedScrollLimit && window.scrollY > stickyLimit) {
          setHasReachedScrollLimit(true);
        }

        // Verificar si se está desplazando hacia arriba
        const isScrollingUp = window.scrollY < stickyLimit;

        // Cambiar el estado solo si está dentro del límite y ha alcanzado el límite de scroll o si está desplazándose hacia arriba
        setIsSticky(hasReachedScrollLimit && !isScrollingUp && elTop <= stickyLimit);
        
        // Restablecer el estado hasReachedScrollLimit si está desplazándose hacia arriba
        if (isScrollingUp) {
          setHasReachedScrollLimit(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasReachedScrollLimit]);

  return (
    <div className={style.column2}>
      <div id="buyComponent" className={`${style.buyComponent} ${isSticky ? style.sticky : ''}`}>
        <div className={style.buycontainer}>
          <h1>{location}  </h1>
          <h1> {address} </h1>

          <div>
            <Icons
              amenities={amenities}
              rooms={rooms}
              squarefoot={Square_foot}
              iconSize="2.5rem"
              containerWidth="3rem"
              withParagraph={false}
            />
          </div>

          <div className={style.cardbody}>
            <div className={style.cardtext}>
              <p><b>Passive Income Per Token:</b> $ {PIT}</p>
              <p><b>Projected Rental Yield:</b> {PRY} % </p>
              <p><b>Tokens Availables:</b> {AvailablesNFT}</p>
            </div>

            <div className={style.cardbutton}>
              <Link to={`/marketplace/buy/${id}`}>
                <button className={style.button}>Invest Now! </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
