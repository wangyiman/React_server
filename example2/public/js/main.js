import React from 'react';
import ReactDOM from 'react-dom';

function InitApp() {
    var container = document.getElementById('content');
    var data = JSON.parse(container.getAttribute('data-mydata'));
    
    ReactDOM.render(
        <div>
            {data}
        </div>,
        container
    );
}

InitApp();