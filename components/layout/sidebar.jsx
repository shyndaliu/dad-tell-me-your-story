'use client'
import { HeartIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";


const sidebarItems = [
    {
        name: "item1",
        href: "/read/1",
        icon: HeartIcon
    },
    {
        name: "item2",
        href: "/read/2",
        icon: HeartIcon
    },
    {
        name: "item3",
        href: "/read/3",
        icon: HeartIcon
    },
];
export default function Sidebar() {
    const pathname = usePathname();
    const [isCollapsed, setCollapse] = useState(false);
    const toggleSidebarcollapse = () => {
        setCollapse(!isCollapsed);
    };


    return (
        <div className="transition-all">
            {/* <button className="absolute right-0" onClick={toggleSidebarcollapse}>
                {isCollapsed ? <ArrowRightIcon /> : <ArrowLeftIcon />}
            </button>
            <div className="relative overflow-hidden  w-72 h-3/4 bg-slate-300 font-title">
                <div className="bg-blue-700  px-3 py-3 text-center" >
                    <Link href="/read/1">
                        item1
                    </Link>
                </div>
                <div className="bg-blue-700   px-3 py-3 text-center">
                    <Link href="/read/2">
                        item2
                    </Link>
                </div>
                <div className="bg-blue-700  px-3 py-3 text-center">
                    <Link href="/read/3">
                        item3
                    </Link>
                </div>
            </div> */}
            <ul className="relative overflow-hidden w-72 h-3/4 font-title">
                {sidebarItems.map(({ name, href, icon: Icon }) => {
                    return (
                        <li className="" key={name}>
                            <Link
                                className={`flex justify-center px-3 text-center py-5 ${pathname === href ? "bg-mainyellow text-black " : ""
                                    }`}
                                href={href}
                            >

                                <span className="text-xs">
                                    <Icon />
                                </span>
                                <span className="ml-1">{name}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>

        </div>
    );
};

{/* <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link ${
                    router.pathname === href ? "sidebar__link--active" : ""
                  }`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
              </li>
            ); */}

{/* <ul className="list-none">
                    {sidebarItems.map(({ name, icon: Icon }) => {
                        return (
                            <li className="sidebar__item" key={name}>
                                <span className="inline-block text-lg">
                                    <Icon />
                                </span>
                                <span className="ml-3">{name}</span>
                            </li>
                        );
                    })}
                </ul> */}