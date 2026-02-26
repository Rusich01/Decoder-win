import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="flex gap-4 bg-linear-to-r from-blue-600 to-indigo-600 px-10 py-6">
      <li className="text-white text-3xl font-semibold tracking-wide">
        <NavLink
          className={({ isActive }) =>
            `flex transition active:scale-95 ${
              isActive ? "border-b-2 border-white" : " hover:text-[#cfcaca]"
            }`
          }
          to="/decoder"
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
          to="/variables"
        >
          Variables
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
