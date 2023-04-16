import { ViewIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  SimpleGrid,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Button,
  Flex,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  // const boxStyles = {
  //   p:"10px",
  //   bg:"purple.400",
  //   color: "white",
  //   m:"10px",
  //   textAlign:"center",
  //   filter:"blur(2px)",
  //   ':hover':{
  //     color: 'black',
  //     bg:'blue.200'
  //   }
  // }

  const tasks = useLoaderData();

  return (
    <SimpleGrid spacing={10} minChildWidth={300}>
      {tasks &&
        tasks.map((task) => (
          <Card
            key={task.id}
            borderTop="8px"
            borderColor="purple.400"
            bg="white"
          >
            <CardHeader>
              <Flex gap={5}>
                <Avatar src={task.img}/>

                <Box>
                  <Heading as="h3" size="sm">
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color="gray.500">
              <Text>{task.description}</Text>
            </CardBody>

            <Divider borderColor="gray.200" />

            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>

    // <Container as="section" maxWidth="4xl" py="20px">
    //   <Heading my="30px" p="10px">Chakra Ui Components</Heading>
    //   <Text marginLeft="30px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, magni.</Text>

    //   <Text ml="30px" color="blue.300" fontWeight="bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, magni.</Text>

    //   <Box my="30px" p="20px" bg="orange">
    //     <Text color="white">This is a box</Text>
    //   </Box>

    //   <Box sx={boxStyles}>
    //     Hello world
    //   </Box>
    // </Container>

    //   <SimpleGrid p={10} spacing={10} minChildWidth={250}>
    //   <Box bg="white" h="200px" border="1px solid">
    //     <Text color={{ base: "pink", md: "blue", lg: "green" }}>Hello</Text>
    //   </Box>
    //   <Box bg="white" h="200px" border="1px solid"></Box>
    //   <Box bg="white" h="200px" border="1px solid"></Box>
    //   <Box bg="white" h="200px" border="1px solid"></Box>

    //   <Box bg="white" h="200px" border="1px solid"></Box>
    //   <Box bg="white" h="200px" border="1px solid"></Box>
    //   <Box bg="white" h="200px" border="1px solid"></Box>
    //   <Box bg="white" h="200px" border="1px solid"></Box>

    //   <Box bg="white" h="200px" border="1px solid"></Box>
    //   <Box bg="white" h="200px" border="1px solid"></Box>
    //   <Box bg="white" h="200px" border="1px solid"></Box>
    //   <Box bg="white" h="200px" border="1px solid"></Box>
    // </SimpleGrid>
  );
}

export const tasksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");

  return res.json();
};
