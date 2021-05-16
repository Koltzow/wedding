import { h } from 'preact';
import Image from '../../components/image';
import style from './style';
import imageMain from '../../assets/us.jpg';

const Home = () => (
  <div class={style.home}>
    <div class={style.header}>
      <h1>Amada & Chris</h1>
      <Image text="Cola på våre første date" className={style.image} src={imageMain} type="round" />
    </div> 
  </div>
);

export default Home;
