import React from 'react'
import {  Link } from 'react-router-dom';
import {connect} from 'react-redux'

import {fetchUserData} from 'redux/actions'

import updateWordLists from 'api/updateWordLists'

import WordListBadge from 'components/WordListBadge';
// import WordListPage from 'pages/WordListPage';

import './Dashboard.css'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newWordList: ''
        }

        this.onInputChange = this.onInputChange.bind(this)
        this.handleNewWordList = this.handleNewWordList.bind(this)
    }


    onInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleNewWordList(e) {
        e.preventDefault();

        updateWordLists(this.props.user.wordLists.concat({name: this.state.newWordList}))
            .then((user) => {
                this.props.dispatch(fetchUserData(user))
                this.setState({
                    newWordList: ''
                })
            })
    }
    

    render() {
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
                            this.props.user.wordLists.map(function(wordList, index) {
                                return <Link key={index}  style={{textDecoration: 'none', color: 'inherit'}} to={`dashboard/wordlist/${index}`}> 
                                    <WordListBadge name={wordList.name} /> 
                                </Link>
                            }) 
                        }
                    </div>
                </div> 
                 
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: {
        wordLists: state.user.wordLists
    }
})

export default connect(mapStateToProps)(Dashboard);