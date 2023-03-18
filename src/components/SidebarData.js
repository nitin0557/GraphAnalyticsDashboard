import React from "react";
import * as IoIcons from "react-icons/io";
import * as HiIcons from "react-icons/hi";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as RxIcons from "react-icons/rx";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <HiIcons.HiHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Analytics",
        path: "/dashboard/analytics",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Project",
        path: "/dashboard/project",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "System",
        path: "/dashboard/system",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Monitor",
        path: "/dashboard/monitor",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Financial",
        path: "/dashboard/financial",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Stock",
        path: "/dashboard/stock",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Widgets",
    path: "/widgets",
    icon: <MdIcons.MdWidgets />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Widgets",
        path: "/widgets/widgets1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },

      {
        title: "Widgets",
        path: "/widgets/widgets3",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },

  {
    title: "Cards",
    path: "/cards",
    icon: <RxIcons.RxCardStack />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Cards",
        path: "/cards/cards",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "CardsHeader",
        path: "/cards/cards-header",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
