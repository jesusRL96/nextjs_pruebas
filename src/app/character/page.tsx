import CharacterBox from "@/components/character/CharacterBox";
import useSimpleFetch from "@/hooks/fetch/useSimpleFetch";
import { Col, Row } from "antd";

const Characters = async () => {
  const url = "https://rickandmortyapi.com/api/character";
  const data = await useSimpleFetch(url);
  const numColumns = 4;

  return (
    <>
      <Row gutter={[50, 50]}>
        {data.results.map((character) => {
          return (
            <Col
              span={24 / numColumns}
              key={character.id}
            >
              <CharacterBox {...character}></CharacterBox>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Characters;
