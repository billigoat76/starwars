import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useEffect,useState } from "react";
import axios from "axios";

export default function CharacterModal({ open, handleClose, character }) {
  const[homeWorld,setHomeWorld] = useState(null);
  useEffect(()=>{
    getHomeWorld();
  },[])
  const getHomeWorld = async () => {
    const response = await axios.get(`${character.homeworld}`);
    const data = await response.data;
    setHomeWorld(data);
  }
  return (
    <React.Fragment>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={handleClose}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
           <h1> {character.name}</h1>
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            <p>Height: {character.height} meters</p>
            <p>Mass: {character.mass} kg</p>
            <p>Date Of Person Added : {character.created.substring(0,10).split('-').reverse().join('-')}</p>
            <p></p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Number of Films: {character.films.length}</p>
            {homeWorld && (
              <>
              <h3>Homeworld</h3>
              <p>Name: {homeWorld.name}</p>
              <p>Terrain: {homeWorld.terrain}</p>
              <p>Climate: {homeWorld.climate}</p>
              <p>Residents: {homeWorld.residents.length}</p>
            </>
            )}
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
