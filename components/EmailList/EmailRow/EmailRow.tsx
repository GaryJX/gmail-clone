import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";

type Props = {
  id: string;
  title: string;
  subject: string;
  description: string;
  time: string;
};

const EmailRow: React.FC<Props> = ({
  id,
  title,
  subject,
  description,
  time,
}) => (
  <div>
    <div className="options">
      <Checkbox />
      <IconButton></IconButton>
    </div>
    <div className="title"></div>
    <div className="message"></div>
    <div className="description"></div>
  </div>
);

export default EmailRow;
