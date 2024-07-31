import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface MemberProps {
    name: string;
    socialId: string;
    link: string;
    id: string;
    role: string;
}

const Member: React.FC<MemberProps> = ({ name, socialId, link, id, role }) => {
    return (
        <div>
            <Image
                src={`/assets/team/margelo_faces_${id}.svg`}
                alt={name}
                width={1366 / 3}
                height={1555 / 3}
            />

            <div className='text-2xl xl:text-3xl'>
                <p>{name}</p>
                <span className='text-xl'>{role}</span>
            </div>
            <div className='text-xl'>
                <Link target='_blank' href={link}>{socialId}</Link>
            </div>
        </div>
    )
}

export default Member;