import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./ComposeMail.module.scss";

const ComposeMail: React.FC = () => (
  <div className={styles.composeMail}>
    <div className="header">
      <h3>New Message</h3>
      <CloseIcon />
    </div>
    <div>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <div>
        <Button>Send</Button>
      </div>
    </div>
  </div>
);

export default ComposeMail;
