import Link from "next/link";
import { Checkbox, IconButton, Typography } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import styles from "./EmailListRow.module.scss";

type Props = {
  id: string;
  sender: string;
  subject: string;
  content: string;
  date: string;
};

const EmailListRow: React.FC<Props> = ({
  id,
  sender,
  subject,
  content,
  date,
}) => (
  <Link href="/mail">
    <div className={styles.emailListRow}>
      <div className={styles.options}>
        <Checkbox onClick={(e) => e.stopPropagation()} />
        <IconButton onClick={(e) => e.stopPropagation()}>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton onClick={(e) => e.stopPropagation()}>
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
  </Link>
);

export default EmailListRow;
