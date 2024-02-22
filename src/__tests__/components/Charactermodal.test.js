import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Charactercard from '../../components/Charactercard';
import CharacterModal from '../../components/CharacterModal';

describe('Character Modal Integration Tests', () => {
  it('opens modal with correct person’s information', async () => {
    // Render the CharacterCard component
    const mockCharacter = {
      name: 'Luke',
      species: ['Human'],
      gender: 'Male',
      height: '172',
      mass: '77',
      hair_color: 'n/a',
      skin_color: 'n/a',
      eye_color: 'n/a',
      birth_year: '19BBY',
      films: ['https://swapi.dev/api/films/1/'],
    };
    const { getByText } = render(<Charactercard character={mockCharacter} />);

    fireEvent.click(getByText('Luke'));

    await waitFor(() => {
      expect(getByText('Character Name')).toBeInTheDocument(); // Check if character name is displayed in the modal
      // Add more assertions to check other information displayed in the modal
    });
  });
});
