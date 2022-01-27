import React, { useState } from 'react';

import PropTypes from 'prop-types';

export const AdCategory = ({ setcategories }) => {
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setinputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setcategories(cats => [inputValue,...cats]);

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                {/* <button type='submit'>Agregar</button> */}
            </form>
        </>
    )
};

AdCategory.prototype = {
    setcategories: PropTypes.func.isRequired
}