import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <html>
                <meta></meta>
                <body>
                    {this.props.children}
                    <script src="/bundle.js"></script>
                </body>
            </html>
        );
    }
}

module.exports = Layout;