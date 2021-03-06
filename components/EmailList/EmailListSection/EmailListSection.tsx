import { Typography } from "@material-ui/core";
import styles from "./EmailListSection.module.scss";

type Props = {
  icon: React.ReactNode;
  title: string;
  color: string;
  selected?: boolean;
};

const EmailListSection: React.FC<Props> = ({
  icon,
  title,
  color,
  selected = false,
}) => (
  <div
    className={`${styles.emailListSection} ${selected ? styles.selected : ""}`}
    style={{ color: `${selected ? color : "#818181"}` }}
  >
    {icon}
    <Typography variant="body1" component="h4">
      {title}
    </Typography>
    {selected && (
      <div className={styles.bottomBorder} style={{ backgroundColor: color }} />
    )}
  </div>
);

export default EmailListSection;
