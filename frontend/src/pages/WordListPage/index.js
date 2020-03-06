import React from 'react';

import translate from 'api/translate'

import './WordListPage.css'

class WordListPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            translatorInput: '',
            translatorOutput: ''
        }

        this.onTextAreaChange = this.onTextAreaChange.bind(this)
    }

    onTextAreaChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        setTimeout(() =>  translate(this.state.translatorInput)
            .then(res => {
                this.setState({
                    translatorOutput: (res.text ? res.text[0] : '')
                })
            })
        , 100)

    }

    render() {
        return (
            <form className='WordListPage'>
                <h1>word list ID { this.props.match.params.wordListId }</h1> 
                <div className='WordListPage__word-list'>
                    <div className='translator'>
                        <input className='translator__input' 
                            placeholder='Type new english word'
                            name='translatorInput' 
                            value={this.state.translatorInput} 
                            onChange={this.onTextAreaChange} 
                        />
                        <textarea 
                            className='translator__output' 
                            placeholder='The translation will be here'
                            name='translatorOutput' 
                            value={this.state.translatorOutput} 
                            readOnly 
                        />
                    </div>
                </div>
            </form>
        )
    }
   
}


export default WordListPage