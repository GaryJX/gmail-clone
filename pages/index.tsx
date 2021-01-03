import EmailList from "../components/EmailList/EmailList";
import EmailSettings from "../components/EmailSettings/EmailSettings";
import Layout from "../components/Layout/Layout";

const Index: React.FC = () => (
  <Layout>
    <EmailSettings />
    <EmailList />
  </Layout>
);

export default Index;
