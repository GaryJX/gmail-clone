import React from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import styles from "./Sidebar.module.scss";
import SidebarTab from "../SidebarTab/SidebarTab";

const Sidebar: React.FC = () => (
  <aside className={styles.sidebar}>
    <Button
      variant="contained"
      startIcon={<AddIcon />}
      className={styles.composeBtn}
    >
      Compose
    </Button>
    <SidebarTab icon={<InboxIcon />} title="Inbox" number={123} />
  </aside>
);

export default Sidebar;
