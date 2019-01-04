import React from 'react';
import Radium from 'radium';
import Button from '@material-ui/core/Button'

import _audiences from '../../assets/data/audiences';
import _nouns from '../../assets/data/nouns';
import _verbs from '../../assets/data/verbs';

let style = {
    text: {
        fontSize: '160%'
    }
}

class Generator extends React.Component {
    state = {
        idea: '',
        audiences: _audiences,
        nouns: _nouns,
        verbs: _verbs
    }

    generateIdea = (event) => {
        let nums = this.generateNums()
        let _idea = `Build an app that will help ${_audiences[nums[0]]} ${_verbs[nums[1]]} ${_nouns[nums[2]]}` 

        this.setState({
            idea: _idea
        })
    }

    generateNums() {
        let audienceNum = Math.floor(Math.random() * (this.state.audiences.length));
        let verbNum = Math.floor(Math.random() * (this.state.verbs.length));
        let nounNum = Math.floor(Math.random() * (this.state.nouns.length));
        let numsArr = [ audienceNum, verbNum, nounNum ]
        return numsArr
    }

    render() {
        let currentIdea = this.state.idea !== '' ? this.state.idea : ''
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.generateIdea}>Generate Idea</Button>
                <p style={style.text}>{currentIdea}</p>
            </div>
        )
    }
}

export default Radium(Generator);