import { Box, Text, Image, Heading, Container, List, ListItem, ListIcon, Link } from "@chakra-ui/react";
import { FaCheckCircle, FaMobileAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Box textAlign="center" py={10}>
        <Image src="https://images.unsplash.com/photo-1593672715438-d88a70629abe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb25leXxlbnwwfHx8fDE3MTM0NTQ1NjN8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" alt="Money Image" mb={4} />
        <Heading as="h1" size="xl" mb={6}>
          Earn Money from Your Phone
        </Heading>
        <Text fontSize="lg">Discover simple and effective ways to make money using just your mobile phone.</Text>
      </Box>

      <Box my={10}>
        <Heading as="h2" size="lg" mb={4}>
          Top Ways to Earn Money
        </Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Participate in paid surveys
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Sell photos taken from your phone
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Play online games that pay real money
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Use cashback apps when shopping
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Perform micro-jobs on gig platforms
          </ListItem>
        </List>
      </Box>

      <Box textAlign="center" py={10}>
        <FaMobileAlt size="3em" />
        <Heading as="h3" size="md" mt={4}>
          Start Earning Today
        </Heading>
        <Text mt={2}>Your smartphone is more than just a device; it's your gateway to earning extra income.</Text>
        <Link href="#" color="teal.500" mt={4} display="inline-block">
          Learn More
        </Link>
      </Box>
    </Container>
  );
};

export default Index;
