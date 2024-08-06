import NextLink from 'next/link'
import React from 'react'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
} from '@chakra-ui/react'

interface LinkItemProps {
    href: string,
    path: string,
    target?: string,
    children: React.ReactNode
}

const LinkItem = ({ href, path, target, children, ...props }: LinkItemProps) => {
    const active = path === href
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            color={active ? '#F1C40F' : "#EAE0D5"}
            borderBottom={active ? '2px' : undefined}
            borderColor={active ? '#F1C40F' : undefined}
            _hover={{
                bg: 'none',
                color: '#F1C40F',
            }}
            target={target}
            {...props}
        >
            {children}
        </Link>
    )
}

const Navbar = (props: { path: string }) => {
    const { path } = props;

    return (
        <Box
            as="nav"
            w="100%"
            bg="#2C3E50"
            color="#F1C40F"
            zIndex={22}
            css={{ backdropFilter: 'blur(10px)' }}
            {...props}
        >
            <Container
                display="flex"
                flexDirection={{ base: 'column', md: 'row' }}
                p={2}
                maxW="container.xl"
                alignItems="center"
                justifyContent="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        Nidus Solutions
                    </Heading>
                </Flex>

                <Stack
                    direction="row"
                    spacing={4}
                    display={"flex"}
                >
                    <LinkItem href="/" path={path}>
                        Home
                    </LinkItem>
                    <LinkItem href="/aboutus" path={path}>
                        Sobre Nós
                    </LinkItem>
                    <LinkItem href="/services" path={path}>
                        Serviços
                    </LinkItem>
                    <LinkItem href="/contact" path={path}>
                        Contatos
                    </LinkItem>
                </Stack>
            </Container >
        </Box >
    )
}

Navbar.displayName = 'Navbar'

export default Navbar;
