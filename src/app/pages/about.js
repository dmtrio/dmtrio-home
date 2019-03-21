import Layout from '../components/Layout';

const sayHi = () => {
  console.log('hi')
}

export default () => (
  <div>
    <Layout>
      <p>Hello from about</p>
      <button onClick={sayHi} />
    </Layout>
  </div>
);