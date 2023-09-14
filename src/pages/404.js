import React from "react"
import Layout from "../components/layout"

const NotFoundPage = ({pageContext}) => (
  <Layout pageContext={pageContext}>
    <div className="flex flex-col justify-center items-center whitespace-nowrap"
      style={{ marginTop: "25%", marginBottom: "25%",left: "50%" }}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
