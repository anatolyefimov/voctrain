import React from 'react';
import { connect } from 'react-redux'

import { updateWordLists as  updateWordListsAction } from 'redux/actions'

import translate from 'api/translate'
import updateWordLists from 'api/updateWordLists';

import './WordListPage.css'


class WordListPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            translatorInput: '',
            translatorOutput: ''
        }

        this.onTextAreaChange = this.onTextAreaChange.bind(this)
        this.onNewWord = this.onNewWord.bind(this)
    }

    onNewWord(e) {
        e.preventDefault();
        
        let wordLists = [...this.props.user.wordLists]
        wordLists[this.props.match.params.wordListId].words = wordLists[this.props.match.params.wordListId].words || []
        wordLists[this.props.match.params.wordListId].words.push({
            word: this.state.translatorInput,
            translation: this.state.translatorOutput
        })
        updateWordLists(wordLists)
            .then(user => {
                this.props.dispatch(updateWordListsAction(user.wordLists))
                this.setState({
                    translatorInput: '',
                    translatorOutput: ''
                })
            })
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
            <form className='WordListPage' onSubmit={this.onNewWord}>
                <div className='word-list-info'>
                    <h1 className='word-list-info__header'>{this.props.user.wordLists[this.props.match.params.wordListId].name}</h1>
                </div>
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

                    {
                            
                            this.props.user.wordLists[ this.props.match.params.wordListId ].words.map((item, key) => 
                                <div className='word'>
                                    <div className='word__english'>
                                        {item.word}
                                    </div>
                                    <div className='word__translation'>
                                        {item.translation}
                                    </div>
                                </div>
                            )
                    }
                </div>
            </form>
        )
    }
   
}


const mapStateToProps = state => ({
      user: {
        wordLists: state.user.wordLists
    }
})

export default connect(mapStateToProps)(WordListPage);