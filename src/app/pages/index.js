// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from '../src/App';
// import * as serviceWorker from '../src/serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// This is the Link API
import Link from 'next/link'

const Index = () => (
  <div>
    <Link href="/about">
      <button>Go to About Page</button>
    </Link>
    <p>Hello Next.js</p>
  </div>
)

export default Index