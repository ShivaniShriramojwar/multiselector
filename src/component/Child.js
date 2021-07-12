import React, { useState } from 'react'
import Multiselect from 'multiselect-react-dropdown';

function Child() {

    const data = [
        { Social: 'Children', id: 1 },
        { Social: 'Child consultant', id: 2 },
        { Social: 'Child media management', id: 3 },
        { Social: 'Child malnutrition', id: 4 },
    ]



    const [options] = useState(data);
    return (
        <div    className="container">

            <div  >
                <div className="tags">
                    TAGS
                </div>
                <div className="time" > <i> Select time for your event</i>

                </div>
                <Multiselect options={options}
             

                    displayValue="Social" placeholder="Add Tags" closeIcon="cancel" />

            </div>
        </div>
    )
}
export default Child;