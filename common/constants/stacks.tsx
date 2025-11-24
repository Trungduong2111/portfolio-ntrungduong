import { BiLogoPostgresql } from 'react-icons/bi';
import { BsFillBootstrapFill, BsRobot } from 'react-icons/bs';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { FaNpm, FaGolang } from 'react-icons/fa6';
import {
  SiCss3,
  SiExpress,
  SiFramer,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiLaravel,
  SiPhp,
  SiRedux,
  SiVuedotjs,
  SiFirebase,
  SiReactrouter,
  SiReacthookform,
  SiReacttable,
  SiMysql,
  SiMongodb,
  SiAstro,
  SiBun,
  SiYarn,
  SiNestjs,
  SiSupabase,
  SiJest,
  SiDocker,
  SiKotlin,
  SiCucumber,
  SiSelenium,
  SiTestinglibrary,
  SiAngular,
  SiMui,
} from 'react-icons/si';

export type SkillProps = {
  [key: string]: {
    icon: JSX.Element;
    background: string;
    color: string;
    isActive?: boolean;
  };
};

const PlaywrightIcon = ({ size = 26 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M136.444 221.556C123.558 225.213 115.104 231.625 109.535 238.032C114.869 233.364 122.014 229.08 131.652 226.348C141.51 223.554 149.92 223.574 156.869 224.915V219.481C150.941 218.939 144.145 219.371 136.444 221.556ZM108.946 175.876L61.0895 188.484C61.0895 188.484 61.9617 189.716 63.5767 191.36L104.153 180.668C104.153 180.668 103.578 188.077 98.5847 194.705C108.03 187.559 108.946 175.876 108.946 175.876ZM149.005 288.347C81.6582 306.486 46.0272 228.438 35.2396 187.928C30.2556 169.229 28.0799 155.067 27.5 145.928C27.4377 144.979 27.4665 144.179 27.5336 143.446C24.04 143.657 22.3674 145.473 22.7077 150.721C23.2876 159.855 25.4633 174.016 30.4473 192.721C41.2301 233.225 76.8659 311.273 144.213 293.134C158.872 289.185 169.885 281.992 178.152 272.81C170.532 279.692 160.995 285.112 149.005 288.347ZM161.661 128.11V132.903H188.077C187.535 131.206 186.989 129.677 186.447 128.11H161.661Z"
      fill="#2D4552"
    />
    <path
      d="M193.981 167.584C205.861 170.958 212.144 179.287 215.465 186.658L228.711 190.42C228.711 190.42 226.904 164.623 203.57 157.995C181.741 151.793 168.308 170.124 166.674 172.496C173.024 167.972 182.297 164.268 193.981 167.584ZM299.422 186.777C277.573 180.547 264.145 198.916 262.535 201.255C268.89 196.736 278.158 193.031 289.837 196.362C301.698 199.741 307.976 208.06 311.307 215.436L324.572 219.212C324.572 219.212 322.736 193.41 299.422 186.777ZM286.262 254.795L176.072 223.99C176.072 223.99 177.265 230.038 181.842 237.869L274.617 263.805C282.255 259.386 286.262 254.795 286.262 254.795ZM209.867 321.102C122.618 297.71 133.166 186.543 147.284 133.865C153.097 112.156 159.073 96.0203 164.029 85.204C161.072 84.5953 158.623 86.1529 156.203 91.0746C150.941 101.747 144.212 119.124 137.7 143.45C123.586 196.127 113.038 307.29 200.283 330.682C241.406 341.699 273.442 324.955 297.323 298.659C274.655 319.19 245.714 330.701 209.867 321.102Z"
      fill="#2D4552"
    />
    <path
      d="M161.661 262.296V239.863L99.3324 257.537C99.3324 257.537 103.938 230.777 136.444 221.556C146.302 218.762 154.713 218.781 161.661 220.123V128.11H192.869C189.471 117.61 186.184 109.526 183.423 103.909C178.856 94.612 174.174 100.775 163.545 109.665C156.059 115.919 137.139 129.261 108.668 136.933C80.1966 144.61 57.179 142.574 47.5752 140.911C33.9601 138.562 26.8387 135.572 27.5049 145.928C28.0847 155.062 30.2605 169.224 35.2445 187.928C46.0272 228.433 81.663 306.481 149.01 288.342C166.602 283.602 179.019 274.233 187.626 262.291H161.661V262.296ZM61.0848 188.484L108.946 175.876C108.946 175.876 107.551 194.288 89.6087 199.018C71.6614 203.743 61.0848 188.484 61.0848 188.484Z"
      fill="#E2574C"
    />
    <path
      d="M341.786 129.174C329.345 131.355 299.498 134.072 262.612 124.185C225.716 114.304 201.236 97.0224 191.537 88.8994C177.788 77.3834 171.74 69.3802 165.788 81.4857C160.526 92.163 153.797 109.54 147.284 133.866C133.171 186.543 122.623 297.706 209.867 321.098C297.093 344.47 343.53 242.92 357.644 190.238C364.157 165.917 367.013 147.5 367.799 135.625C368.695 122.173 359.455 126.078 341.786 129.174ZM166.497 172.756C166.497 172.756 180.246 151.372 203.565 158C226.899 164.628 228.706 190.425 228.706 190.425L166.497 172.756ZM223.42 268.713C182.403 256.698 176.077 223.99 176.077 223.99L286.262 254.796C286.262 254.791 264.021 280.578 223.42 268.713ZM262.377 201.495C262.377 201.495 276.107 180.126 299.422 186.773C322.736 193.411 324.572 219.208 324.572 219.208L262.377 201.495Z"
      fill="#2EAD33"
    />
    <path
      d="M139.88 246.04L99.3324 257.532C99.3324 257.532 103.737 232.44 133.607 222.496L110.647 136.33L108.663 136.933C80.1918 144.611 57.1742 142.574 47.5704 140.911C33.9554 138.563 26.834 135.572 27.5001 145.929C28.08 155.063 30.2557 169.224 35.2397 187.929C46.0225 228.433 81.6583 306.481 149.005 288.342L150.989 287.719L139.88 246.04ZM61.0848 188.485L108.946 175.876C108.946 175.876 107.551 194.288 89.6087 199.018C71.6615 203.743 61.0848 188.485 61.0848 188.485Z"
      fill="#D65348"
    />
    <path
      d="M225.27 269.163L223.415 268.712C182.398 256.698 176.072 223.99 176.072 223.99L232.89 239.872L262.971 124.281L262.607 124.185C225.711 114.304 201.232 97.0224 191.532 88.8994C177.783 77.3834 171.735 69.3802 165.783 81.4857C160.526 92.163 153.797 109.54 147.284 133.866C133.171 186.543 122.623 297.706 209.867 321.097L211.655 321.5L225.27 269.163ZM166.497 172.756C166.497 172.756 180.246 151.372 203.565 158C226.899 164.628 228.706 190.425 228.706 190.425L166.497 172.756Z"
      fill="#1D8D22"
    />
    <path
      d="M141.946 245.451L131.072 248.537C133.641 263.019 138.169 276.917 145.276 289.195C146.513 288.922 147.74 288.687 149 288.342C152.302 287.451 155.364 286.348 158.312 285.145C150.371 273.361 145.118 259.789 141.946 245.451ZM137.7 143.451C132.112 164.307 127.113 194.326 128.489 224.436C130.952 223.367 133.554 222.371 136.444 221.551L138.457 221.101C136.003 188.939 141.308 156.165 147.284 133.866C148.799 128.225 150.318 122.978 151.832 118.085C149.393 119.637 146.767 121.228 143.776 122.867C141.759 129.093 139.722 135.898 137.7 143.451Z"
      fill="#C04B41"
    />
  </svg>
);
const PrimeNGIcon = ({ size = 26 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 57 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.3 0L0.072876 10.0264L4.3782 47.2026L28.3 60.4L52.2218 47.2026L56.5271 10.0264L28.3 0Z"
      fill="#DD0031"
    />
    <mask id="mask0_0:917" maskUnits="userSpaceOnUse" x="0" y="0" width="57" height="61">
      <path
        d="M28.3 0L0.072876 10.0264L4.3782 47.2026L28.3 60.4L52.2218 47.2026L56.5271 10.0264L28.3 0Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_0:917)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.3 0V6.7044V6.6742V37.2668V60.4L52.2218 47.2026L56.5271 10.0264L28.3 0Z"
        fill="#C3002F"
      />
    </g>
    <path
      d="M36.5739 28.6458L33.8661 28.0443L35.9722 31.0519V40.3756L43.193 34.3603V24.1344L39.8835 25.3374L36.5739 28.6458Z"
      fill="white"
    />
    <path
      d="M19.7252 28.6458L22.433 28.0443L20.327 31.0519V40.3756L13.1061 34.3603V24.1344L16.4157 25.3374L19.7252 28.6458Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21.2 31.6164L23.6 28L25.1 28.9041H31.1L32.6 28L35 31.6164V45.1781L33.2 47.8904L31.1 50H25.1L23 47.8904L21.2 45.1781V31.6164Z"
      fill="white"
    />
    <path d="M35.9722 46.0901L39.8835 42.1802V38.2702L35.9722 41.5786V46.0901Z" fill="white" />
    <path d="M20.327 46.0901L16.4157 42.1802V38.2702L20.327 41.5786V46.0901Z" fill="white" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24.2383 10.6L21.8313 16.3145L25.7426 27.7435H27.5478V10.6H24.2383ZM28.7513 10.6V27.7435H30.8574L34.4678 16.3145L32.0609 10.6H28.7513Z"
      fill="white"
    />
    <path
      d="M25.7426 27.7435L12.8052 22.9313L11 15.4122L22.1322 16.3145L26.0435 27.7435H25.7426Z"
      fill="white"
    />
    <path
      d="M30.8574 27.7435L43.7948 22.9313L45.6 15.4122L34.1669 16.3145L30.5565 27.7435H30.8574Z"
      fill="white"
    />
    <path d="M35.0696 15.4122L41.3878 14.8107L37.1757 10.6H32.9635L35.0696 15.4122Z" fill="white" />
    <path d="M21.2295 15.4122L14.9113 14.8107L19.1235 10.6H23.3356L21.2295 15.4122Z" fill="white" />
  </svg>
);
const iconSize = 26;

export const STACKS: SkillProps = {
  HTML: {
    icon: <SiHtml5 size={iconSize} />,
    background: 'bg-orange-500',
    color: 'text-orange-500',
    isActive: true,
  },
  CSS: {
    icon: <SiCss3 size={iconSize} />,
    background: 'bg-blue-500',
    color: 'text-blue-500',
    isActive: true,
  },
  Bootstrap: {
    icon: <BsFillBootstrapFill size={iconSize} />,
    background: 'bg-violet-600',
    color: 'text-violet-600',
    isActive: true,
  },
  TailwindCSS: {
    icon: <SiTailwindcss size={iconSize} />,
    background: 'bg-sky-400',
    color: 'text-sky-400',
    isActive: true,
  },
  JavaScript: {
    icon: <SiJavascript size={iconSize} />,
    background: 'bg-yellow-400',
    color: 'text-yellow-400',
    isActive: true,
  },
  TypeScript: {
    icon: <SiTypescript size={iconSize} />,
    background: 'bg-blue-500',
    color: 'text-blue-500',
    isActive: true,
  },
  // "Vue.js": {
  //   icon: <SiVuedotjs size={iconSize} />,
  //   background: "bg-green-400",
  //   color: "text-green-400",
  //   isActive: true,
  // },
  'React.js': {
    icon: <SiReact size={iconSize} />,
    background: 'bg-cyan-400',
    color: 'text-cyan-400',
    isActive: true,
  },
  // "React Table": {
  //   icon: <SiReacttable size={iconSize} />,
  //   background: "bg-rose-600",
  //   color: "text-rose-600",
  //   isActive: true,
  // },
  'React Hook Form': {
    icon: <SiReacthookform size={iconSize} />,
    background: 'bg-pink-500',
    color: 'text-pink-500',
    isActive: true,
  },
  'React Router': {
    icon: <SiReactrouter size={iconSize} />,
    background: 'bg-red-500',
    color: 'text-red-500',
    isActive: true,
  },
  Angular: {
    icon: <SiAngular size={iconSize} />,
    background: 'bg-[#E33332]', // Testing Library red
    color: 'text-white',
    isActive: true,
  },
  Mui: {
    icon: <SiMui size={iconSize} />,
    background: 'bg-[#007FFF]', // MUI official blue
    color: 'text-white',
    isActive: true,
  },
  Vite: {
    icon: <SiVite size={iconSize} />,
    background: 'bg-purple-500',
    color: 'text-purple-500',
    isActive: true,
  },
  // "Framer Motion": {
  //   icon: <TbBrandFramerMotion size={iconSize} />,
  //   background: "bg-yellow-400",
  //   color: "text-yellow-400",
  //   isActive: true,
  // },
  Redux: {
    icon: <SiRedux size={iconSize} />,
    background: 'bg-violet-500',
    color: 'text-violet-500',
    isActive: true,
  },
  // "Astro.js": {
  //   icon: <SiAstro size={iconSize} />,
  //   background: "bg-violet-600",
  //   color: "text-violet-600",
  //   isActive: true,
  // },
  'Next.js': {
    icon: <SiNextdotjs size={iconSize} />,
    background: 'bg-neutral-800',
    color: 'text-neutral-50',
    isActive: true,
  },
  // "Node.js": {
  //   icon: <SiNodedotjs size={iconSize} />,
  //   background: "bg-green-600",
  //   color: "text-green-600",
  //   isActive: true,
  // },
  // "Express.js": {
  //   icon: <SiExpress size={iconSize} />,
  //   background: "bg-neutral-800",
  //   color: "text-neutral-800",
  //   isActive: true,
  // },
  // "Nest.js": {
  //   icon: <SiNestjs size={iconSize} />,
  //   background: "bg-rose-600",
  //   color: "text-rose-600",
  //   isActive: false,
  // },
  // Go: {
  //   icon: <FaGolang size={iconSize} />,
  //   background: "bg-sky-500",
  //   color: "text-sky-500",
  //   isActive: true,
  // },
  // PHP: {
  //   icon: <SiPhp size={iconSize} />,
  //   background: "bg-indigo-400",
  //   color: "text-indigo-400",
  //   isActive: true,
  // },
  // Laravel: {
  //   icon: <SiLaravel size={iconSize} />,
  //   background: "bg-red-700",
  //   color: "text-red-700",
  //   isActive: true,
  // },
  // Prisma: {
  //   icon: <SiPrisma size={iconSize} />,
  //   background: "bg-teal-500",
  //   color: "text-teal-500",
  //   isActive: true,
  // },
  // Kotlin: {
  //   icon: <SiKotlin size={iconSize} />,
  //   background: "bg-violet-600",
  //   color: "text-violet-600",
  //   isActive: true,
  // },
  // PostgreSql: {
  //   icon: <BiLogoPostgresql size={iconSize} />,
  //   background: "bg-blue-500",
  //   color: "text-blue-500",
  //   isActive: true,
  // },
  // MySql: {
  //   icon: <SiMysql size={iconSize} />,
  //   background: "bg-cyan-700",
  //   color: "text-cyan-700",
  //   isActive: true,
  // },
  // MongoDb: {
  //   icon: <SiMongodb size={iconSize} />,
  //   background: "bg-green-600",
  //   color: "text-green-600",
  //   isActive: true,
  // },
  // Firebase: {
  //   icon: <SiFirebase size={iconSize} />,
  //   background: "bg-amber-500",
  //   color: "text-amber-500",
  //   isActive: true,
  // },
  // Supabase: {
  //   icon: <SiSupabase size={iconSize} />,
  //   background: "bg-emerald-500",
  //   color: "text-emerald-500",
  //   isActive: true,
  // },
  // Jest: {
  //   icon: <SiJest size={iconSize} />,
  //   background: "bg-pink-600",
  //   color: "text-pink-600",
  //   isActive: false,
  // },
  // Docker: {
  //   icon: <SiDocker size={iconSize} />,
  //   background: "bg-blue-600",
  //   color: "text-blue-500",
  //   isActive: true,
  // },
  // AI: {
  //   icon: <BsRobot size={iconSize} />,
  //   background: "bg-fuchsia-700",
  //   color: "text-fuchsia-700",
  //   isActive: true,
  // },
  Npm: {
    icon: <FaNpm size={iconSize} />,
    background: 'bg-red-700',
    color: 'text-red-500',
    isActive: true,
  },
  Yarn: {
    icon: <SiYarn size={iconSize} />,
    background: 'bg-violet-800',
    color: 'text-sky-400',
    isActive: true,
  },
  // bun: {
  //   icon: <SiBun size={iconSize} />,
  //   background: "bg-orange-100",
  //   color: "text-yellow-50",
  //   isActive: true,
  // },
  Github: {
    icon: <SiGithub size={iconSize} />,
    background: 'bg-slate-800',
    color: 'text-neutral-50',
    isActive: true,
  },
  Cucumber: {
    icon: <SiCucumber size={iconSize} />,
    background: 'bg-[#23D96C]', // Cucumber green
    color: 'text-white',
    isActive: true,
  },
  Selenium: {
    icon: <SiSelenium size={iconSize} />,
    background: 'bg-[#43B02A]', // Selenium green
    color: 'text-white',
    isActive: true,
  },
  Testinglibrary: {
    icon: <SiTestinglibrary size={iconSize} />,
    background: 'bg-[#E33332]', // Testing Library red
    color: 'text-white',
    isActive: true,
  },
  Playwright: {
    icon: <PlaywrightIcon size={iconSize} />,
    background: 'bg-[#2EAD33]', // Playwright green
    color: 'text-white',
    isActive: true,
  },
  PrimeNG: {
    icon: <PrimeNGIcon size={iconSize} />,
    background: 'bg-[#1976D2]', // PrimeNG official blue ✅
    color: 'text-white',
    isActive: true,
  },
};
