Button WNKD blue (No Link. onClick method):

```js
<Button buttonText='Button Text' buttonColour='btn-primary' />
```

Button WNKD Light Blue (With Link):

```js
const { Route } = require("react-router-dom");
const { BrowserRouter } = require("react-router-dom");

<BrowserRouter>
  <Route key='button-example' path='sample'>
    <Button buttonText='Button Text' buttonLink='#' buttonColour='btn-info' />
  </Route>
</BrowserRouter>;
```

Button WNKD Yellow (With Link):

```js
const { Route } = require("react-router-dom");
const { BrowserRouter } = require("react-router-dom");

<BrowserRouter>
  <Route key='button-example' path='sample'>
    <Button
      buttonText='Button Text'
      buttonLink='#'
      buttonColour='btn-warning'
    />
  </Route>
</BrowserRouter>;
```
