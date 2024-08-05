import { Heading, Card, Button, CardFooter, CardBody, Link, Stack, Text, Box } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { IconType } from "react-icons";
import { TbPointFilled } from "react-icons/tb";

interface CardProps {
    title: string;
    items: string[];
    icons: IconType;
}

const CardServices = ({ title, items, icons }: CardProps) => {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            borderWidth={2}
            borderRadius='xl'
            boxShadow='xl'
            borderColor="#3498DB"
            p={2}
            bg="#ffffff"
        >

            <Stack>
                <CardBody
                >
                    <Box
                        display='flex'
                        alignItems='center'
                        flexDirection='row'
                        gap={2}
                    >
                        <Box
                            border={'2px solid '}
                            borderColor="#3498DB"
                            borderRadius='full'
                            py={1}
                            px={3}
                        >
                            <Icon
                                as={icons}
                                color={"#3498DB"}
                            />
                        </Box>
                        <Heading
                            fontWeight="600"
                            color={"#2C3E50"}
                            letterSpacing={{ base: 'tight', sm: 2 }}
                            fontFamily={'heading'}
                            fontSize={{ base: 'xl', sm: '2xl' }}
                        >
                            {title}
                        </Heading>
                    </Box>
                    <Box
                        display='flex'
                        flexDirection='column'
                        mt={2}
                    >
                        {items.map((item, index) => (
                            <Box
                                display='flex'
                                alignItems='center'
                                flexDirection='row'
                                key={index}
                                color={"#2C3E50"}
                            >
                                <Icon
                                    as={TbPointFilled}
                                    color="#3498DB"
                                    width={{ base: 5, sm: 5 }}
                                    height={{ base: 5, sm: 5 }}
                                />
                                <Text key={index} fontWeight={{base: "600", md: "400"}} fontSize={{ base: '0.6em', sm: '0.6em' }}>
                                    {item}
                                </Text>
                            </Box>
                        ))}
                    </Box>
                </CardBody>
            </Stack>
        </Card >
    )
};

export default CardServices;