import React from "react";
import EmailSettings from "./EmailSettings/EmailSettings";
import { Paper, Typography } from "@material-ui/core";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import styles from "./Email.module.scss";

const Email: React.FC = () => (
  <div className={styles.email}>
    <EmailSettings />
    <Paper className={styles.body}>
      <div className={styles.bodyHeader}>
        <div className={styles.bodyHeaderLeft}>
          <Typography variant="h5" component="h2">
            Subject
          </Typography>
          <LabelImportantIcon />
          <p className={styles.title}>Title</p>
        </div>
        <p className={styles.time}>Time</p>
      </div>
      <div className={styles.bodyContent}>Message</div>
    </Paper>
  </div>
);

export default Email;
