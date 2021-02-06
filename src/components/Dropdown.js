import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selectedOption, onOptionChange }) => {
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef();
    useEffect(() => {
        const onBodyClick = (event) => {
            if (dropDownRef.current && dropDownRef.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };
        document.addEventListener('click', onBodyClick, { capture: true });
        return () => {
            document.removeEventListener('click', onBodyClick);
        }
    }, []);
    const renderedOptions = options.map((option) => {
        if (option.value === selectedOption.value) {
            return null;
        }
        return (
            <div
                key={option.value}
                className='item'
                onClick={() => onOptionChange(option)}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div ref={dropDownRef} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`} >
                    <i className="dropdown icon"></i>
                    <div className="default text">{selectedOption.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div >
            </div>
        </div>
    );
}
export default Dropdown;