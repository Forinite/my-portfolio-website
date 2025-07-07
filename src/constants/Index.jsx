import {
  Briefcase,
  Clock1,
  Code,
  Crown,
  LocateIcon,
  Rocket,
  Speech,
  TestTube,
} from "lucide-react";
import ProfilePicImg from "../assets/ProfilePic.png";
import ReveiwStar from "../assets/StarIcon1.png";
import AcetIcon from "../assets/AcetIcon.png";
import ReactJsIcon from "../assets/ReactJsIcon.png";
import TailWindIcon from "../assets/TailWindIcon.png";
import GsapIcon from "../assets/GsapIcon.png";
import LipSyncImg from "../assets/LipSyncImg.png";
import NavImg from "../assets/NavImg.png";
import PayfricaImg from "../assets/PayfricaImg.png";
import BrainwaveImg from "../assets/BrainwaveImg.png";
import PortImg from "../assets/PortImg.png";
import AppleImg from "../assets/AppleImg.png";
import NavIcon from "../assets/logo.png";
import PayfricaIcon from "../assets/PayfricaIcon.png";
import BrainwaveIcon from "../assets/brainwave-symbol.svg";
import LipSyncIcon from "../assets/LipSyncLogo.png";
import AppleIcon from "../assets/Apple.svg";
import discordIcon from "../assets/discord.png";
import facebookIcon from "../assets/facebook.png";
import gmailIcon from "../assets/gmail.png";
import whatsappIcon from "../assets/whatsapp.png";
import XIcon from "../assets/X.png";

import {
  AppleShots,
  BrainwaveShots,
  LipSyncShots,
  LipSyncVideo,
  NaviShots,
  PayfricaShots,
  PortShots,
} from "./ExtraMedia";

export const ProfilePic = ProfilePicImg;
export const StarIcon = ReveiwStar;
export const Brainwave = BrainwaveImg;
export const NavI = NavImg;
export const LipSync = LipSyncImg;
export const Payfrica = PayfricaImg;
export const Port = PortImg;
export const Apple = AppleImg;

export const AboutMeInfo = [
  { text: "English", icon: Speech },
  { text: "Nigeria", icon: LocateIcon },
  { text: "UTC+1", icon: Clock1 },
  { text: "Chess Player", icon: Crown },
  { text: "Freelancer", icon: Briefcase },
];

export const ServicesInfo = [
  { title: "Website Rework" },
  { title: "Web Development" },
  { title: "Full Website Redesign" },
  { title: "Web Design" },
  { title: "Web Security" },
];

export const _2025ProjectsInfo = [
  {
    image: PortImg,
    link: "",
    icon: "vite.svg",
    title: "Portfolio PRJT",
    desc: "My First Attempt on a Portfolio Website",
    screenshots: PortShots,
    video: "",
    online: false,
    remarks:
      "This project introduced me to Next.Js and Aceternity UI which is a technology I found very useful. Although It was never complete --due to numerous all-powerful bugs-- It deepened my understanding of Aceternity UI and certain Visual Effects. ",
  },
  {
    image: AppleImg,
    link: "",
    icon: AppleIcon,
    title: "Apple IPhone 15",
    desc: "A clone of the official IPhone Website",
    screenshots: AppleShots,
    video: "",
    online: false,
    remarks:
      "I learnt how to use Gsap while working on this project I also used Three.Js to render the 3d Iphone. This practice project taught me important concepts and introduced me to new technologies.",
  },
  {
    image: LipSyncImg,
    link: "#",
    icon: LipSyncIcon,
    title: "Auto Lip-Sync",
    desc: "A Website made to aid animators in lip-syncing",
    screenshots: LipSyncShots,
    video: LipSyncVideo,
    online: true,
    remarks:
      "This was my very first successful orignal Idea Project. It's aim is to help animators -like me- save time in lip-syncing by providing the reference images needed to the user.  ",
  },
  {
    image: PayfricaImg,
    link: "",
    icon: PayfricaIcon,
    title: "Payfrica",
    desc: "A Web3 Website Aimed at making the convertion of Sui Tokens to Naria a simple process",
    screenshots: PayfricaShots,
    video: "",
    online: false,
    remarks:
      "I created This website for the payfrica team based on their Figma design. Personally, I wasn't in agreement with it because I didn't like the design. For that reason I won't be showing much of it. On the bright side, I learnt the ups and downs of using intervals and the right way to use certain functions in React.Js.",
  },
];
export const _2024ProjectsInfo = [
  {
    image: NavImg,
    link: "",
    icon: NavIcon,
    title: "NavigateMX",
    desc: "A website aimed at helping Newly Admitted Undergraduates Navigate Their University",
    screenshots: NaviShots,
    video: "",
    online: false,
    remarks:
      "This was the first project I ever created for someone outside my household, It was also the first time I had to work with someone elses Figma design. I learnt how to handle custom video controls from this project, --well, after it at least. And yes, their logo was 'LOGO'",
  },
  {
    image: BrainwaveImg,
    link: "",
    icon: BrainwaveIcon,
    title: "Brainwave",
    desc: "Brainwave A Beautifully Designed Website With No Real Use",
    screenshots: BrainwaveShots,
    video: "",
    online: false,
    remarks:
      "I learnt a lot about website design and subtle details from this practice project. It helped me see other beautiful websites as things I could actually create and not be overwhelmed by. I also learnt of the existence of 'Pathes' from it. It's a little complicated but I can acknowledge it's existence.",
  },
];
export const ProjectsInfo = [..._2025ProjectsInfo, ..._2024ProjectsInfo];

export const MyTechStackInfo = [
  { image: ReactJsIcon, text: "React.JS" },
  { image: TailWindIcon, text: "Tailwind CSS" },
  { image: AcetIcon, text: "Aceternity Ui" },
  { image: GsapIcon, text: "Gsap" },
];

export const Contacts = [
  {
    title: "WhatSapp",
    image: whatsappIcon,
    link: "+2348169835641",
    contact: "https://wa.me/2348169835641",
  },
  {
    title: "Discord",
    image: discordIcon,
    link: "https://discord.com/channels/@me/1353736704514588883",
    contact: "handle",
  },
  {
    title: "Twitter",
    image: XIcon,
    link: "https://x.com/Fortune644207",
    contact: "@Fortune644207",
  },
  {
    title: "Gmail",
    image: gmailIcon,
    link: "mailto:obefortune2@gmail.com",
    contact: "@Fortune644207",
  },
  // {
  //   title: "FaceBook",
  //   image: facebookIcon,
  //   link: "https://www.facebook.com/fortune-forinite",
  //   contact: "Obe Fortune",
  // },
];

export const WorkProcessInfo = [
  {
    title: "Project Discussion",
    desc: "We will discuss your project and its goals",
    icon: Speech,
  },
  {
    title: "Design And Development",
    desc: "I will design and develop your according to your needs",
    icon: Code,
  },
  {
    title: "Testing & Review",
    desc: "I will let you test the website and make any changes if needed",
    icon: TestTube,
  },
  {
    title: "Launch",
    desc: "I will give you the source code and aid you with the launch",
    icon: Rocket,
  },
];

export const TestimonialsInfo = [
  {
    name: "Nate",
    company: "MavigateMX",
    Rating: ["*", "*", "*", "*", "*"],
    testimony:
      "Working with Fortune was a wonderful experience. He always delivers quality work on time and without any pressure",
  },
  {
    name: "Ochai",
    company: "Payfrica",
    Rating: ["*", "*", "*", "*", "*"],
    testimony:
      "Fortune works very well with pre-designed websites. I gave him my figma designs and he made me a perfect website replical of them!",
  },
  {
    name: "Michael",
    company: "Payfrica",
    Rating: ["*", "*", "*", "*", "*"],
    testimony:
      "Fortune is creative and is always willingly to make suggestions in aspects of design where he finds flaws in. I highly recommend him",
  },
  {
    name: "Fortune",
    company: "Me",
    Rating: ["*", "*", "*", "*", "*"],
    testimony:
      "Fortune keeps an open mind to new technologies and techniques and is always trying to find better ways to solve each problem",
  },
];
