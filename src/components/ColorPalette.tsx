import React, { useState } from 'react';
import styled from 'styled-components';

const PaletteContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 1rem;
  margin: 1rem 0;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  
  @media (min-width: 768px) {
    margin: 2rem 0;
  }
`;

const PaletteRow = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    padding: 1rem;
    overflow-x: visible;
  }
`;

const ColorCard = styled.div<{ color: string }>`
  min-width: 100px;
  aspect-ratio: 1;
  background-color: ${props => props.color};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.75rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.2s;
  position: relative;
  word-break: break-all;
  padding: 0.25rem;
  text-align: center;
  flex-shrink: 0;

  @media (min-width: 768px) {
    min-width: unset;
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 12px;
    flex-shrink: 1;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const CopyMessage = styled.div<{ show: boolean }>`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.2s;
`;

const PaletteHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0 0.5rem;
  
  @media (min-width: 768px) {
    padding: 0 1rem;
  }
`;

const PaletteTitle = styled.h3`
  color: #6c5ce7;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const PreviewButton = styled.button`
  background: none;
  border: none;
  color: #6c5ce7;
  cursor: pointer;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background-color 0.2s;

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 4px 12px;
  }

  &:hover {
    background-color: rgba(108, 92, 231, 0.1);
  }
`;

const PreviewContainer = styled.div<{ show: boolean }>`
  height: ${props => props.show ? 'auto' : '0'};
  overflow: hidden;
  transition: height 0.3s;
  margin-top: ${props => props.show ? '1rem' : '0'};
`;

const PreviewContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
`;

const PreviewItem = styled.div<{ colors: string[] }>`
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    height: 200px;
  }

  &.app-icon {
    background: ${props => props.colors[0]};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    color: ${props => props.colors[1] || '#fff'};
    
    @media (min-width: 768px) {
      font-size: 4rem;
    }
  }

  &.website-header {
    background: ${props => props.colors[0]};
    padding: 0.5rem;
    
    @media (min-width: 768px) {
      padding: 1rem;
    }
    
    .nav {
      background: ${props => props.colors[1] || 'rgba(255, 255, 255, 0.1)'};
      height: 24px;
      border-radius: 4px;
      
      @media (min-width: 768px) {
        height: 40px;
      }
    }
    
    .content {
      margin-top: 0.5rem;
      height: 60px;
      background: ${props => props.colors[2] || 'rgba(255, 255, 255, 0.05)'};
      border-radius: 4px;
      
      @media (min-width: 768px) {
        margin-top: 1rem;
        height: 100px;
      }
    }
  }

  &.logo {
    background: ${props => props.colors[0]};
    display: flex;
    align-items: center;
    justify-content: center;
    
    .circle {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: ${props => props.colors[1] || '#fff'};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      color: ${props => props.colors[2] || props.colors[0]};
      
      @media (min-width: 768px) {
        width: 100px;
        height: 100px;
        font-size: 2rem;
      }
    }
  }
`;

interface ColorPaletteProps {
  title: string;
  colors: string[];
  emoji: string;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ title, colors, emoji }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [copyMessage, setCopyMessage] = useState<string | null>(null);

  const handleColorClick = (color: string) => {
    navigator.clipboard.writeText(color).then(() => {
      setCopyMessage(color);
      setTimeout(() => setCopyMessage(null), 1000);
    });
  };

  return (
    <PaletteContainer>
      <PaletteHeader>
        <PaletteTitle>
          {emoji} {title}
        </PaletteTitle>
        <PreviewButton onClick={() => setShowPreview(!showPreview)}>
          {showPreview ? '미리보기 접기' : '미리보기'}
        </PreviewButton>
      </PaletteHeader>
      <PaletteRow>
        {colors.map((color, index) => (
          <ColorCard 
            key={index} 
            color={color} 
            onClick={() => handleColorClick(color)}
          >
            <CopyMessage show={copyMessage === color}>복사됨!</CopyMessage>
            {color}
          </ColorCard>
        ))}
      </PaletteRow>
      <PreviewContainer show={showPreview}>
        <PreviewContent>
          <PreviewItem colors={colors} className="app-icon">
            A
          </PreviewItem>
          <PreviewItem colors={colors} className="website-header">
            <div className="nav"></div>
            <div className="content"></div>
          </PreviewItem>
          <PreviewItem colors={colors} className="logo">
            <div className="circle">L</div>
          </PreviewItem>
        </PreviewContent>
      </PreviewContainer>
    </PaletteContainer>
  );
};

export default ColorPalette;