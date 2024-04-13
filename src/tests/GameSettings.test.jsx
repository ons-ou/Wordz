import React from 'react';
import { describe, expect, it } from "vitest";
import { render, fireEvent } from '@testing-library/react';
import GameSettings from '../components//GameSettings';

describe('GameSettings', () => {
  it('should call changeWordLength Enter key is pressed', () => {
    const changeWordLengthMock = vi.fn()
    const { getByPlaceholderText } = render(
      <GameSettings
        changeWordLength={changeWordLengthMock}
        wordLength={5}
        tryNumber={3}
      />
    );

    const wordLengthInput = getByPlaceholderText('5');
    fireEvent.keyUp(wordLengthInput, { key: 'Enter', target: { value: '6' } });

    expect(changeWordLengthMock).toHaveBeenCalledWith('6');
  });

});
