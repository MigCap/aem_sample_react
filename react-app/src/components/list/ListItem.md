List Component:

```js
const { BrowserRouter } = require("react-router-dom");
const { Route } = require("react-router-dom");
const { Link } = require("react-router-dom");

let item = {
  url: "#",
  path: "item1",
  title: "First Article",
  lastModified: 1539529744910
};
<BrowserRouter>
  <Route key='list-example' path='sample'>
    <ListItem
      path={item.path}
      url={item.url}
      title={item.title}
      date={item.lastModified}
    />
  </Route>
</BrowserRouter>;
```
