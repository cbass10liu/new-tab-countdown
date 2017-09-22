import React from 'react';
import ReactDOM from 'react-dom';
import CountdownList from './CountdownList';
import { DROPDOWN_OPTIONS } from '../constants/DropdownOptions';
import '../styles/site.scss';

const INTERVAL = 100;
const MAX_NUM_COUNTDOWN = 3;
chrome.storage.sync.get((value) => {
    ReactDOM.render(
        <CountdownList
            countdownList={value && value.countdownList ? value.countdownList : undefined}
            interval={INTERVAL}
            maxNumCountdown={MAX_NUM_COUNTDOWN}
        />,
        document.getElementById('container')
    );
});
