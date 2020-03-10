import React from 'react';
import { connect } from 'react-redux'  

import { randomIndex, randomShuffle } from 'utils'

import './WordListTrain.css'

class WordListTrain extends React.Component {
    constructor(props) {
        super(props)
        
        let cards = []
        let words = [...this.props.wordLists[this.props.match.params.wordListId].words ]
        words = randomShuffle(words)
        for (let i = 0; i < Math.min(10, words.length); ++i) {
            let card = {}
            card.word = words[i].word
            card.options = [ {
                translation: words[i].translation,
                isRight: true
            } ]
            let ind = randomIndex(words.length, i, 3)
            for (let j of ind) {
                card.options.push({
                    translation: words[j].translation,
                    isRight: false
                })
            }
            card.options = randomShuffle(card.options)
            cards.push(card)
        }

        this.state = {
            cards: cards
        }
    }

    render() {

        return (
            <div className='WordListTrain'>
                <div className='WordListTrain__container'>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    wordLists: state.user.wordLists
})

export default connect(mapStateToProps)(WordListTrain);