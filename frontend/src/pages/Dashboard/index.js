import React from 'react'

import getUserData from 'api/getUserData'

import WordListBadge from 'components/WordListBadge';

import './Dashboard.css'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                username: '',
                vocabluarySize: 0,
                wordLists: {},  
            },
            newWordList: ''
        }

        this.onInputChange = this.onInputChange.bind(this)
        this.handleNewWordList = this.handleNewWordList.bind(this)
    }

    componentDidMount() {
        getUserData()
            .then(user => {
                this.setState({
                    user: {
                        username: user['username'],
                        vocabluarySize: user['vocabluary_size'],
                        wordLists: user['word_lists']
                    }
                })
            })
    }

    onInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleNewWordList(e) {
        e.preventDefault();
        
        this.setState(state => {
            state.user.wordLists[state.newWordList] = {};
            state.newWordList = ''
            return state;
        })
    }
    

    render() {
        // console.log(this.state.user.wordLists)
        return (
            <div className='Dashboard'>
                <div className='word-lists'>
                    <div className='word-lists__menu'> 
                        <span className='word-lists__title'> Your word lists </span>
                        <form className='word-lists__new' method="POST" onSubmit={this.handleNewWordList}>
                            <button type='submit'>+</button>
                            <input 
                                placeholder='Type name of new word list...' 
                                name='newWordList' 
                                type='text' 
                                onChange={this.onInputChange}
                                value={this.state.newWordList}
                            />
                        </form>
                    </div>
                    <div className='word-lists__container'>
                        {
                            Object.keys(this.state.user.wordLists).map(function(name) {
                                return <WordListBadge key={name} name={name} />
                            }) 
                        }
                    </div>
                </div>        
            </div>
        )
    }
}

export default Dashboard;