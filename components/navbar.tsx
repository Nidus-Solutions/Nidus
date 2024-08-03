import NextLink from 'next/link'
import { forwardRef } from 'react'
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
            color={active ? '#202023' : inactiveColor}
            target={target}
            {...props}
        >
            {children}
        </Link>
    )
}

const MenuLink = forwardRef<HTMLAnchorElement, any>((props, ref) => (
    <Link ref={ref} display="block" p={2} {...props} />
))

const Navbar = (props: { path: string }) => {
    const { path } = props;

    return (
        <Box
            position="fixed"
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
                    <LinkItem href="/about" path={path}>
                        About
                    </LinkItem>
                    <LinkItem href="/services" path={path}>
                        Services
                    </LinkItem>
                    <LinkItem href="/contact" path={path}>
                        Contact
                    </LinkItem>
                </Stack>
            </Container>

        </Box>
    )
}

export default Navbar;

