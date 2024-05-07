import React from 'react';
import Link from 'next/link';

import { ServerImage } from '../shared/ServerImage';
import downloadIcon from '../../public/assets/icons/download.svg';

const Documents: React.FC = () => {
  const documents = [
    {
      name: 'Floorplan',
      href: 'linkdocument.com',
    },
    {
      name: 'Smart Contract',
      href: 'linkdocument.com',
    },
  ];

  return (
    <div>
      {documents.map((document, index) => (
        <div key={index} className="flex items-center gap-4">
          <p className="text-[#2196F3]">{document.name}</p>
          <Link href={document.href} passHref>
            <ServerImage src={downloadIcon} alt="Download Icon" width={20} height={20} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Documents;
