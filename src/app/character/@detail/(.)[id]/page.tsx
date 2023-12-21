"use client";
import React, { useState } from "react";
import useFetch from "@/hooks/fetch/useFetch";
import CharacterDetail from "@/components/character/CharacterDetail";

import { Button, Modal } from "antd";
import { useRouter } from "next/navigation";

const CharacterDetailDrawler = ({ params }: { params: { id: number } }) => {
  const url = `https://rickandmortyapi.com/api/character/${params.id}`;
  const router = useRouter();
  const { loading, data } = useFetch(url, null);
  const [isOpen, setIsOpen] = useState(true);
  if (loading) {
    return null;
  }
  return (
    <>
      <Modal
        onCancel={() => {
          router.back();
          setIsOpen(!isOpen);
        }}
        open={isOpen}
				width={1000}
				title={data.name}
				footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
          </>
        )}

      >
        <CharacterDetail {...data}></CharacterDetail>
      </Modal>
    </>
  );
};

export default CharacterDetailDrawler;
