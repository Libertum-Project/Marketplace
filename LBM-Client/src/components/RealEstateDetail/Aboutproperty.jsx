const Aboutproperty = () => {

    return (
        <div className="w-[50rem]">
            <div className="collapse collapse-arrow ">
                <input type="radio" name="my-accordion-2" checked="checked" /> 
                <div className="collapse-title text-xl font-medium">
                    Details
                </div>
                <div className="collapse-content"> 
                    <div className="">
                <table className="table">
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>Amenities </th>
                        <td>Kitchen, WiFi, Free Parking</td>
                    </tr>
                    {/* row 2 */}
                    <tr >
                        <th>Rooms</th>
                        <td>5 beds, 3 toilets</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>Adress: </th>
                        <td>102 Cove Lane, St Louis</td>
                    </tr>

                    <tr>
                        <th>Ocuppancy Status: </th>
                        <td>Free</td>
                    </tr>
                    </tbody>
                </table>
                </div>

                </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Financials
                </div>
                
                <div className="collapse-content"> 
                    <div className="">
                <table className="table">
                <tbody>
                    <tr>
                        <th>Market value of the property</th>
                        <td>20000</td>
                    </tr>
                    <tr className="">
                        <th>Percent of property tokenised</th>
                        <td>56</td>
                    </tr>
                    <tr>
                        <th>Rental yield</th>
                        <td>11.2</td>
                    </tr>
                    <tr>
                        <th>Number of F-NFT available:</th>
                        <td>1400</td>
                    </tr>
                    <tr>
                        <th>Passive Income per token</th>
                        <td>...</td> {/* Placeholder for the value */}
                    </tr>
                    <tr>
                        <th>Passive income calculator</th>
                        <td>...</td> {/* Placeholder for the value */}
                    </tr>
                    <tr>
                        <th>Number of tokens to be purchased:</th>
                        <td>...</td> {/* Placeholder for the value */}
                    </tr>
                    <tr>
                        <th>Monthly Passive Income - Calculator*</th>
                        <td>...</td> {/* Placeholder for the value */}
                    </tr>
                    <tr>
                        <th>Annual Passive Income - Calculator*</th>
                        <td>...</td> {/* Placeholder for the value */}
                    </tr>
                    </tbody>
                </table>
                </div>
                </div>
                </div>
                <div className="collapse collapse-arrow ">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Documents
                </div>
                <div className="collapse-content"> 
                    <p>Property Insurance Document</p>
                    <p>Charge Document</p>
                </div>
                

                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Buying Process
                </div>
                <div className="collapse-content"> 
                    <p>Buying Process content</p>
                </div>
                </div>


</div>
            
        </div>     
    )};


export default Aboutproperty; 