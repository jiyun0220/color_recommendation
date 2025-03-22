import React, { useState } from 'react';
import ColorPalette from './components/ColorPalette';
import ColorPicker from './components/ColorPicker';
import { generateColorPalettes } from './utils/colorUtils';
import { paletteTitles } from './constants/paletteData';
import {
  Container,
  Header,
  Title,
  Subtitle,
  InputContainer,
  ButtonGroup,
  Button,
  PalettesContainer,
} from './styles/AppStyles';

function App() {
  const [color, setColor] = useState('#FF0000');
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

  const handleRefresh = () => {
    if (palettes.length > 0) {
      const newColor = generateRandomColor();
      setColor(newColor);
      setPalettes(generateColorPalettes(newColor));
    }
  };

  return (
    <Container>
      <Header>
        <Title>
          🎨 Ji's Recommend
        </Title>
        <Subtitle>당신의 색상에 어울리는 조합을 찾아드립니다</Subtitle>
      </Header>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <ColorPicker color={color} onChange={setColor} />
          <ButtonGroup>
            <Button type="submit">
              🔍 조합 찾기
            </Button>
            <Button type="button" onClick={handleRandomPalettes}>
              🎲 랜덤 추천
            </Button>
            {palettes.length > 0 && (
              <Button type="button" variant="secondary" onClick={handleRefresh}>
                🔄 새로고침
              </Button>
            )}
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
    </Container>
  );
}

export default App;