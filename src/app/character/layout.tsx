import { Box, Center, Container, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";

const CharacterLayout = ({ children, detail }) => {
  return (
    <>
			<Center>
				{children}
			</Center>
				{detail}
    </>
  );
};

export default CharacterLayout;
