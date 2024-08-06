import {
    Box,
    Button,
    Flex,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

interface StatsCardProps {
    title: string
    stat: number
    icon?: ReactNode
}

const StatsCard = (props: StatsCardProps) => {
    const { title, stat, icon } = props

    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>

            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'} isTruncated>
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                        {stat}
                    </StatNumber>
                </Box>
                <Button
                    my={'auto'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}
                    bg="none"
                    _hover={{
                        color: "teal.500",
                    }}
                >
                    {icon}
                </Button>
            </Flex>
        </Stat>
    )
}

export default StatsCard;