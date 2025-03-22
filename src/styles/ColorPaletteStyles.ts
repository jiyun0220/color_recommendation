import styled from 'styled-components';

export const PaletteContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 1.5rem 1rem;
  margin: 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  box-shadow: 
    0 4px 24px -1px rgba(0, 0, 0, 0.05),
    0 0 1px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.8);
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const PaletteRow = styled.div`
  display: flex;
  gap: 0.75rem;
  padding: 0.5rem;
  overflow-x: auto;
  margin: 0 -0.5rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-behavior: smooth;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    padding: 1rem;
    margin: 0;
    overflow-x: visible;
  }
`;

export const ColorCard = styled.div<{ color: string }>`
  min-width: 100px;
  aspect-ratio: 1;
  background-color: ${props => props.color};
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.75rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  word-break: break-all;
  padding: 0.25rem;
  text-align: center;
  flex-shrink: 0;
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

  @media (min-width: 768px) {
    min-width: unset;
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 20px;
    flex-shrink: 1;
  }

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    
    &::before {
      opacity: 1;
    }
  }
`;

export const CopyMessage = styled.div<{ show: boolean }>`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  opacity: ${props => props.show ? 1 : 0};
  transition: all 0.3s;
  backdrop-filter: blur(4px);
  font-weight: 500;
`;

export const PaletteHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding: 0 0.5rem;
  
  @media (min-width: 768px) {
    padding: 0 1rem;
  }
`;

export const PaletteTitle = styled.h3`
  background: linear-gradient(135deg, #6c5ce7 0%, #a8a8e6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  font-weight: 700;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const PreviewButton = styled.button`
  background: none;
  border: none;
  color: #6c5ce7;
  cursor: pointer;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 20px;
  transition: all 0.3s;
  font-weight: 500;
  border: 1px solid transparent;

  &:hover {
    background-color: rgba(108, 92, 231, 0.1);
    border-color: rgba(108, 92, 231, 0.2);
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const PreviewContainer = styled.div<{ show: boolean }>`
  height: ${props => props.show ? 'auto' : '0'};
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: ${props => props.show ? '1.5rem' : '0'};
  opacity: ${props => props.show ? 1 : 0};
  transform: translateY(${props => props.show ? '0' : '-10px'});
`;

export const PreviewContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(248, 249, 250, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1.5rem;
  }
`;

export const PreviewItem = styled.div<{ colors: string[] }>`
  height: 120px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
  
  @media (min-width: 768px) {
    height: 200px;
    border-radius: 20px;
  }

  &.app-icon {
    background: ${props => props.colors[0]};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    color: ${props => props.colors[1] || '#fff'};
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
      opacity: 0.5;
    }
    
    @media (min-width: 768px) {
      font-size: 4rem;
    }
  }

  &.website-header {
    background: ${props => props.colors[0]};
    padding: 0.75rem;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
      opacity: 0.5;
    }
    
    @media (min-width: 768px) {
      padding: 1.25rem;
    }
    
    .nav {
      background: ${props => props.colors[1] || 'rgba(255, 255, 255, 0.15)'};
      height: 24px;
      border-radius: 12px;
      backdrop-filter: blur(5px);
      
      @media (min-width: 768px) {
        height: 40px;
      }
    }
    
    .content {
      margin-top: 0.75rem;
      height: 60px;
      background: ${props => props.colors[2] || 'rgba(255, 255, 255, 0.1)'};
      border-radius: 12px;
      backdrop-filter: blur(5px);
      
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
      opacity: 0.5;
    }
    
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
      position: relative;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      
      @media (min-width: 768px) {
        width: 100px;
        height: 100px;
        font-size: 2rem;
      }
      
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%);
      }
    }
  }
`;
