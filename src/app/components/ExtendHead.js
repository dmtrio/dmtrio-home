
import Head from 'next/head';

const ExtendHead = (props) => (
  <Head>
    <title>My styled page</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
    <link href={`/_next/static/css/${props.css}.css`} rel="stylesheet" />
  </Head>
)

export default ExtendHead;
