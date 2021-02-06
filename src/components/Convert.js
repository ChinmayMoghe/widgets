import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ lanaguage, text }) => {
    const [translatedText, setTranslatedText] = useState('');
    const [debouncedText, setdebouncedText] = useState('');
    /* 
    debounce the translation of input text by 500 ms - set debounced text after 500ms ,
    api call will be made after user stops typing and 500ms has passed.
    */
    useEffect(() => {
        const timerId = setTimeout(() => {
            setdebouncedText(text);
        }, 500);
        return () => {
            clearTimeout(timerId);
        };
    }, [text]);
    useEffect(() => {
        console.log('New language or text ');
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: lanaguage.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslatedText(data.data.translations[0].translatedText);
        };
        doTranslation();
    }, [lanaguage, debouncedText]);
    return (
        <div>
            <h1 style={{ marginTop: '20px' }} className="ui header">
                {translatedText}
            </h1>
        </div>
    );
}

export default Convert;