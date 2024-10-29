import { Box, Button, Container, Flex, Link, Text } from "@chakra-ui/react";
import { useState } from "react";

type PopUpCookiesProps = {
    show: boolean;
    onClose: () => void;
};

const PopUpCookies = ({ show, onClose }: PopUpCookiesProps) => {
    return (
        <Container
            bg={"rgba(0, 0, 0, 0.7)"}
            minW={'full'}
            minH={'full'}
            position={'absolute'}
            top={0}
            left={0}
            zIndex={999}
            display={show ? 'flex' : 'none'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Box
                opacity={1}
                color={'#000000'}
                bg="#ffffff"
                p={4}
                borderRadius={10}
                maxW={'800px'}
                minW={'200px'}
            >
                <Flex
                    flexDirection={{ base: "column", md: "row" }}
                    justifyContent={"space-between"}
                    alignItems={'center'}
                    gap={6}
                >
                    <Box>
                        <Text
                            as={'h2'}
                            fontSize={'2xl'}
                            fontWeight={'bold'}
                            fontFamily={'sans-serif'}
                        >
                            Nós usamos cookies!
                        </Text>
                        <Text
                            mt={4}
                            fontSize={'lg'}
                            fontFamily={'sans-serif'}
                        >
                            Nós usamos cookies para melhorar sua experiência de navegação no portal. Ao utilizar este site, você concorda com a política de monitoramento de cookies.
                            Para ter mais informações sobre como isso é feito, acesse nossa {""}
                            <Link
                                color={'#3498DB'}
                                href={'https://www.iubenda.com/privacy-policy/11072877/cookie-policy'}
                                isExternal
                            >
                                Política de Cookies.
                            </Link>
                        </Text>
                    </Box>

                    <Button
                        mt={4}
                        bg="#3498DB"
                        color="#ffffff"
                        size="lg"
                        minW={'200px'}
                        _hover={{ bg: "#2C3E50" }}
                        onClick={onClose}   
                    >
                        Aceito
                    </Button>
                </Flex>
            </Box>
        </Container>
    );
}

export default PopUpCookies;