import { Checkbox, IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import styles from "./EmailListRow.module.scss";
import { useContext } from "react";
import { MailContext } from "../../../reducers/mailReducer";
import { useRouter } from "next/router";

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
}) => {
  const { dispatch } = useContext(MailContext);
  const router = useRouter();

  return (
    <div
      className={styles.emailListRow}
      onClick={() => {
        dispatch({
          type: "selectMail",
          payload: { id, sender, subject, content, date },
        });
        router.push("/mail");
      }}
    >
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
  );
};

export default EmailListRow;
