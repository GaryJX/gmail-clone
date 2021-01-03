import { Button, IconButton, Paper, TextField } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../../firebase";
import { MailContext } from "../../../reducers/mailReducer";
import firebase from "firebase";
import styles from "./ComposeMail.module.scss";

const ComposeMail: React.FC = () => {
  const { dispatch } = useContext(MailContext);
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (formData: any) => {
    console.log(formData);
    const { recipients, subject, content } = formData;
    db.collection("emails").add({
      recipients,
      subject,
      content,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch({ type: "closeComposeMessage" });
  };

  return (
    <Paper elevation={5} className={styles.composeMail}>
      <div className={styles.header}>
        <h3>New Message</h3>
        <IconButton
          size="small"
          onClick={() => dispatch({ type: "closeComposeMessage" })}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <div className={styles.form}>
        <TextField
          name="recipients"
          className={styles.recipients}
          placeholder="Recipients"
          inputRef={register({ required: true })}
          error={errors.recipients}
          helperText={errors.recipients && "Recipients cannot be empty"}
        />
        <TextField
          name="subject"
          className={styles.subject}
          placeholder="Subject"
          inputRef={register({ required: true })}
          error={errors.subject}
          helperText={errors.subject && "Subject cannot be empty"}
        />
        <TextField
          name="content"
          className={styles.content}
          multiline
          inputRef={register({ required: true })}
          error={errors.content}
          helperText={errors.content && "Message content cannot be empty"}
        />
        <div className={styles.options}>
          <Button
            className={styles.sendBtn}
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Send
          </Button>
        </div>
      </div>
    </Paper>
  );
};

export default ComposeMail;
