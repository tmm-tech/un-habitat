import React, { useState } from 'react';
import './Region_Countries.css'; // Your CSS file
import TopBar from '../Components/TopBar';
import Footer from '../Components/Footer';

const RegionCountries = () => {
    const regions = [
        {
            name: 'Africa',
            countries: [
                { name: 'Nigeria', code: 'NG' },
                { name: 'Egypt', code: 'EG' },
                { name: 'South Africa', code: 'ZA' },
                { name: 'Kenya', code: 'KE' },
                { name: 'Ethiopia', code: 'ET' },
                { name: 'Algeria', code: 'DZ' },
                { name: 'Ghana', code: 'GH' },
                { name: 'Morocco', code: 'MA' },
                { name: 'Tanzania', code: 'TZ' },
                { name: 'Uganda', code: 'UG' },
            ],
        },
        {
            name: 'Asia',
            countries: [
                { name: 'China', code: 'CN' },
                { name: 'India', code: 'IN' },
                { name: 'Indonesia', code: 'ID' },
                { name: 'Pakistan', code: 'PK' },
                { name: 'Bangladesh', code: 'BD' },
                { name: 'Japan', code: 'JP' },
                { name: 'Philippines', code: 'PH' },
                { name: 'Vietnam', code: 'VN' },
                { name: 'Iran', code: 'IR' },
                { name: 'Turkey', code: 'TR' },
                // Add more countries here
            ],
        },
        {
            name: 'Oceania',
            countries: [
                { name: 'Australia', code: 'AU' },
                { name: 'New Zealand', code: 'NZ' },
                { name: 'Fiji', code: 'FJ' },
                { name: 'Papua New Guinea', code: 'PG' },
                { name: 'Vanuatu', code: 'VU' },
                { name: 'Samoa', code: 'WS' },
                { name: 'Tonga', code: 'TO' },
                { name: 'Solomon Islands', code: 'SB' },
                { name: 'Kiribati', code: 'KI' },
                { name: 'Micronesia', code: 'FM' },
                // Add more countries here
            ],
        },
        {
            name: 'America',
            countries: [
                { name: 'United States', code: 'US' },
                { name: 'Canada', code: 'CA' },
                { name: 'Brazil', code: 'BR' },
                { name: 'Mexico', code: 'MX' },
                { name: 'Argentina', code: 'AR' },
                { name: 'Colombia', code: 'CO' },
                { name: 'Peru', code: 'PE' },
                { name: 'Chile', code: 'CL' },
                { name: 'Venezuela', code: 'VE' },
                { name: 'Ecuador', code: 'EC' },
                // Add more countries here
            ],
        },
        {
            name: 'Europe',
            countries: [
                { name: 'Germany', code: 'DE' },
                { name: 'France', code: 'FR' },
                { name: 'United Kingdom', code: 'GB' },
                { name: 'Italy', code: 'IT' },
                { name: 'Spain', code: 'ES' },
                { name: 'Netherlands', code: 'NL' },
                { name: 'Sweden', code: 'SE' },
                { name: 'Poland', code: 'PL' },
                { name: 'Greece', code: 'GR' },
                { name: 'Switzerland', code: 'CH' },
                // Add more countries here
            ],
        },
    ];

    const [expandedRegion, setExpandedRegion] = useState(null);

    const toggleExpand = (regionIndex) => {
        if (expandedRegion === regionIndex) {
            setExpandedRegion(null);
        } else {
            setExpandedRegion(regionIndex);
        }
    };

    return (
        <>
            <TopBar />
            <div className="regions-container">
                {regions.map((region, index) => (
                    <div key={index} className="region">
                        <div className="region-header" onClick={() => toggleExpand(index)}>
                            <span>{region.name}</span>
                            {expandedRegion === index ? (
                                <i className="fa fa-chevron-up"></i>
                            ) : (
                                <i className="fa fa-chevron-down"></i>
                            )}
                        </div>
                        {expandedRegion === index && (
                            <ul className="countries-list">
                                {region.countries.map((country, countryIndex) => (
                                    <li key={countryIndex}>
                                        <div className="circular-image">
                                            <img
                                                src={`https://flagsapi.com/${country.code}/flat/64.png`}
                                                alt={`${country.name}`}
                                            />
                                        </div>
                                        {country.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default RegionCountries;
