import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  background: white;
  border-bottom: 1px solid #E5E7EB;
  padding: 0.75rem 0;
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 2rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  img {
    width: 24px;
    height: 24px;
  }
  
  span {
    color: #8B5CF6;
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem 0;
  background: white;

  @media (min-width: 640px) {
    gap: 2rem;
    padding: 2rem 0;
  }
`;

export const MainHeader = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  width: 100%;
  padding: 0 1rem;

  @media (min-width: 640px) {
    margin-bottom: 2rem;
    padding: 0 2rem;
  }
`;

export const Title = styled.h1`
  color: #1F2937;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;

export const Subtitle = styled.p`
  color: #6B7280;
  font-size: 0.875rem;
  margin: 0;
  font-weight: 400;
`;

export const InputContainer = styled.div`
  width: 100%;
  background: #F9FAFB;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;

  @media (min-width: 640px) {
    padding: 1rem 2rem;
    flex-direction: row;
    align-items: center;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;

  @media (min-width: 640px) {
    width: auto;
  }
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  flex: 1;
  padding: 0.5rem 1rem;
  background: ${props => props.variant === 'secondary' 
    ? '#F3F4F6'
    : '#8B5CF6'};
  color: ${props => props.variant === 'secondary' ? '#4B5563' : 'white'};
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;

  @media (min-width: 640px) {
    flex: none;
  }

  &:hover {
    background: ${props => props.variant === 'secondary' 
      ? '#E5E7EB'
      : '#7C3AED'};
  }
`;

export const PalettesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 2rem;
  }
`;
