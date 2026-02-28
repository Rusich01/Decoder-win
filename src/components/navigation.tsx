import { NavLink } from "react-router-dom";
import { ROUTES } from "../router/routes";

const Navigation = () => {
  return (
    <nav className="bg-linear-to-r from-blue-600 to-indigo-600 px-10 py-6">
      <ul className="flex gap-4">
        <li className="text-white text-3xl font-semibold tracking-wide">
          <NavLink
            className={({ isActive }) =>
              `flex transition active:scale-95 ${
                isActive ? "border-b-2 border-white" : " hover:text-[#cfcaca]"
              }`
            }
            to={ROUTES.DECODER}
          >
            Decoder
          </NavLink>
        </li>

        <li className="text-white text-3xl font-semibold tracking-wide">
          <NavLink
            className={({ isActive }) =>
              `flex transition active:scale-95 ${
                isActive ? "border-b-2 border-white" : " hover:text-[#cfcaca]"
              }`
            }
            to={ROUTES.VARIABLES}
          >
            Variables
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
