import React, { useState } from 'react';
import '../Pages/Region_Countries.css'
const RegionDropdown = ({ regions, onSelectRegion }) => {


    const [selectedRegion, setSelectedRegion] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleRegionSelect = (region) => {
        setSelectedRegion(region);
        setIsDropdownOpen(false);
    };

    return (
        <div className="region-selector">
            <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
                <div className="selected-region" onClick={toggleDropdown}>
                    {selectedRegion || 'Select a region'}
                </div>
                <div className="dropdown-options">
                    {regions.map((region) => (
                        <div
                            key={region}
                            className="dropdown-option"
                            onClick={() => handleRegionSelect(region)}
                        >
                            {region}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RegionDropdown;
