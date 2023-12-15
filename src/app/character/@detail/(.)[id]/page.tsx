"use client";
import React, { useState } from "react";
import useFetch from "@/hooks/fetch/useFetch";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import CharacterDetail from "@/components/character/CharacterDetail";

const CharacterDetailDrawler = ({ params }) => {
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
        onClose={() => {
          router.back();
          setIsOpen(!isOpen);
        }}
        size="full"
        isOpen={isOpen}
				autoFocus={false}
				returnFocusOnClose={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{data.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
						<CharacterDetail {...data}></CharacterDetail>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                router.back();
                setIsOpen(!isOpen);
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CharacterDetailDrawler;
