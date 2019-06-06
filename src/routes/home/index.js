import { h } from 'preact';

import Layout from 'layouts/main';
import style from './style.scss';

const Home = () => (
  <Layout>
    <div class={style.home}>
      <p>Hello world</p>
    </div>
  </Layout>
);

export default Home;
