import { Flex,Box, Heading,Text, Button, Spacer, HStack } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Flex as="nav" p="10px" alignItems="center" mb="40px">
    <Heading as="h1">Test Tasks</Heading>
    <Spacer/>

    <HStack spacing="20px">
    <Box bg="gray.200" p="10px">M</Box>
    <Text>michael@gmail.com</Text>
    <Button colorScheme="purple">Logout</Button>
    </HStack>
    </Flex>


//   <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
//      <Box w="150px" h="50px" bg="red">1</Box>
//      <Box w="150px" h="50px" bg="blue">2</Box>
//      <Box w="150px" h="50px" flexGrow="1" bg="green">3</Box>
//      <Box w="150px" h="50px" flexGrow="2" bg="yellow">4</Box>
//   </Flex>
  )
};
