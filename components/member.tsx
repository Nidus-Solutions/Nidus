import { Container } from "@chakra-ui/react";
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

            <Container>
                <h3>{name}</h3>
                <a href={link}>{socialId}</a>
            </Container>

        </Container>
    );
}

export default Members;
