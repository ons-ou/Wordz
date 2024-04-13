import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GameStatus from '../components/GameStatus';

describe('GameStatus', () => {
  it('should show an alert when the Skip button is clicked', () => {
    const mockAlert = vi.spyOn(window, 'alert').mockImplementation(() => {});

    const { getByText } = render(
      <GameStatus
        round={1}
        gameOver="ongoing"
        tries={3}
        word="example"
        nextRound={() => {}}
      />
    );

    const skipButton = getByText('Skip');
    fireEvent.click(skipButton);

    expect(mockAlert).toHaveBeenCalledWith('The word was example');

    mockAlert.mockRestore(); 
  });

});
