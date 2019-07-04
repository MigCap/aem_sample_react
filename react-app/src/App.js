import React from "react";
// eslint-disable-next-line
import {
  Page,
  withModel,
  EditorContext,
  Utils
} from "@adobe/cq-react-editable-components";

// This component is the application entry point
class App extends Page {
  render() {
    return (
      <div className='App'>
        <header className='App-header text-center'>
          <h1>Welcome to AEM + React</h1>
        </header>
        {this.childComponents}
        {this.childPages}
      </div>
    );
  }
}

export default withModel(App);
