"use client";
import { Badge, Card, Flex, Image, List } from "antd";
import Link from "next/link";

export default function CharacterBox({
  id,
  name,
  image,
  status,
  species,
  origin,
}) {
  return (
    <Card
      cover={
        <Link href={`/character/${id}`}>
          <Image alt={name} src={image} preview={false} width="100%" />
        </Link>
      }
    >
      <div>
        <Badge.Ribbon text={status} >
          <List
						header={<b>{name}</b>}
            dataSource={[species, origin.name]}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
				</Badge.Ribbon>
      </div>

    </Card>
  );
}
