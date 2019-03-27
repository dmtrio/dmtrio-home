import ExtendHead from './ExtendHead';
import Header from './Header';


const Layout = props => (
  <div>
    <ExtendHead css={props.css} />
    <div className="banner">
      <h2>This is a Serveless Server-Side Rendered app</h2>
    </div>
    <div className="page-layout">
      <Header />
      {props.children}
    </div>
  </div>
);

export default Layout;
