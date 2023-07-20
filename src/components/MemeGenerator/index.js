import {Component} from 'react'

import {
  CustomInput,
  CustomLabel,
  FormContainer,
  SelectContainer,
  OptionContainer,
  ButtonInput,
  MemeContainer,
  Text,
  Container,
  Heading,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontInputOptionId: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFont: '',
  }

  onChangeImage = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFont = event => {
    this.setState({activeFontInputOptionId: event.target.value})
  }

  generateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontInputOptionId,
    } = this.state
    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFont: activeFontInputOptionId,
    })
  }

  memeGenerateForm = () => {
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontInputOptionId,
    } = this.state

    return (
      <FormContainer onSubmit={this.generateMeme}>
        <CustomLabel htmlFor="image">Image URL</CustomLabel>
        <CustomInput
          type="text"
          placeholder="Enter The Image Url"
          id="image"
          value={backgroundImageUrlInput}
          onChange={this.onChangeImage}
        />
        <CustomLabel htmlFor="top">Top Text</CustomLabel>
        <CustomInput
          type="text"
          placeholder="Enter The Top Text"
          id="top"
          value={topTextInput}
          onChange={this.onChangeTopText}
        />
        <CustomLabel htmlFor="bottom">Bottom Text</CustomLabel>
        <CustomInput
          type="text"
          placeholder="Enter The Bottom Text"
          id="bottom"
          value={bottomTextInput}
          onChange={this.onChangeBottomText}
        />
        <CustomLabel htmlFor="font">Font Size</CustomLabel>
        <SelectContainer
          id="font"
          value={activeFontInputOptionId}
          onChange={this.onChangeFont}
        >
          {fontSizesOptionsList.map(each => (
            <OptionContainer key={each.optionId} value={each.optionId}>
              {each.displayText}
            </OptionContainer>
          ))}
        </SelectContainer>
        <ButtonInput type="submit">Generate</ButtonInput>
      </FormContainer>
    )
  }

  renderMeme = () => {
    const {backgroundImageUrl, topText, bottomText, activeFont} = this.state

    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImageUrl}>
        <Text activeFont={activeFont}>{topText}</Text>
        <Text activeFont={activeFont}>{bottomText}</Text>
      </MemeContainer>
    )
  }

  render() {
    return (
      <Container>
        <Heading>Meme Container</Heading>
        {this.renderMeme()}
        {this.memeGenerateForm()}
      </Container>
    )
  }
}

export default MemeGenerator
