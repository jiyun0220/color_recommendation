import styled from 'styled-components';

export const PaletteContainer = styled.div`
  width: 100%;
  background: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 1rem;

  @media (min-width: 640px) {
    padding: 1rem 2rem;
  }
`;

export const PaletteHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const PaletteTitle = styled.h3`
  color: #1F2937;
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const PreviewButton = styled.button`
  background: #F3F4F6;
  color: #4B5563;
  border: none;
  border-radius: 0.375rem;
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #E5E7EB;
  }
`;

export const PaletteRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  flex: 1;
`;

export const ColorCard = styled.div<{ color: string }>`
  aspect-ratio: 1;
  background-color: ${props => props.color};
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const CopyMessage = styled.div<{ show: boolean }>`
  position: absolute;
  top: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: #1F2937;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  opacity: ${props => props.show ? 1 : 0};
  transition: all 0.2s;
`;

export const PreviewContainer = styled.div<{ show: boolean }>`
  height: ${props => props.show ? 'auto' : '0'};
  overflow: hidden;
  transition: all 0.2s;
  opacity: ${props => props.show ? 1 : 0};
  margin: 1rem -1rem -1rem;

  @media (min-width: 640px) {
    margin: 1rem -2rem -1rem;
  }
`;

export const PreviewContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  background: #F9FAFB;
  padding: 1rem;

  @media (min-width: 640px) {
    padding: 1rem 2rem;
  }
`;

export const PreviewItem = styled.div<{ colors: string[] }>`
  aspect-ratio: 1;
  border-radius: 0.375rem;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.2s;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &.app-icon {
    background: ${props => props.colors[0]};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: ${props => props.colors[1] || '#fff'};
  }

  &.website-header {
    background: ${props => props.colors[0]};
    padding: 0.75rem;
    
    .nav {
      background: ${props => props.colors[1] || 'rgba(255, 255, 255, 0.15)'};
      height: 0.375rem;
      border-radius: 0.25rem;
      margin-bottom: 0.5rem;
    }
    
    .content {
      background: ${props => props.colors[2] || 'rgba(255, 255, 255, 0.1)'};
      height: calc(100% - 0.875rem);
      border-radius: 0.25rem;
    }
  }

  &.logo {
    background: ${props => props.colors[0]};
    display: flex;
    align-items: center;
    justify-content: center;
    
    .circle {
      width: 40%;
      height: 40%;
      border-radius: 50%;
      background: ${props => props.colors[1] || '#fff'};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      color: ${props => props.colors[2] || props.colors[0]};
    }
  }
`;
