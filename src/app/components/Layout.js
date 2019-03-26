import Head from 'next/head';
import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = props => (
  <div>
    <Head>
      <title>My styled page</title>
      <link href={`/_next/static/css/${props.css}.css`} rel="stylesheet" />
    </Head>
    <h2>This is a Serveless Server-Side Rendered app</h2>
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  </div>
)

export default Layout