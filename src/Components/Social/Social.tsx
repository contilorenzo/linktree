import "./Social.scss";
import { useParams } from "react-router-dom";

const getSocialList = (): Social[] => [
  {
    id: 1,
    src: "/instagram.svg",
    title: "Instagram",
    linkIT: "https://www.instagram.com/gadgethunter.ita/",
    linkUS: "https://www.instagram.com/gadgethunter.us/",
  },
  {
    id: 2,
    src: "/tiktok.svg",
    title: "TikTok",
    linkIT: "https://www.tiktok.com/@gadgethunter.ita",
    linkUS: "https://www.tiktok.com/@gadgethunter.us",
  },
];

const getHref = (social: Social, locale: string) => {
  if (!locale) return social.linkUS;

  if (locale === "it") {
    return social.linkIT;
  } else {
    return social.linkUS;
  }
};

const Social = (): React.ReactElement => {
  const { locale } = useParams();

  return (
    <div className="social-wrapper">
      {getSocialList().map((social) => (
        <a
          className="social"
          href={getHref(social, locale ?? "us")}
          key={social.id}
        >
          <img src={social.src} alt={social.title} />
        </a>
      ))}
    </div>
  );
};
export default Social;

type Social = {
  id: number;
  src: string;
  title: string;
  linkIT: string;
  linkUS: string;
};
