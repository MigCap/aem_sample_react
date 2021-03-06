import React from "react";
// eslint-disable-next-line
import {
  Page,
  withModel,
  EditorContext,
  Utils
} from "@adobe/cq-react-editable-components";
import Header from "./components/header/Header";

// This component is the application entry point
class App extends Page {
  render() {
    return (
      <div className='App'>
        <Header navigationRoot='/content/wknd-events/react/home' root='/content/wknd-events/react' />
        {this.childComponents}
        {this.childPages}
      </div>
    );
  }
}

export default withModel(App);
