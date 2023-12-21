import CharacterDetail from "@/components/character/CharacterDetail";
import useSimpleFetch from "@/hooks/fetch/useSimpleFetch";

const CharacterDetailPage = async ({ params }: { params: { id: string } }) => {
  const url = `https://rickandmortyapi.com/api/character/${params.id}`;
	const data = await useSimpleFetch(url);
  return (
    <div>
        <CharacterDetail {...data}></CharacterDetail>
    </div>
  );
};

export default CharacterDetailPage;
