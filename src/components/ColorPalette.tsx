import React from 'react';
import styled from 'styled-components';

const PaletteContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 1rem;
  margin: 2rem 0;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const PaletteRow = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  min-width: min-content;
`;

const ColorCard = styled.div<{ color: string }>`
  width: 150px;
  height: 150px;
  background-color: ${props => props.color};
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const PaletteTitle = styled.h3`
  color: #6c5ce7;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

interface ColorPaletteProps {
  title: string;
  colors: string[];
  emoji: string;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ title, colors, emoji }) => {
  return (
    <PaletteContainer>
      <PaletteTitle>
        {emoji} {title}
      </PaletteTitle>
      <PaletteRow>
        {colors.map((color, index) => (
          <ColorCard key={index} color={color}>
            {color}
          </ColorCard>
        ))}
      </PaletteRow>
    </PaletteContainer>
  );
};

export default ColorPalette; 