import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import styles from "./Header.module.scss";

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.headerLeft}>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <img
        src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" // TODO: Replace this with my own image
        alt="Gmail Logo"
      />
    </div>
    <div className={styles.headerCenter}>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <input placeholder="Search mail" type="text" />
      <IconButton>
        <ArrowDropDownIcon />
      </IconButton>
    </div>
    <div className={styles.headerRight}>
      <IconButton>
        <AppsIcon />
      </IconButton>
      <IconButton>
        <NotificationsIcon />
      </IconButton>
      <Avatar />
    </div>
  </header>
);

export default Header;
