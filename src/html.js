import React from "react"

// let inlinedStyles = "";
// if (process.env.NODE_ENV === "production") {
//   try {
//     inlinedStyles = require("!raw-loader!../public/styles.css");
//   } catch (e) {
//     console.log(e);
//   }
// }

export default class HTML extends React.Component {
  render() {
    const jquery = <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" ></script>
    const bootstrap = <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" ></script>
    const tether = <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" ></script>
    const font = <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
    const fontawesome = <script src="https://use.fontawesome.com/fe515ba946.js"></script>
    const analytics = <script async="" src="https://www.google-analytics.com/analytics.js"></script>
    const favicon =  <link href="/redcarpetcom/favicon.ico" rel="shortcut icon" type="image/x-icon"/>
    let css;
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        />
      );
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
         {css}
        { jquery }
        { tether }
      { bootstrap }
        { font }
      { fontawesome }
      { analytics }
      { favicon }
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}