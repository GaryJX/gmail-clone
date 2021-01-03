import EmailListSettings from "./EmailListSettings/EmailListSettings";
import EmailListSection from "./EmailListSection/EmailListSection";
import EmailListRow from "./EmailListRow/EmailListRow";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import styles from "./EmailList.module.scss";
import { useState, useEffect } from "react";
import { db } from "../../firebase";

const EmailList: React.FC = () => {
  const [emails, setEmails] = useState<
    {
      id: string;
      subject: string;
      content: string;
      recipients: string;
      timestamp: any;
    }[]
  >([]);

  // TODO: Move this to _app.tsx so it is global state instead, so that it doesn't refetch when I change pages and come back to this page
  useEffect(() => {
    console.log("HELLO");
    // TODO: Probably this is an expensive / inefficient way to do firebase queries, especially with large amounts of emails
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => {
            console.log("Regetting data");
            console.log(doc.id);
            const { subject, content, recipients, timestamp } = doc.data();
            return {
              id: doc.id,
              subject,
              content,
              recipients,
              timestamp,
            };
          })
        )
      );
  }, []);

  return (
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
        {emails.map((email) => (
          <EmailListRow
            key={email.id}
            id={email.id}
            sender={"TODO"}
            subject={email.subject}
            content={email.content}
            date={new Date(email.timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </section>
    </div>
  );
};

export default EmailList;
