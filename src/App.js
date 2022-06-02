import "@aws-amplify/ui-react/styles.css";
import * as React from "react";
import ReactDOM from "react-dom";
import { withAuthenticator, Heading, Button, View, Card } from "@aws-amplify/ui-react";
import Container from "@mui/material/Container";

function App({ signOut }) {
  return (
    <React.Fragment>
      <View className="App">
        <Card>
          <Heading level={1}>Website</Heading>
          <Button onClick={signOut}>Sign Out</Button>
        </Card>
      </View>
    </React.Fragment>
  );
}

export default withAuthenticator(App);
