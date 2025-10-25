import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
    backgroundColor='#fff'
    borderRadius='1rem'
    >
    <Image src={imageSrc} alt={imageSrc} />
      <VStack
        alignItems='flex-start'
        padding='1rem'
      >
        <Heading as='h2' size='lg' color='#333'>{title}</Heading>
        <Text size="lg" color='#999'>{description}</Text>
        <HStack
          color='#333'
        >
          <Text size='md'>
            See more
            <FontAwesomeIcon icon={faArrowRight} size='1x' />
          </Text>
        </HStack>
      </VStack>
    </VStack>
  )
};

export default Card;
