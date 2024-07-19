import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import GameOptions from '../GameOptions'

import {
  AppContainer,
  ResponsiveContainer,
  OptionsContainer,
  Option,
  ScoreContainer,
  ScoreText,
  ScoreNumber,
  GameViewContainer,
  PopupContainer,
  TriggerButton,
  CloseButton,
  PopupBody,
  PopupImg,
  GameOptionList,
  GameResultViewContainer,
  SelectOptionContainer,
  GameUserOptionContainer,
  GameUser,
  GameUserImg,
  PlayAgainButton,
} from './styledComponents'

const gameStatusConstants = {
  inProgress: 'IN_PROGRESS',
  win: 'WIN',
  lost: 'LOST',
  draw: 'DRAW',
}

class Home extends Component {
  state = {
    score: 0,
    gameStatus: gameStatusConstants.inProgress,
    userChoice: '',
    gameChoice: '',
  }

  onClickSetUserChoice = id => {
    this.setState(
      {userChoice: id, gameChoice: this.getGameChoice()},
      this.elevatedGame,
    )
  }

  onClickGoTOGameView = () => {
    this.setState({gameStatus: gameStatusConstants.inProgress})
  }

  getGameChoice = () => {
    const {choicesList} = this.props
    const gameChoiceList = choicesList.map(choice => choice.id)
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    return gameChoiceList[randomIndex]
  }

  elevatedGame = () => {
    const {userChoice, gameChoice} = this.state
    if (userChoice === gameChoice) {
      this.setState({gameStatus: gameStatusConstants.draw})
    } else if (userChoice === 'ROCK') {
      if (gameChoice === 'SCISSORS') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'PAPER') {
      if (gameChoice === 'ROCK') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'SCISSORS') {
      if (gameChoice === 'PAPER') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    }
  }

  renderGameInProgressView = () => {
    const {choicesList} = this.props
    return (
      <GameOptionList>
        {choicesList.map(eachOption => (
          <GameOptions
            key={eachOption.id}
            optionDetials={eachOption}
            onClickSetUserChoice={this.onClickSetUserChoice}
          />
        ))}
      </GameOptionList>
    )
  }

  renderGameWonView = () => {
    const {gameChoice, userChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjectlist = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectlist[0]
    const gameChoiceObjectList = choicesList.filter(
      choice => choice.id === gameChoice,
    )
    const gameChoiceObject = gameChoiceObjectList[0]

    return (
      <GameResultViewContainer>
        <SelectOptionContainer>
          <GameUserOptionContainer>
            <GameUser>You</GameUser>
            <GameUserImg src={userChoiceObject.image} alt="your choice" />
          </GameUserOptionContainer>
          <GameUserOptionContainer>
            <GameUser>Other</GameUser>
            <GameUserImg src={gameChoiceObject.image} alt="your choice" />
          </GameUserOptionContainer>
        </SelectOptionContainer>
        <ResultText>YOU WIN</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickGoTOGameView}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameLostView = () => {
    const {gameChoice, userChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjectlist = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectlist[1]
    const gameChoiceObjectList = choicesList.filter(
      choice => choice.id === gameChoice,
    )
    const gameChoiceObject = gameChoiceObjectList[1]
    return (
      <GameResultViewContainer>
        <SelectOptionContainer>
          <GameUserOptionContainer>
            <GameUser>You</GameUser>
            <GameUserImg src={userChoiceObject.imageUrl} alt="your choice" />
          </GameUserOptionContainer>
          <GameUserOptionContainer>
            <GameUser>Other</GameUser>
            <GameUserImg src={gameChoiceObject.imageUrl} alt="your choice" />
          </GameUserOptionContainer>
        </SelectOptionContainer>
        <ResultText>YOU LOSE</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickGoTOGameView}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameDrawView = () => {
    const {gameChoice, userChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjectlist = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectlist[2]
    const gameChoiceObjectList = choicesList.filter(
      choice => choice.id === gameChoice,
    )
    const gameChoiceObject = gameChoiceObjectList[2]
    return (
      <GameResultViewContainer>
        <SelectOptionContainer>
          <GameUserOptionContainer>
            <GameUser>You</GameUser>
            <GameUserImg src={userChoiceObject.imageUrl} alt="your choice" />
          </GameUserOptionContainer>
          <GameUserOptionContainer>
            <GameUser>Other</GameUser>
            <GameUserImg src={gameChoiceObject.imageUrl} alt="your choice" />
          </GameUserOptionContainer>
        </SelectOptionContainer>
        <ResultText>IT IS DRAW</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickGoTOGameView}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameView = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case gameStatusConstants.inProgress:
        return this.renderGameInProgressView()
      case gameStatusConstants.win:
        return this.renderGameWonView()
      case gameStatusConstants.lost:
        return this.renderGameLostView()
      case gameStatusConstants.draw:
        return this.renderGameDrawView()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state
    return (
      <AppContainer>
        <ResponsiveContainer>
          <OptionsContainer>
            <Option>
              ROCK
              <br />
              <br />
              PAPER
              <br />
              <br />
              SCISSORS
            </Option>
          </OptionsContainer>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <ScoreNumber>{score}</ScoreNumber>
          </ScoreContainer>
        </ResponsiveContainer>

        <GameViewContainer>{this.renderGameView()}</GameViewContainer>

        <PopupContainer>
          <Popup
            modal
            trigger={<TriggerButton type="button">Rules</TriggerButton>}
            closeOnEscape
            window
          >
            {close => (
              <PopupBody>
                <PopupImg
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
              </PopupBody>
            )}
          </Popup>
        </PopupContainer>
      </AppContainer>
    )
  }
}
export default Home
