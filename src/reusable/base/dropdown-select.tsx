import React, { useEffect, useRef } from 'react'
import Multiselect from 'multiselect-react-dropdown';
import $ from 'jquery';

type Props = {
    itemList: any[],
    onSelect: any,
    onRemove: any,
    placeholder: string,
    enabledPreviousSelected: boolean
}

export const DropdownSelect: React.FunctionComponent<Props> = ({ itemList, onSelect, onRemove, placeholder = 'Select', enabledPreviousSelected = false }) => {
    const options: any[] = [];
    const selectRef = useRef<any>();
    itemList.forEach((t, i) => {
        options.push(t)
    });

    const state = {
        options,
    };

    useEffect(() => {
        if (enabledPreviousSelected) {
            onSelect(selectRef.current.state.selectedValues)
        }
    })

    setTimeout(() => {
        $('#search_input').prop('readonly', true);   
    });

    return (
        <Multiselect
            ref={selectRef}
            placeholder={placeholder}
            options={state.options}
            closeOnSelect={false}
            onSelect={(e) => onSelect(e)}
            onRemove={(e) => onRemove(e)}
            groupBy="cat"
            displayValue="key"
        />
    )
}
