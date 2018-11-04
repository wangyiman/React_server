import React from 'react';
import ReactDOM from 'react-dom';
import Default from './layout/Default.js';
import Content from '../assets/src/js/home/app.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { mydata } = this.props;
        let urls = [`${mydata.domain}`];
        return (
            <Default 
                scriptUrls={urls}>
                <div id='demoApp'
                     data-mydata={JOSN.stringfy}>
                    <Content mydata={mydata.name}></Content>
                </div>
            </Default>
        );
    }
}

module.exports = Home;