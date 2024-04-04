'use client'
import Link from "next/link";
import Image from "next/image";
import SocialMedia from "./SocialMedia";
import css from "./Footer.module.css";
import background from "./background.svg";

const Footer = () => {
  const navigation = [
    {
      name: "Property Owners",
      href: "https://www.libertum.io/propertyowners",
      section: "Navigation",
    },
    {
      name: "Investors",
      href: "https://www.libertum.io/learn-investors",
      section: "Navigation",
    },
    {
      name: "Explore Properties",
      href: "https://www.libertum.io/comingsoon",
      section: "Navigation",
    },
    {
      name: "Token",
      href: "https://www.libertum.io/ico",
      section: "Navigation",
    },
    {
      name: "Privacy Policy",
      href: "https://www.libertum.io/comingsoonn",
      section: "Support",
    },
    {
      name: "Terms & Conditions",
      href: "https://www.libertum.io/comingsoon",
      section: "Support",
    },
    {
      name: "Docs",
      href: "/",
      section: "Support",
    },
    {
      name: "Community",
      href: "https://www.libertum.io/community",
      section: "Support",
    },    {
      name: "Blog",
      href: "https://www.blog.libertum.io",
      section: "Navigation",
    },
  ];

  const navigationSection1 = navigation
    .filter((item) => item.section === "Navigation")
    .slice(0, 5);
  const navigationSection2 = navigation
    .filter((item) => item.section === "Support" || item.section === "Contact")
    .slice(0, 4);

  return (
    <footer className={css.footer}>
      <Image
        src="./background.svg"
        alt="N"
        width="1812"
        height="460"
      />
      <div className={css.background}>
        <div className={css.footerContainer}>
          <div className={css.footerFirstCol}>
            <Link href="/">
              <Image
                src="/assets/horizontalLogo.svg"
                alt="N"
                width="200"
                height="80"
                className={css.logo}
              />
            </Link>
            <p className={css.firstColInformation}>
              15 Crammavill Street<br />
              Grays <br />
              England <br />
              RM16 2AP
            </p>
            <a href="mailto:hello@libertum.io" className={css.firstColContact}>hello@libertum.io</a>
            <p className={css.firstColContact}>14638562</p>
            <div>
              <SocialMedia />
            </div>
          </div>

          <div className={css.footerSecondCol}>
            <section className={css.linksContainer}>
              <div className={css.links}>
                {navigationSection1.map((item, index) => (
                  <Link key={index} href={item.href} className={css.link}>
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className={css.links}>
                {navigationSection2.map((item, index) => (
                  <Link key={index} href={item.href} className={css.link}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </section>
            <Link href="/subscribe">
            <div className={css.footerButton}>
              
              Explore More Investment Opportunities Now
            </div>
            </Link>

          </div>
        </div>
        <div className={css.footerCopyright}>
          <p>Libertum.io 2024. Copyright. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
