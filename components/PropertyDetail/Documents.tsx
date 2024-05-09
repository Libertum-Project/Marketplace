import React from 'react';
import { ServerImage } from '../shared/ServerImage';
import downloadIcon from '../../public/assets/icons/download.svg';
import Link from 'next/link';

const Documents: React.FC<{ documents: string[] }> = ({ documents }) => {
  if (documents.length === 0) {
    return <p className="text-[#2196F3]">Documents not provided</p>;
  }

  return (
    <div>
      {documents.map((document, index) => (
        <Link href={document} key={index} passHref target="_blank">
          <div key={index} className="flex items-center gap-4">
            <p className="text-[#2196F3]">Document {index + 1}</p>
            <ServerImage
              src={downloadIcon}
              alt="Download Icon"
              width={20}
              height={20}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Documents;
