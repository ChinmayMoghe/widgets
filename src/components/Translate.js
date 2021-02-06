import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
const OPTIONS = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];

const Translate = () => {
    /*API KEY on work on localhost:3000 - AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM*/
    const [language, setLanguage] = useState(OPTIONS[0]);
    const [text, setText] = useState('');
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label className="label" htmlFor="userText">Enter Text</label>
                    <input id="userText" value={text} onChange={(e) => setText(e.target.value)}></input>
                </div>
            </div>
            <Dropdown
                label="Select a language"
                selectedOption={language}
                options={OPTIONS}
                onOptionChange={setLanguage} />
            <div>
                <Convert lanaguage={language} text={text} />
            </div>
        </div>
    );
}

export default Translate;