import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import SimpleBarReact from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import {
  AiOutlineLineChart,
  AiOutlineAppstore,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineCamera,
  AiOutlineFile,
} from "react-icons/ai";
import { PiBrowsersBold } from "react-icons/pi";
import { TbBrandBlogger } from "react-icons/tb";
import { BiLogOutCircle, BiLayer } from "react-icons/bi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import { PAGES, PAGES_PATH } from "@/utils/types/pages";

export const navData = [
  {
    name: PAGES.PROYECTS,
    link: PAGES_PATH.PROYECTS,
  },
];

export default function Sidebar() {
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
              src="/images/logo-icon-64.png"
              placeholder="blur"
              blurDataURL="/images/logo-light.png"
              width={64}
              height="64"
              alt=""
            />
          </Link>
        </div>
        <SimpleBarReact style={{ height: "calc(100% - 70px)" }}>
          <ul className="sidebar-menu border-t border-white/10">
            {navData.map((linkData, index) => (
              <li
                key={`${index}-nav-li-key`}
                className={`${
                  [`/${linkData.link}`].includes(manu) ? "active" : ""
                }`}
              >
                <Link href={{ pathname: linkData.link }}>
                  <PiBrowsersBold className=" me-3 icon " />
                  {linkData.name}
                </Link>
              </li>
            ))}
          </ul>
        </SimpleBarReact>
      </div>
    </nav>
  );
}
