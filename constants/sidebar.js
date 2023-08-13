/* eslint-disable prettier/prettier */
import dashboard from "../assets/sidebar/1.svg";
import products from "../assets/sidebar/2.svg";
import profile from "../assets/sidebar/3.svg";
import comments from "../assets/sidebar/4.svg";
import settings from "../assets/sidebar/5.svg";
import dashboard1 from "../assets/sidebar/11.svg";
import products1 from "../assets/sidebar/12.svg";
import profile1 from "../assets/sidebar/13.svg";
import comments1 from "../assets/sidebar/14.svg";
import settings1 from "../assets/sidebar/15.svg";

export const sidebar = [
    { id: 1, icon: dashboard, icon1: dashboard1, title: "Dashboard", path: "/" },
    {
        id: 2,
        icon: products,
        icon1: products1,
        title: "Mahsulotlar",
        path: "/products",
    },
    { id: 3, icon: profile, icon1: profile1, title: "Profil", path: "/profile" },
    {
        id: 4,
        icon: comments,
        icon1: comments1,
        title: "Sharhlar",
        path: "/comments",
    },
    {
        id: 5,
        icon: settings,
        icon1: settings1,
        title: "Sozlamalar",
        path: "/settings",
    },
];
