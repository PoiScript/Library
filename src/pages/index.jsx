import React from 'react'

const styles = {
  body: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  },
  content: {
    flex: 1,
    textAlign: 'center',
    marginTop: '25vh'
  },
  header: {
    fontSize: '5rem',
    letterSpacing: '0.5rem',
    textShadow: '0.3rem 0.3rem 0 #bab5a1'
  },
  subheader: {
    padding: 0,
    margin: 0,
    fontSize: '0.95rem',
    letterSpacing: '0.15rem',
    textShadow: '0.2rem 0.2rem 0 #bab5a1',
    fontWeight: 400
  }
}

export default ({ data }) => (
  <div style={styles.body}>
    <div style={styles.content}>
      <div style={styles.header}>Libreria</div>
      <p style={styles.subheader}>PoiScript's wiki and it's {data.allMarkdownRemark.totalCount} entries so far …</p>
    </div>
  </div>
)

export const homepageQuery = graphql`
  query HomepageQuery {
    allMarkdownRemark {
      totalCount
    }
  }
`
