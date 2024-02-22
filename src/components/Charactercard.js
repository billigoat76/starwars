import React from 'react'
import { useState } from 'react';
import CharacterModal from './CharacterModal';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import './Charactercard.css';
import axios from 'axios';

function Charactercard(props) {
  const character = props.character;
  const [open, setOpen] = useState(false);
  // const [cardColor, setCardColor] = useState('white');
  // if(props.character.length!==0){
  //   setCardColor('mehroom');
  // }
  // useEffect(() => {
  //   const fetchSpeciesColor = async () => {
  //     if (character.species.length === 0) {
  //       setCardColor('gray');
  //     } else {
  //       try {
  //         const speciesResponse = await axios.get(character.species[0]); // Assuming the first species is relevant
  //         const speciesData = await speciesResponse.json();
  //         const { skin_colors } = speciesData;

  //         // Pick the first color from skin_colors if available
  //         if (skin_colors && skin_colors !== 'n/a') {
  //           const skinColorsArray = skin_colors.split(',');
  //           setCardColor(skinColorsArray[0].trim());
  //         } else {
  //           setCardColor('gray'); // Fallback to gray if skin color not available
  //         }
  //       } catch (error) {
  //         console.error('Error fetching species color:', error);
  //         setCardColor('gray'); // Fallback to gray in case of error
  //       }
  //     }
  //   };

  //   fetchSpeciesColor();
  // }, [character.species]);
  const handleClose = (e) => {
    setOpen(false);
    // e.stopPropagation();
  }
  return (
    <div className='Card' >
      <Button variant="outlined"  onClick={() => setOpen(true)} className='card-wrapper' >
        <img src={`https://picsum.photos/id/${props.idx*10}/200/300`} className='Card-image' />
        <h1 className="Card-content">{props.character.name}</h1>
      </Button>
      <CharacterModal character={props.character} open={open} handleClose={(e)=>handleClose(e)}/>
    </div>
  )
}

export default Charactercard