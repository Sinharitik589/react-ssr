import express from "express";
import "babel-polyfill";
import proxy from "express-http-proxy";
import createStore from "./helpers/createStore";
import renderer from "./helpers/renderer"
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
const app = express();
app.use("/api",  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    }
  }));//extra argument is to set up the destination of redirect from oauth
app.use(express.static("public"));
//setting reducer here since we are not using provider tag
//that works after the initial render of our app
//No action creator called
app.get("*", (req, res) =>
{
    const store = createStore(req);

    //some logic to initialize and load data 
    //into the store
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    });
    
    Promise.all(promises).then(() =>
    {
          res.send(renderer(req,store));
    })
   
});


app.listen(3000, () => {
    console.log("listening on port 3000");
});