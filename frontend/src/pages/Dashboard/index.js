import React from 'react'

import getUserData from 'api/getUserData'

import './Dashboard.css'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                username: '',
                vocabluarySize: 0,
                wordLists: {}
            }
        }
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

    render() {
        return (
            <div className='Dashboard'>
                <div className='word-lists'>
                    <div className='word-lists__menu'> 
                        <span className='word-lists__title'> Your word lists </span>
                        <div className='word-lists__new'>
                            <button>+</button>
                            <input placeholder='Type name of new word list...' type='text' />
                        </div>
                    </div>
                </div>        
            </div>
        )
    }
}

export default Dashboard;