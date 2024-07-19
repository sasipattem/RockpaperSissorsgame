import {OptionListItem, GameOptionButton, OptionImage} from './styledComponents'

const GameOptions = props => {
  const {optionDetials, onClickSetUserChoice} = props
  const {imageUrl, id} = optionDetials
  const userChoice = () => {
    onClickSetUserChoice(id)
  }
  return (
    <OptionListItem>
      <GameOptionButton
        type="button"
        data-testid={`${id.toLowerCase()}Button`}
        onClick={userChoice}
      >
        <OptionImage src={imageUrl} alt={id} />
      </GameOptionButton>
    </OptionListItem>
  )
}

export default GameOptions
