import { type ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import css from "./Modal.module.css";
import investor from "./investors.svg";
import propertyOwner from "./propertyOwner.svg";
import tokenization from "./tokenization.svg";

interface LearnModalProps {
  handleHideModals: () => void;
}

export function LearnModal({ handleHideModals }: LearnModalProps): ReactElement {
  return (
    <div
      className={css.navModalContainer}
      onMouseLeave={handleHideModals}
      onTouchEnd={handleHideModals}
    >
      <div className={css.navModal}>
        <div className={css.modalHeader}>
          <p>Learn</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="286"
            height="8"
            viewBox="0 0 286 8"
            fill="none"
          >
            <path
              d="M285.354 4.35355C285.549 4.15829 285.549 3.84171 285.354 3.64645L282.172 0.464466C281.976 0.269204 281.66 0.269204 281.464 0.464466C281.269 0.659728 281.269 0.976311 281.464 1.17157L284.293 4L281.464 6.82843C281.269 7.02369 281.269 7.34027 281.464 7.53553C281.66 7.7308 281.976 7.7308 282.172 7.53553L285.354 4.35355ZM0 4.5H285V3.5H0V4.5Z"
              fill="#FFA143"
              fillOpacity="0.5"
            />
          </svg>
        </div>
        <div className={css.modalLinks}>
          <div>
            <Link href="/learn-investors">
              <Image src={investor} alt="Investors" width={20} height={20} />
              Investors
            </Link>
          </div>
          <div>
            <Link href="/propertyowners">
              <Image
                src={propertyOwner}
                alt="Property Owner"
                width={20}
                height={20}
              />
              Property Owners
            </Link>
          </div>
          <div>
            <Link href="/rwa">
              <Image src={tokenization} alt="Token" width={20} height={20} />
              RWA Tokenization
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
