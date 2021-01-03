import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropdownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import styles from "./EmailListSettings.module.scss";

const EmailListSettings: React.FC = () => (
  <section className={styles.emailListSettings}>
    <div>
      <Checkbox />
      <IconButton>
        <ArrowDropdownIcon />
      </IconButton>
      <IconButton>
        <RedoIcon />
      </IconButton>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </div>
    <div>
      <IconButton>
        <ChevronLeftIcon />
      </IconButton>
      <IconButton>
        <ChevronRightIcon />
      </IconButton>
      <IconButton>
        <KeyboardHideIcon />
      </IconButton>
      <IconButton>
        <SettingsIcon />
      </IconButton>
    </div>
  </section>
);

export default EmailListSettings;
