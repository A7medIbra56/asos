import { Flex, GridItem, SimpleGrid, Box } from "@chakra-ui/react";
import Tap from "@components/common/tap/Tap";
import DecorativeBox from "@components/ui/decorativeBox";

const Header: React.FC = () => {
  return (
    <Flex gap="4">
      <Box width="full">
        <SimpleGrid columns={{ base: 2, md: 4 }} >
        <GridItem colSpan={{ base: 1, md: 1 }}>
            <DecorativeBox height="15"> <Tap /></DecorativeBox>
          </GridItem>
          <GridItem  colSpan={{ base: 1, md: 2 }}>
            <DecorativeBox  height="15"> </DecorativeBox>
          </GridItem>
          <GridItem  colSpan={{ base: 1, md: 1 }}>
            <DecorativeBox  height="15">  </DecorativeBox>
          </GridItem>
          
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Header;
