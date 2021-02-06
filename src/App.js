import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What is React JS ?',
        content: 'React JS is a front end javascript library.'
    },
    {
        title: 'Why use React JS ?',
        content: 'React JS is easier to learn and enables developers to reuse components.'
    },
    {
        title: 'How to use React JS ?',
        content: 'You can use react.js like any other front end development frameworks , install with npm and try creating an app with it.'
    }
];

const options = [
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Blue',
        value: 'blue'
    },
    {
        label: 'Green',
        value: 'green'
    },
    {
        label: 'Yellow',
        value: 'yellow'
    }
]

const App = () => {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    return (
        <div>
            <Header />
            <Route path='/'>
                <Accordion items={items} />
            </Route>
            <Route path='/search'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown
                    label="Select a color"
                    options={options}
                    selectedOption={selectedOption}
                    onOptionChange={setSelectedOption}
                />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    );
};

export default App;