import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          name="viewport"
        />
        {props.headComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            setTimeout(function () {
              var viewheight = $(window).height();
              var viewwidth = $(window).width();
              var viewport = $("meta[name=viewport]");
              viewport.attr("content", "height=" + viewheight + "px, width=" + 
              viewwidth + "px, initial-scale=1.0");
          }, 300);
        `,
          }}
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
