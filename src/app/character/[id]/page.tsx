"use client";
import CharacterDetail from "@/components/character/CharacterDetail";
import useFetch from "@/hooks/fetch/useFetch";

const CharacterDetailPage = ({ params }: { params: { id: string } }) => {
  const url = `https://rickandmortyapi.com/api/character/${params.id}`;
  const { loading, data } = useFetch(url, null);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <CharacterDetail {...data}></CharacterDetail>
      )}
    </div>
  );
};

export default CharacterDetailPage;
