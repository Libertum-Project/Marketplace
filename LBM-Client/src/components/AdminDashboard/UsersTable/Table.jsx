// En el componente Users
import { ethers } from 'ethers';

import pLBM_ABI from '../../../smartContracts/ABI/pLBM.json'
import DataTable from 'react-data-table-component';
import css from './TableUsers.module.scss';

const pLBM_address = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';
const provider = new ethers.providers.JsonRpcProvider();
const signer = provider.getSigner();
const pLBM_contract = new ethers.Contract(pLBM_address, pLBM_ABI.abi, signer);

const customStyles = {
  headRow: {
    style: {
      color: 'var(--0-c-0507, #0C0507)',
      fontFamily: 'Inter',
      fontSize: '0.875rem',
      fontWeight: 700,
      textTransform: 'capitalize',
    },
  },
  conditionalCellStyles: [
    {
      when: (row) => row.selector === 'status',
      style: {
        borderRadius: '4px',
        backgroundColor: 'blue',
        color: 'white',
      },
    },
  ],
};


const Users = ({ users }) => {
  const data = users.map((user) => ({
    id: user.ID_user,
    user: user.editableName,
    mail: user.email,
    investedPropertiesAddress: user.investedProperties.Address,
  }));

    const addToWhitelist = async (userAddress) => {
    const amount = 10;
    await pLBM_contract.modifyWhitelistAllocations([userAddress], [BigInt(amount * 10 ** 18)]);
  };

  const columns = [
    {
      name: 'user',
      selector: (row) => row.user,
    },
    {
      name: 'Mail address',
      selector: (row) => row.mail,
    },
    {
      name: 'Add to whitelist',
      cell: (row) => (
        <button
          onClick={() => addToWhitelist(row.investedPropertiesAddress)}
          style={{
            backgroundColor: 'gray',
            borderRadius: '4px',
            color: 'white',
            padding: '8px',
          }}
        >
          Add to whitelist
        </button>
      ),
    },
  ];

  return (
    <div className={css.container}>
      <div className={css.table}>
        <h3></h3>
        <DataTable
          columns={columns}
          data={data}
          customStyles={customStyles}
        />
      </div>
    </div>
  );
};

export default Users;
