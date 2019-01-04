import React from 'react';
import Radium from 'radium';

const style = {
    base: {
        textAlign: 'center',
        margin: '5em'
    },

    title: {
        fontSize: '240%'
    },

    subtitle: {
        fontSize: '160%'
    }
}

const AppHeader = () => {
    return (
        <div style={style.base}>
            <h1 style={style.title}>White Paper Syndrome stops here</h1>
            <h6 style={style.subtitle}>Press the button to get started</h6>
        </div>
    )
}

export default Radium(AppHeader);