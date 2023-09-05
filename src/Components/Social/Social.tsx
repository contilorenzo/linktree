import "./Social.scss";

const socialList = [
  {
    id: 1,
    src: "instagram.svg",
    title: "Instagram",
    link: "https://www.instagram.com/gadgethunter.ita/",
  },
  {
    id: 2,
    src: "tiktok.svg",
    title: "TikTok",
    link: "https://www.tiktok.com/@gadgethunter.ita",
  },
];

const Social = (): React.ReactElement => {
  return (
    <div className="social-wrapper">
      {socialList.map((social) => (
        <a className="social" href={social.link} key={social.id}>
          <img src={social.src} alt={social.title} />
        </a>
      ))}
    </div>
  );
};
export default Social;
