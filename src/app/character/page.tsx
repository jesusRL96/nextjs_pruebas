"use client";
import CharacterBox from "@/components/character/CharacterBox";
import useFetch from "@/hooks/fetch/useFetch";
import useSimpleFetch from "@/hooks/fetch/useSimpleFetch";
import { Col, Pagination, PaginationProps, Row, Space } from "antd";
import { useEffect, useState } from "react";

const Characters = () => {
  const numColumns = 4;
  const [page, setPage] = useState(1);
  const [data, setData] = useState({});

  const getData = async () => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const dataFetch = await useSimpleFetch(url, []);
    setData(dataFetch);
  };

  useEffect(() => {
    getData();
  }, [page]);

  const onChange = (current, pageSize) => {
    console.log(current, pageSize);
    setPage(current);
  };

  return (
    <>
      <Space direction="vertical" size="middle">
        <Pagination
          onChange={onChange}
          defaultCurrent={page}
          total={data && data.info ? data.info.pages : 1}
        />
        <div>
          {data && data.results ? (
            <Row gutter={[50, 50]}>
              {data.results.map((character) => {
                return (
                  <Col span={24 / numColumns} key={character.id}>
                    <CharacterBox {...character}></CharacterBox>
                  </Col>
                );
              })}
            </Row>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
        <Pagination
          onChange={onChange}
          defaultCurrent={page}
          total={data && data.info ? data.info.pages : 1}
        />
      </Space>
    </>
  );
};

export default Characters;
