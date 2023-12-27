"use client";

import { Flex, Image, List, Space, Typography } from "antd";

export default function CharacterDetail({
  image,
  name,
  species,
  status,
  gender,
}: Character) {
  const data = [species, status, gender];
  return (
    <div>
      <Flex align="flex-start" justify="space-evenly">
        <div className="img-container" style={{ width: "30%" }}>
          <Image src={image} width="100%" alt={name} preview={false}></Image>
        </div>
        <List
          header={<h1>{name}</h1>}
          dataSource={data}
          renderItem={(item) => <List.Item>* {item}</List.Item>}
          bordered
          style={{ width: "50%" }}
        />
      </Flex>
    </div>
  );
}
