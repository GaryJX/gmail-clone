import EmailSection from "./EmailSection/EmailSection";
import EmailRow from "./EmailRow/EmailRow";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import styles from "./EmailList.module.scss";

const EmailList: React.FC = () => (
  <div>
    <section className={styles.emailList}>
      <div className={styles.emailSections}>
        <EmailSection
          icon={<InboxIcon />}
          title="Primary"
          color="#d93025"
          selected
        />
        <EmailSection
          icon={<PeopleIcon />}
          title="Social"
          color="#1a73e8"
          // selected
        />
        <EmailSection
          icon={<LocalOfferIcon />}
          title="Promotions"
          color="#188038"
          // selected
        />
      </div>
      <EmailRow
        id=""
        sender="Sender"
        subject="Subject"
        content="Content Content Content Content Content Content Content ContentContent Content Content Content Content"
        date="Date"
      />
      <EmailRow
        id=""
        sender="Sender"
        subject="Subject"
        content="Content Content Content Content Content Content Content ContentContentContent Content Content Content Content Content Content ContentContent Content Content Content Content"
        date="Date"
      />
    </section>
  </div>
);

export default EmailList;
