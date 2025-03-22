import React from 'react';
import styled from 'styled-components';

const ColorPickerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ColorInput = styled.input`
  -webkit-appearance: none;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 0;
  background: none;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-color-swatch {
    border: 2px solid #a8a8e6;
    border-radius: 8px;
  }
`;

const HexInput = styled.input`
  padding: 0.8rem;
  border: 2px solid #a8a8e6;
  border-radius: 8px;
  font-size: 1rem;
  width: 120px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #6c5ce7;
  }
`;

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange }) => {
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (!value.startsWith('#')) {
      value = '#' + value;
    }
    if (value.match(/^#[0-9A-Fa-f]{6}$/)) {
      onChange(value);
    }
  };

  return (
    <ColorPickerContainer>
      <ColorInput
        type="color"
        value={color}
        onChange={handleColorChange}
      />
      <HexInput
        type="text"
        value={color}
        onChange={handleHexChange}
        placeholder="000000"
      />
    </ColorPickerContainer>
  );
};

export default ColorPicker; 