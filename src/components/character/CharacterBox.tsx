"use client";
import { Badge, Button, Card, Flex, Image, List, Modal } from "antd";
import Link from "next/link";
import { useState } from "react";

export default function CharacterBox({
  id,
  name,
  image,
  status,
  species,
  origin,
}: Character) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Card
      cover={
        <Link href={`/character/${id}`}>
          <Image alt={name} src={image} preview={false} width="100%" />
        </Link>
      }
    >
      <div>
        <Badge.Ribbon
          text={status}
          color={`${
            status === "Alive" ? "green" : status === "Dead" ? "red" : "cyan"
          }`}
        >
          <List
            header={<b>{name}</b>}
            dataSource={[species, origin.name]}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Badge.Ribbon>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    </Card>
  );
}
