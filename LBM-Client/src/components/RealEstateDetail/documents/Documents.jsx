import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import plano1 from "./plano1.pdf"
import plano2 from "./plano2.pdf"
import document1 from "./Register1.pdf"
import document2 from "./Register2.pdf"
import document3 from "./Register4.pdf"
import document4 from "./Register5.pdf"
import document5 from "./policy.pdf"
import document6 from "./otro.pdf"
import document7 from "./otro2.pdf"
import  style  from "../Aboutproperty.module.scss"
import { BsDownload } from "react-icons/bs"



const Documents = () => {

  const color= "#F7931A"

  const { id } = useParams();
  const propertyId = parseInt(id);
  console.log(propertyId);
  
if (propertyId !== 25) {
  return (
    <div className={style.downloadContainer}>
      <p className={style.download}> 
      No documents for this property
      </p>
    </div>
  );
}


    return(
        <div className={style.downloadContainer}>
            
            <Link
             to={plano1}
             target="_blank"
             rel="noopener noreferrer"
             download="plano1.pdf"                  
           >
            <p className={style.download}>            
                 
              <span style={{ display: 'inline-flex', alignItems: 'center',  marginLeft: '10px', marginRight: '5px', borderRadius: '50%', backgroundColor: color,    padding: '5px'}}>
                <BsDownload />              
              </span>
              Download <b>Floor Plan</b>
            </p>
            </Link>

                      <Link
             to={plano2}
             target="_blank"
             rel="noopener noreferrer"
             download="plano1.pdf"                  
           >
            <p className={style.download}>            
                 
              <span style={{ display: 'inline-flex', alignItems: 'center',  marginLeft: '10px', marginRight: '5px', borderRadius: '50%', backgroundColor: color,    padding: '5px'}}>
                <BsDownload />              
              </span>
              Download <b>Floor Plan 23 High Street</b>
            </p>
            </Link>
          

            <Link
             to={document1}
             target="_blank"
             rel="noopener noreferrer"
             download="plano1.pdf"                  
           >
            <p className={style.download}>
            <span style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '10px', marginRight: '5px', borderRadius: '50%', backgroundColor: color,    padding: '5px'}}>
                <BsDownload />
              </span>
              Download <b>Title 21 High Street</b></p>

              </Link>

            <Link
             to={document2}
             target="_blank"
             rel="noopener noreferrer"
             download="plano1.pdf"                  
           >
            <p className={style.download}
            >
            <span style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '10px', marginRight: '5px', borderRadius: '50%', backgroundColor: color,    padding: '5px'}}>
                <BsDownload />
              </span>
              Download <b>Title 23 High Street</b></p>

            </Link>

            
            <Link
             to={document4}
             target="_blank"
             rel="noopener noreferrer"
             download="plano1.pdf"                  
           >
            <p className={style.download}
            >
            <span style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '10px', marginRight: '5px', borderRadius: '50%', backgroundColor: color,    padding: '5px'}}>
                <BsDownload />
              </span>
              Download <b>Smart Contract</b></p>

            </Link>

            
            <Link
             to={document3}
             target="_blank"
             rel="noopener noreferrer"
             download="plano1.pdf"                  
           >
            <p className={style.download}
            >
            <span style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '10px', marginRight: '5px', borderRadius: '50%', backgroundColor: color,    padding: '5px'}}>
                <BsDownload />
              </span>
              Download <b>Mortgage Document</b></p>

            </Link>

            
            <Link
             to={document5}
             target="_blank"
             rel="noopener noreferrer"
             download="plano1.pdf"                  
           >
            <p className={style.download}
            >
            <span style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '10px', marginRight: '5px', borderRadius: '50%', backgroundColor: color,    padding: '5px'}}>
                <BsDownload />
              </span>
              Download <b>Encumbrance Certificate</b></p>

            </Link>

            <Link
             to={document6}
             target="_blank"
             rel="noopener noreferrer"
             download="plano1.pdf"                  
           >
            <p className={style.download}
            >
            <span style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '10px', marginRight: '5px', borderRadius: '50%', backgroundColor: color,    padding: '5px'}}>
                <BsDownload />
              </span>
              Download <b>Lease document 21 High Street</b></p>

            </Link>

            <Link
             to={document7}
             target="_blank"
             rel="noopener noreferrer"
             download="plano1.pdf"                  
           >
            <p className={style.download}
            >
            <span style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '10px', marginRight: '5px', borderRadius: '50%', backgroundColor: color,    padding: '5px'}}>
                <BsDownload />
              </span>
              Download <b>Lease document 23 High Street</b></p>

            </Link>

        </div>
    )}; 

export default Documents; 
