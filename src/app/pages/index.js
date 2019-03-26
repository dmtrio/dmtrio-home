
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// This is the Link API
import React, { Component } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout.js';


class Index extends Component {
  constructor() {
    super();

    this.state = {
      users: []
    };
  }

  componentWillMount() {
    this.setState({
      users: ["guy1", "guy2"]
    });
  }

  render() {
    const PostLink = props => (
      <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.id}`}>
            <a>{props.title}</a>
        </Link>
      </li>
    );

    return (
      <Layout css={'index'}>
        <h1>My Blog</h1>
        <ul>
          <PostLink id="hello-nextjs" title="Hello Next.js" />
          <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
          <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
        </ul>
      </Layout>
    );
  }
}

export default Index;