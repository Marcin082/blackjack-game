import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.scss'
import { Deck } from './types/types'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/reducers'
import Round from './components/Round/Round'
import Betting from './components/Betting/Betting'
import { setStart } from './redux/actions/GameActions'
import { SiCashapp } from 'react-icons/si'
import TokensState from './components/TokensState/TokensState'
import Bet from './components/Bet/Bet'

function App () {
  const [deckId, setDeckID] = useState<string>('')
  const [showTokens, setShowTokens] = useState<boolean>(true)
  const [blackJack, setBlackJack] = useState<string>('')
  const game = useSelector((state: RootState) => state.game)
  const dispatch = useDispatch()
  const { gameStart, result, cash, roundStart } = game
  useEffect(() => {
    if (roundStart === false) {
      setShowTokens(true)
    }
    setBlackJack('')
  }, [roundStart])
  const fetchDeck = (): void => {
    axios
      .get<Deck>(
        'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6'
      )
      .then((response) => {
        setDeckID(response.data.deck_id)
      })
  }
  return (
    <div
      style={{
        boxShadow:
          result !== undefined || blackJack !== ''
            ? 'inset 0 0 490px black'
            : ''
      }}
      className="App"
    >
      <div className="Logo">
        <h2 className="LogoHeading">BLACKJACK</h2>
        <img alt="logo" className="Logocard" src={require('./assets/card.png')} />
      </div>
      {!gameStart
        ? (
        <div className="startButton">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <button
            onClick={() => {
              dispatch(setStart())
              fetchDeck()
            }}
            className="startButton__btn"
          >
            Start Game
          </button>
        </div>
          )
        : (
        <>
          <div className="cash">
            <SiCashapp /> {cash}
          </div>
          {gameStart
            ? (
            <Round
              setBlackJack={setBlackJack}
              blackJack={blackJack}
              deckId={deckId}
            />
              )
            : (
            <Betting
              showTokens={showTokens}
              setShowTokens={setShowTokens}
              deckId={deckId}
            />
              )}
          {!roundStart && gameStart && (
            <div className={showTokens ? 'showtokens' : 'closetokens'}>
              <TokensState />
            </div>
          )}
          {gameStart && (
            <div className={roundStart ? 'RoundBet' : 'Bet'}>
              <Bet />
            </div>
          )}
        </>
          )}
    </div>
  )
}

export default App
