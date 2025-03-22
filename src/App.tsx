import React, { useState } from 'react';
import ColorPalette from './components/ColorPalette';
import ColorPicker from './components/ColorPicker';
import { generateColorPalettes } from './utils/colorUtils';
import { paletteTitles } from './constants/paletteData';
import {
  Container,
  Header,
  HeaderContent,
  Logo,
  Main,
  MainHeader,
  Title,
  Subtitle,
  InputContainer,
  ButtonGroup,
  Button,
  PalettesContainer,
} from './styles/AppStyles';

function App() {
  const [color, setColor] = useState('#8B5CF6');
  const [palettes, setPalettes] = useState<string[][]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (color.match(/^#[0-9A-Fa-f]{6}$/)) {
      setPalettes(generateColorPalettes(color));
    }
  };

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let randomColor = '#';
    for (let i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
  };

  const handleRandomPalettes = () => {
    const randomColor = generateRandomColor();
    setColor(randomColor);
    setPalettes(generateColorPalettes(randomColor));
  };

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Logo>
            <img src="/logo.svg" alt="Ji's Recommend" />
            <span>Ji's Recommend</span>
          </Logo>
        </HeaderContent>
      </Header>
      <Main>
        <MainHeader>
          <Title>당신의 색상에 어울리는 조합을 찾아드립니다</Title>
          <Subtitle>원하는 색상 코드를 입력하고 조합 찾기 버튼을 눌러보세요</Subtitle>
        </MainHeader>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <ColorPicker color={color} onChange={setColor} />
            <ButtonGroup>
              <Button type="submit">조합 찾기</Button>
              <Button type="button" onClick={handleRandomPalettes} variant="secondary">
                랜덤 추천
              </Button>
            </ButtonGroup>
          </InputContainer>
        </form>
        <PalettesContainer>
          {palettes.map((palette, index) => (
            <ColorPalette
              key={index}
              colors={palette}
              title={paletteTitles[index].title}
              emoji={paletteTitles[index].emoji}
            />
          ))}
        </PalettesContainer>
      </Main>
    </Container>
  );
}

export default App;