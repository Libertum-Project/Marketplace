import Swap from '@/components/Swap/Swap';
import css from './get.module.css';
import { ServerImage } from '@/components/shared/ServerImage';

const page = () => {
  return (
    <div className="flex w-full min-h-screen justify-center bg-blue-gradient p-20 gap-8">
      <div className={css.hero}>
        <ServerImage
          src="/assets/dark-mode-get.png"
          alt="Get"
          width={450}
          height={450}
        />
        <div className={css.paragraphs}>
          <p>
            The Libertum GET tool enables users to swap their tokens on the base
            network to “GET” more $LBM
          </p>
        </div>
        <div className={css.tokenOptions}>
          <div>
            <ServerImage
              src="/assets/checkbox.svg"
              alt="checkbox"
              width={24}
              height={24}
            />{' '}
            <p>Connect your wallet</p>
          </div>
          <div>
            <ServerImage
              src="/assets/checkbox.svg"
              alt="checkbox"
              width={24}
              height={24}
            />{' '}
            <p>Choose the token you want to exchange for LBM</p>
          </div>
          <div>
            <ServerImage
              src="/assets/checkbox.svg"
              alt="checkbox"
              width={24}
              height={24}
            />{' '}
            <p>Authorize the use of chosen token</p>
          </div>
          <div>
            <ServerImage
              src="/assets/checkbox.svg"
              alt="checkbox"
              width={24}
              height={24}
            />{' '}
            <p>SWAP the token into LBM</p>
          </div>
        </div>

        <div className={css.frameButton}>
          <p className="text-white mt-8">
            In the future users will be able to swap cross-chain tokens simply
            and efficiently.
          </p>
        </div>
      </div>
      <Swap />
    </div>
  );
};

export default page;
