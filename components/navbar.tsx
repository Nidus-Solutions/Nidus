import NextLink from 'next/link'
import React from 'react'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

interface LinkItemProps {
    href: string,
    path: string,
    target?: string,
    children: React.ReactNode
}

const LinkItem = ({ href, path, target, children, ...props }: LinkItemProps) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            bg={active ? 'grassTeal' : undefined}
            color={active ? 'blue.300' : inactiveColor}
            borderBottom={active ? '2px' : undefined}
            borderColor={active ? 'blue.500' : undefined}
            _hover={{
                bg: 'grassTeal',
                color: 'blue.100',
            }}
            target={target}
            {...props}
        >
            {children}
        </Link>
    )
}

const MenuLink = React.forwardRef<HTMLAnchorElement, any>((props, ref) => (
    <Link ref={ref} display="block" p={2} {...props} />
))

const Navbar = (props: { path: string }) => {
    const { path } = props;

    return (
        <Box
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            zIndex={2}
            css={{ backdropFilter: 'blur(10px)' }}
            {...props}
        >
            <Container
                display="flex"
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
                    display={{ base: 'none', md: 'flex' }}
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

                <Box  alignItems={'right'}>
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }} mr={2}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <MenuItem as={MenuLink} href="/">
                                    Home
                                </MenuItem>
                                <MenuItem as={MenuLink} href="/aboutus">
                                    Sobre Nós
                                </MenuItem>
                                <MenuItem as={MenuLink} href="/services">
                                    Serviços
                                </MenuItem>
                                <MenuItem as={MenuLink} href="/contact">
                                    Contatos
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    <ThemeToggleButton />
                </Box>
            </Container>
        </Box>
    )
}

Navbar.displayName = 'Navbar'

export default Navbar;
