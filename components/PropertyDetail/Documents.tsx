import React from 'react';
import { ServerImage } from '../shared/ServerImage';
import downloadIcon from '../../public/assets/icons/download.svg';
import Link from 'next/link';

const Documents: React.FC<{ documents: string[] }> = ({ documents }) => {
  return (
    <div>
      {documents.map((document, index) => (
        <div key={index} className="flex items-center gap-4">
          {documents.length > 0 && documents[0] === 'no document provided' ? (
            <p className="text-[#2196F3]">Documents not provided</p>
          ) : (
            <div key={index} className="flex items-center gap-4">
              <p className="text-[#2196F3]">Document {index + 1}</p>
              <Link href={document} passHref target="_blank">
                <ServerImage
                  src={downloadIcon}
                  alt="Download Icon"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Documents;
