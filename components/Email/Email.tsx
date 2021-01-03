import React, { useContext } from "react";
import EmailSettings from "./EmailSettings/EmailSettings";
import { Paper, Typography } from "@material-ui/core";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import styles from "./Email.module.scss";
import { MailContext } from "../../reducers/mailReducer";

const Email: React.FC = () => {
  const {
    state: { selectedMail },
  } = useContext(MailContext);

  return (
    <div className={styles.email}>
      <EmailSettings />
      <Paper className={styles.body}>
        <div className={styles.bodyHeader}>
          <div className={styles.bodyHeaderLeft}>
            <Typography variant="h5" component="h2">
              {selectedMail?.subject}
            </Typography>
            <LabelImportantIcon />
            <p className={styles.title}>{selectedMail?.sender}</p>
          </div>
          <p className={styles.time}>{selectedMail?.date}</p>
        </div>
        <div className={styles.bodyContent}>{selectedMail?.content}</div>
      </Paper>
    </div>
  );
};

export default Email;
