/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/styles.less"

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}

export const onClientEntry = () => {
  window.onload = () => {
    setTimeout(function() {
      /* let viewheight = window.visualViewport.height // webkit browsers
      let viewwidth = window.visualViewport.width // webkit browsers */
      let viewheight = window.innerHeight
      let viewwidth = window.innerWidth
      let viewport = document.querySelector("meta[name=viewport]")
      viewport.setAttribute(
        "content",
        "height=" + viewheight + ", width=" + viewwidth + ", initial-scale=1.0"
      )
    }, 300)
  }
}
