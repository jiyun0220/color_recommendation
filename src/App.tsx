import React, { useState } from 'react';
import styled from 'styled-components';
import ColorPalette from './components/ColorPalette';
import ColorPicker from './components/ColorPicker';
import { generateColorPalettes } from './utils/colorUtils';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
  padding: 2rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  color: #6c5ce7;
  margin-bottom: 0.5rem;
  font-size: 3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Subtitle = styled.p`
  color: #a8a8e6;
  font-size: 1.2rem;
  margin: 0;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const SubmitButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #6c5ce7;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #5b4bc4;
    transform: translateY(-2px);
  }
`;

const PalettesContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const paletteTitles = [
  { title: '보색 조합', emoji: '🎨' },
  { title: '삼색 조합', emoji: '🌈' },
  { title: '파스텔톤', emoji: '🌸' },
  { title: '그라데이션', emoji: '✨' },
  { title: '보색 + 중간색', emoji: '🎯' },
  { title: '보색 + 보색의 보색', emoji: '🎭' },
  { title: '파스텔톤 + 보색', emoji: '💫' },
  { title: '그라데이션 + 보색', emoji: '🌟' },
];

function App() {
  const [color, setColor] = useState('#FF0000');
  const [palettes, setPalettes] = useState<string[][]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (color.match(/^#[0-9A-Fa-f]{6}$/)) {
      setPalettes(generateColorPalettes(color));
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
          <ColorPicker
            color={color}
            onChange={setColor}
          />
          <SubmitButton type="submit">
            추천받기 ✨
          </SubmitButton>
        </InputContainer>
      </form>

      <PalettesContainer>
        {palettes.map((palette, index) => (
          <ColorPalette
            key={index}
            title={paletteTitles[index].title}
            colors={palette}
            emoji={paletteTitles[index].emoji}
          />
        ))}
      </PalettesContainer>
    </Container>
  );
}

export default App; 