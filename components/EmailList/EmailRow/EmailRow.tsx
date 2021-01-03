import { Checkbox, IconButton, Typography } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import styles from "./EmailRow.module.scss";

type Props = {
  id: string;
  sender: string;
  subject: string;
  content: string;
  date: string;
};

const EmailRow: React.FC<Props> = ({ id, sender, subject, content, date }) => (
  <div className={styles.emailRow}>
    <div className={styles.options}>
      <Checkbox />
      <IconButton>
        <StarBorderOutlinedIcon />
      </IconButton>
      <IconButton>
        <LabelImportantOutlinedIcon />
      </IconButton>
    </div>
    <div className="sender">{sender}</div>
    <div className={styles.messageWrapper}>
      <div className={styles.message}>
        <span className={styles.subject}>{subject}</span> - {content}
      </div>
    </div>
    <div className={styles.date}>{date}</div>
  </div>
);

export default EmailRow;
