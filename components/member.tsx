import { Container, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";

interface MemberProps {
    name: string;
    socialId: string;
    link: string;
    id: string;
}

const Members: React.FC<MemberProps> = ({ name, socialId, link, id }) => {
    return (
        <Container>
            <Image
                src={`/assets/team/nidus_faces_${id}.svg`}
                alt={name}
                width={1366 / 4}
                height={1555 / 4}
            />

            <Container mt={{ base: 2, md: 4 }}>
                <Heading
                    as="h3"
                    fontSize={{ base: "xl", md: "2xl" }}
                    color="#2C3E50"
                >
                    {name}
                </Heading>
                <Link href={link}>
                    <Text
                        fontSize={{ base: "lg", md: "xl" }}
                        color="#3498DB"
                        _hover={{ textDecoration: "none" }}
                    >
                        {socialId}
                    </Text>
                </Link>
            </Container>

        </Container>
    );
}

export default Members;
