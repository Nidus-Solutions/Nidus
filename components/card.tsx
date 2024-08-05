import { Heading, Card, Image, Button, CardFooter, CardBody, Link, useColorModeValue, Stack, Text } from "@chakra-ui/react";

interface CardProps {
    title: string;
    description: string;
    align: string;
}

const CardServices = ({ title, description, align }: CardProps) => {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            borderWidth={useColorModeValue(1, 0)}
            borderRadius='lg'
            boxShadow='xl'
            p={2}
            bg={useColorModeValue('gray.100', 'gray.700')}
        >
            {align === 'left' ? (
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='Caffe Latte'
                    borderRadius={{ base: 'lg', sm: 'xl' }}
                />
            ) : null
            }
            <Stack>
                <CardBody>
                    <Heading
                        size={{ md: 'md', lg: 'lg', xl: 'xl' }}
                        fontWeight='normal'
                        color={useColorModeValue('gray.800', 'white')}
                        letterSpacing={{ base: 'tight', sm: 2 }}
                        fontFamily={'heading'}
                    >
                        {title}
                    </Heading>
                    <Text
                        mt={2}
                        color={useColorModeValue('gray.600', 'gray.400')}
                        fontSize='1.5em'
                    >
                        {description}
                    </Text>
                </CardBody>

                <CardFooter>
                    <Link href='/contact'>
                        <Button variant='solid' colorScheme='blue' >
                            Solicite um Orçamento
                        </Button>
                    </Link>
                </CardFooter>
            </Stack>
            {align === 'right' ? (
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='Caffe Latte'
                    borderRadius={{ base: 'lg', sm: 'xl' }}
                />
            ) : null
            }
        </Card >
    )
};

export default CardServices;