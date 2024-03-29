import { useState } from 'react';
import './country.css'

const Country = ({ country }) => {
    const {name, flags, capital, cca3} = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () =>{
        setVisited(!visited)
    }

    return (
        <div className='country'>
            <h2>Name: {name?.common}</h2>
            <h3>Flag Image</h3>
            <img src={flags.png} alt="" />
            <h2>Capital City: {capital}</h2>
            <h3>Code: {cca3}</h3>
            <button onClick={handleVisited}>{visited ? 'Visited': "I want visit"}</button>
            {/* {visited ? 'I have visited in this country' : 'I still not visited in this country'} */}

        </div>
    );
};

export default Country;