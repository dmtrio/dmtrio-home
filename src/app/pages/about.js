import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
// import Resume from 'jsonresume-theme-bluestars';
import Layout from '../components/Layout';

import feresume from '../objects/resume.json';

class About extends Component {
  static getInitialProps({ req }) {
    if (req) {
      // Runs only in the server
      const resume = require('../objects/resume.json');
      return { resume };
    }
    // Runs only in the client
    return { resume: feresume };
  }

  sayHi = () => {
    console.log('hi');
  }

  render() {
    const { resume } = this.props;
    return (
      <div>
        <Layout css={'about'}>
          <p>Hello from about</p>
          {/* <Resume resume={resume} /> */}
          <Button onClick={this.sayHi}>HI</Button>
        </Layout>
      </div>
    );
  }
}
export default About;
