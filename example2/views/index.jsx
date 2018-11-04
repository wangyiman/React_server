import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout> 
                <div 
                    id='content'
                    data-mydata={JSON.stringify(this.props.name)}>
                    Hello
                </div>
            </Layout>
        );
    }
}

module.exports = Index;