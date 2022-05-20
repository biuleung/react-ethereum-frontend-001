import React from 'react'
import Multiselect from 'multiselect-react-dropdown';

export const DropdownSelect = ({ itemList, onSelect, onRemove }) => {
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
            options={state.options}
            selectedValues={state.selectedValue}
            onSelect={(e) => onSelect(e)}
            onRemove={(e) => onRemove(e)}
            displayValue="name"
        />
    )
}
