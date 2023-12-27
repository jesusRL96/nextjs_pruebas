"use client";
import CharacterBox from "@/components/character/CharacterBox";
import useSimpleFetch from "@/hooks/fetch/useSimpleFetch";
import { Col, Pagination, Row, Skeleton, Space } from "antd";
import { Suspense, useEffect, useState } from "react";

const Characters = () => {
  const numColumns = 4;
  const [page, setPage] = useState(1);
  const [data, setData] = useState({ info: { pages: 1 }, results: [] });

  const getData = async () => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const dataFetch = await useSimpleFetch(url);
    setData(dataFetch);
  };

  useEffect(() => {
    getData();
  }, [page]);

  const onChange = (current: number, pageSize: number) => {
    console.log(current, pageSize);
    setPage(current);
  };

  return (
    <section>
      <Space direction="vertical" size="middle">
        <Pagination
          onChange={onChange}
          defaultCurrent={page}
          total={data && data.info ? data.info.pages : 1}
        />
        {data && data.results.length > 0 ? (
          <Row gutter={[50, 50]}>
            {data.results.map((character: Character) => {
              return (
                <Col span={24 / numColumns} key={character.id}>
                  <CharacterBox {...character}></CharacterBox>
                </Col>
              );
            })}
          </Row>
        ) : (
          <Skeleton />
        )}
        <Pagination
          onChange={onChange}
          defaultCurrent={page}
          total={data && data.info ? data.info.pages : 1}
        />
      </Space>
    </section>
  );
};

export default Characters;
