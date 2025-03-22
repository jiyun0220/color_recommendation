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
  background: linear-gradient(135deg, #f6f8fb 0%, #f1f4f9 100%);
  padding: 1rem;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #6c5ce7, #a8a8e6);
    border-radius: 2px;
  }
  
  @media (min-width: 768px) {
    margin-bottom: 3rem;
    
    &::after {
      width: 80px;
    }
  }
`;

const Title = styled.h1`
  background: linear-gradient(135deg, #6c5ce7 0%, #a8a8e6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  font-weight: 800;
  letter-spacing: -0.5px;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  color: #6c5ce7;
  font-size: 1rem;
  margin: 0;
  opacity: 0.8;
  font-weight: 500;
  
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  padding: 1rem;
  border-radius: 24px;
  box-shadow: 
    0 4px 24px -1px rgba(0, 0, 0, 0.05),
    0 0 1px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 1.5rem;
    max-width: none;
  }
`;

const SubmitButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, #6c5ce7 0%, #a8a8e6 100%);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(108, 92, 231, 0.2);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (min-width: 768px) {
    width: auto;
  }
`;

const PalettesContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 768px) {
    gap: 2rem;
  }
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
          <ColorPicker color={color} onChange={setColor} />
          <SubmitButton type="submit">
            🔍 조합 찾기
          </SubmitButton>
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