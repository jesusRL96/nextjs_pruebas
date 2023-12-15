"use client";
import useFetch from "@/hooks/fetch/useFetch";
import React, { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import CharacterBox from "@/components/character/CharacterBox";

const Characters = () => {
  const url = "https://rickandmortyapi.com/api/character";
  const { loading, data } = useFetch(url, {results:[]});

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {data.results.map((character) => {
            return <GridItem w="100%" key={character.id}><CharacterBox {...character}></CharacterBox></GridItem>;
          })}
        </Grid>
      )}
    </>
  );
};

export default Characters;
