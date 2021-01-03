import React, { useContext } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import styles from "./Header.module.scss";
import { MailContext } from "../../../reducers/mailReducer";
import { auth } from "../../../firebase";

const Header: React.FC = () => {
  const { state, dispatch } = useContext(MailContext);

  return (
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
        <Avatar
          src={state.user?.photoURL}
          onClick={() =>
            auth.signOut().then(() => dispatch({ type: "logout" }))
          }
        />
      </div>
    </header>
  );
};

export default Header;
