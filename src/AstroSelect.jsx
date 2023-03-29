import * as React from 'react';

const AstroSelect = ({ onDateChange }) => {
    const handleChange = (e) => {
        onDateChange(e.target.value);
    }

    return (
        <div>
            <input type="date" onChange={handleChange}></input>
        </div>
    )
}

export default AstroSelect;