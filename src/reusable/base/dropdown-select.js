import React, { useEffect, useRef } from 'react'
import Multiselect from 'multiselect-react-dropdown';

export const DropdownSelect = ({ itemList, onSelect, onRemove, placeholder = 'Select', enabledPreviousSelected = false }) => {
    const options = [];
    const selectRef = useRef();
    itemList.forEach((t, i) => {
        options.push({
            name: t,
            id: i
        })
    });

    const state = {
        options,
    };

    useEffect(() => {
        if (enabledPreviousSelected) {
            onSelect(selectRef.current.state.selectedValues)
        }
    })

    return (
        <Multiselect
            ref={selectRef}
            placeholder={placeholder}
            options={state.options}
            closeOnSelect={false}
            onSelect={(e) => onSelect(e)}
            onRemove={(e) => onRemove(e)}
            displayValue="name"
        />
    )
}
