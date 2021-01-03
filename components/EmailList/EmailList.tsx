import EmailListSettings from "./EmailListSettings/EmailListSettings";
import EmailListSection from "./EmailListSection/EmailListSection";
import EmailListRow from "./EmailListRow/EmailListRow";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import styles from "./EmailList.module.scss";

const EmailList: React.FC = () => (
  <div className={styles.emailList}>
    <EmailListSettings />
    <section>
      <div className={styles.emailSections}>
        <EmailListSection
          icon={<InboxIcon />}
          title="Primary"
          color="#d93025"
          selected
        />
        <EmailListSection
          icon={<PeopleIcon />}
          title="Social"
          color="#1a73e8"
          // selected
        />
        <EmailListSection
          icon={<LocalOfferIcon />}
          title="Promotions"
          color="#188038"
          // selected
        />
      </div>
      <EmailListRow
        id=""
        sender="Sender"
        subject="Subject"
        content="Content Content Content Content Content Content Content ContentContent Content Content Content Content"
        date="Date"
      />
      <EmailListRow
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
