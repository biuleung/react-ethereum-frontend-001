import React from 'react'
import Multiselect from 'multiselect-react-dropdown';

export const DropdownSelect = ({ itemList, onSelect, onRemove, placeholder = 'Select' }) => {
    const options = [];
    itemList.forEach((t, i) => {
        options.push({
            name: t,
            id: i
        })
    });

    const state = {
        options
    };

    return (
        <Multiselect
            placeholder={placeholder}
            options={state.options}
            selectedValues={state.selectedValue}
            onSelect={(e) => onSelect(e)}
            onRemove={(e) => onRemove(e)}
            displayValue="name"
        />
    )
}
