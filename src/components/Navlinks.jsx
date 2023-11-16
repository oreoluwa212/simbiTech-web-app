import { NavLink, useLocation } from "react-router-dom";
import OverviewIcon from "../assets/overview.svg";
import CoursesIcon from "../assets/courses.svg";
import MentorsIcon from "../assets/mentors.svg";
import HubIcon from "../assets/oh-icon.svg";
import RoadmapIcon from "../assets/roadmap.svg";
import LibraryIcon from "../assets/library.svg";
import CommunityIcon from "../assets/community.svg";
import SettingsIcon from "../assets/settings.svg";

const links = [
  {
    name: "Overview",
    route: "/overview",
    imageUrl: OverviewIcon,
  },
  {
    name: "Courses",
    route: "/courses",
    imageUrl: CoursesIcon,
  },
  {
    name: "Mentors",
    route: "/mentors",
    imageUrl: MentorsIcon,
  },
  {
    name: "Opportunity Hub",
    route: "/opportunity-hub",
    imageUrl: HubIcon,
  },
  {
    name: "Track Roadmap",
    route: "/track-roadmap",
    imageUrl: RoadmapIcon,
  },
  {
    name: "Material Library",
    route: "/material-library",
    imageUrl: LibraryIcon,
  },
  {
    name: "Settings",
    route: "/settings",
    imageUrl: SettingsIcon,
  },
];

const Navlinks = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.route}>
            <NavLink
              to={link.route}
              className={`flex flex-row items-center mb-6 gap-4 ${
                pathname === link.route ? "rounded-lg bg-black-100 py-[.4rem] w-[200px] pl-2" : ""
              }`}
            >
              <img src={link.imageUrl} alt="" className="w-5" />
              <span className="font-source text-[1.1rem] font-normal leading-7 whitespace-nowrap">
                {link.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navlinks;
