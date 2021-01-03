import { Typography } from "@material-ui/core";
import React from "react";
import styles from "./SidebarTab.module.scss";

type Props = {
  icon: React.ReactNode;
  title: string;
  number: number;
  selected?: boolean;
};

const SidebarTab: React.FC<Props> = ({
  icon,
  title,
  number,
  selected = false,
}) => (
  <div className={`${styles.sidebarTab} ${selected ? styles.active : ""}`}>
    {icon}
    <Typography className={styles.title} variant="h4">
      {title}
    </Typography>
    <Typography className={styles.number} variant="body1">
      {number}
    </Typography>
  </div>
);

export default SidebarTab;
