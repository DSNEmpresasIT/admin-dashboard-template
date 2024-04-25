import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import SimpleBarReact from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { PiBrowsersBold } from "react-icons/pi";
import { FaPager, FaBuilding, FaUserFriends } from 'react-icons/fa';
import { IoKeySharp } from 'react-icons/io5';
import { SiPowerpages } from "react-icons/si";

import { PAGES, PAGES_PATH } from "@/utils/types/pages";
import { useAuthContext } from "@/context/auth-context";
import { AuthContextState, Roles } from "@/utils/types/types";

export const publicPaths = [
  {
    name: PAGES.HOME,
    link: PAGES_PATH.HOME,
    icon: AiOutlineHome
  },
  {
    name: PAGES.MICROSITE_DETAIL,
    link: PAGES_PATH.MICROSITE_DETAIL,
    icon: FaPager
  },
  {
    name: PAGES.PRODUCTS,
    link: PAGES_PATH.PRODUCTS,
    icon: AiOutlineShoppingCart
  },
  {
    name: PAGES.PROYECTS,
    link: PAGES_PATH.PROYECTS,
    icon: PiBrowsersBold
  },
];

export const adminPaths = [
  {
    name: PAGES.ADMIN_ROLES,
    link: PAGES_PATH.ADMIN_ROLES,
    icon: IoKeySharp
  },
  {
    name: PAGES.ADMIN_COMPANIES,
    link: PAGES_PATH.ADMIN_COMPANIES,
    icon: FaBuilding
  },
  {
    name: PAGES.ADMIN_USERS,
    link: PAGES_PATH.ADMIN_USERS,
    icon: FaUserFriends
  },
  {
    name: PAGES.ADMIN_MICROSITES,
    link: PAGES_PATH.ADMIN_MICROSITES,
    icon: SiPowerpages
  },
];

export default function Sidebar() {
  const { state }: { state: AuthContextState } = useAuthContext();
  const [manu, setManu] = useState("");
  const [subManu, setSubManu] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setManu(pathname);
    setSubManu(pathname);
    window.scrollTo(0, 0);
  }, [setManu, setSubManu]);

  return (
    <nav className="sidebar-wrapper sidebar-dark">
      <div className=" sidebar-content">
        <div className="sidebar-brand">
          <Link href="/">
            <Image
              src="/dashboard/images/logo-icon-64.png"
              placeholder="blur"
              blurDataURL="/dashboard/images/logo-light.png"
              width={64}
              height="64"
              alt=""
            />
          </Link>
        </div>
          <ul className="sidebar-menu border-t border-white/10">
          {publicPaths.map((linkData, index) => (
                <li
                  key={`${index}-nav-li-key`}
                  className={`${
                    [`/${linkData.link}`].includes(manu) ? "active" : ""
                  }`}
                >
                  <Link href={`/${linkData.link}`}>
                    <linkData.icon className=" me-3 icon " />
                    {linkData.name}
                  </Link>
                </li>
              ))}
          </ul>
          {
            state.user.role === Roles.ADMIN && (
              <ul className="sidebar-menu border-t border-white/10">
                <li className="active">
                  <a>
                    ADMIN
                  </a>
                </li>
                {adminPaths.map((linkData, index) => (
                  <li
                    key={`${index}-nav-li-key`}
                    className={`${
                      [`${linkData.link}`].includes(manu) ? "active" : ""
                    }`}
                  >
                    <Link href={`/admin/${linkData.link}`}>
                      <linkData.icon className=" me-3 icon " />
                      {linkData.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )
          }
      </div>
    </nav>
  );
}
