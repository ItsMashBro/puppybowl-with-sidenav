import React from 'react';
import { useOutletContext } from 'react-router-dom';

const puppyroster = () => {
    const wtfIsOutletContextYo = useOutletContext();
    console.log("This is that outlet thingy: ". wtfIsOutletContextYo);

    return (
        <div>
            <p>Here are all the Puppies we have available:</p>

            {
                wtfIsOutletContextYo[0].map((puppy, idx) => {
                    return <div key={idx}>
                        <p>Name: {puppy}</p>
                    </div>
                })
            }
        </div>
    )
}

export default puppyroster;