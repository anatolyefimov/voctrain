import React from 'react'
import { Route, Link } from 'react-router-dom';

import getUserData from 'api/getUserData'
import updateWordLists from 'api/updateWordLists'

import WordListBadge from 'components/WordListBadge';
// import WordListPage from 'pages/WordListPage';

import './Dashboard.css'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                username: '',
                vocabluarySize: 0,
                wordLists: [],  
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

        updateWordLists(this.state.user.wordLists.concat({name: this.state.newWordList}))
            .then(() => {
                this.setState(state => {
                    state.user.wordLists.push({ name: state.newWordList })
                    state.newWordList = ''
                    return state;
                })
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
                            this.state.user.wordLists.map(function(wordList, index) {
                                return <Link style={{textDecoration: 'none', color: 'inherit'}} to={`dashboard/wordlist/${index}`}> <WordListBadge key={index} name={wordList.name} /> </Link>
                            }) 
                        }
                    </div>
                </div> 
                 
            </div>
        )
    }
}

export default Dashboard;