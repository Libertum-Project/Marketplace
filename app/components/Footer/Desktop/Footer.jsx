import Link from "next/link";
import Image from "next/image";
import SocialMedia from "./SocialMedia";
import css from  "./Footer.module.css"

const Footer = () => {

  const navigation = [
    {
      name: "Home",
      href: "https://www.libertum.io/",
      section: "Navigation",
    },
    {
      name: "Whitepaper",
      href: "/whitepaperLibertum.pdf",
      section: "Navigation",
    },
    {
      name: "Buy Libertum",
      href: "/ico",
      section: "Navigation",
    },
    {
      name: "Waitlist",
      href: "/subscribe",
      section: "Navigation",
    },
    {
      name: "About Us",
      href: "https://www.libertum.io/support",
      section: "Navigation",
    },
    {
      name: "FAQs",
      href: "https://www.libertum.io/support",
      section: "Support",
    },
    {
      name: "Support",
      href: "https://www.libertum.io/support",
      section: "Support",
    },
    {
      name: "hello@libertum.io",
      href: "mailto:hello@libertum.io",
      section: "Contact",
    },
    {
      name: "Contact Us Form",
      href: "https://www.libertum.io/contact",
      section: "Contact",
    },
  ];

  const sections = {};
  navigation.forEach((item) => {
    if (!sections[item.section]) {
      sections[item.section] = [];
    }
    sections[item.section].push(item);
  });

  return(
    <footer>
      <div className={css.footerContainer}>
        <div className={css.footerContent}>
          
          <Link 
            href="/"
            className={css.logoLibertum}
          >
            <Image 
            src="/assets/imagoTipo.svg"
            alt="N"
            width="200"
            height="80"
            className={css.logo}          
            />
          </Link>
          <p>
            Our mission is to make real estate investment accessible to everyone.
          </p>

          <div className={css.socialMedia}>
            <p>Follow Us</p>
            <SocialMedia />
          </div>

        </div>

        <div className={css.footerContent2}>
            {Object.entries(sections).map(([section, items], index) => (
                <div key={index} className={css.linksContainer}>
                  <div>
                    <h2 className={css.sectionTitle}>
                      {section}
                    </h2>
                  </div>
                  <ul className={css.list}>
                    {items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link href={item.href}>
                          <p className={css.link}>{item.name}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
        </div>

      </div>

      
    </footer>
  )
}; 

export default Footer; 