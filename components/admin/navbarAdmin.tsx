import NextLink from 'next/link'
import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    Stack,
    Link,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

interface Props {
    children: React.ReactNode
}

interface AdminProps {
    username: string;
    email: string;
    urlImg: string;
    company: string;
}

interface LinkItemProps {
    href: string,
    path: string,
    target?: string,
    children: React.ReactNode
}

const Links = ['dashboard', 'financeiro', 'contato']

const NavLink = ({ href, path, target, children, ...props }: LinkItemProps) => {
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

const NavbarAdmin = (props: { path: string, user: AdminProps }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { path } = props;
    const { user } = props;

    return (
        <>
            <Box
                as="nav"
                w="100%"
                bg="#2C3E50"
                color="#ffffff"
                zIndex={22}
                css={{ backdropFilter: 'blur(10px)' }}
                px={6}
            >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box
                            as={'a'}
                            href={'#'}
                            fontSize={'xl'}
                            fontWeight={'bold'}
                            color={'#F1C40F'}
                        >
                            Admin: {user.company || "Nidus"}
                        </Box>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            <NavLink href="/admin/" path={path}>
                                Dashboard
                            </NavLink>
                            <NavLink href="/admin/finance" path={path}>
                                Financeiro
                            </NavLink>
                            <NavLink href="/admin/contactAdmin" path={path}>
                                Entre em contato
                            </NavLink>
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={user.urlImg}
                                />
                            </MenuButton>
                            <MenuList bg="#233140" borderColor="#233140" >
                                <MenuItem
                                    bg="#233140"
                                    _hover={
                                        { bg: '#34495E' }
                                    }
                                >
                                    Perfil
                                </MenuItem>
                                <MenuItem
                                    bg="#233140"
                                    _hover={
                                        { bg: '#34495E' }
                                    }
                                >
                                    Ajuda
                                </MenuItem>
                                <MenuDivider />
                                <MenuItem
                                    bg="#233140"
                                    _hover={
                                        { bg: '#34495E' }
                                    }
                                    onClick={() => {
                                        localStorage.removeItem('user');
                                        window.location.href = '/admin/authenticate';
                                    }}
                                >
                                    Sair
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                link == "dashboard" ? (
                                    <NavLink href="/admin" path={path}>
                                        Dashboard
                                    </NavLink>
                                ) : (
                                    <NavLink href={`/admin/${link}`} path={path}>
                                        {link}
                                    </NavLink>
                                )
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box >
        </>
    )
}

export default NavbarAdmin;