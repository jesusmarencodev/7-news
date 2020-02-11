import React, {useState} from 'react';

const useSelect = (initialState, options) => {
    //state custom hook useSelect
    const [state, setState]=useState('');


    const SelectNews = () => (
        <select 
            className="browser-default"
        >
            <option value="">Select</option>
        </select>
    );

    return [state, SelectNews];
};

export default useSelect;