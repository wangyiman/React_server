import ReactDOM from 'react-dom';
import React, { Component, PropTypes } from 'react';
import Content from './content.js';

const appEle = document.getElementById('demoApp');
let mydata = JSON.parse(appEle.getAttribute('data-mydata'));
//mydata.name += ', welcome ';

ReactDOM.render(<Content mydata={mydata} /> , appEle);