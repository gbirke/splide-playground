import { h } from 'preact';
import style from './style.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<div className={style.columnContainer}>
		<div class={`${ style.slideContainer } ${style.column}`}>
		<Splide>
			<SplideSlide>
				<p class={style.slidepara}>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues.</p>
			</SplideSlide>
			<SplideSlide><p class={style.slidepara}>Second</p></SplideSlide>
				<SplideSlide><p class={style.slidepara}>Third</p></SplideSlide>
		</Splide>
		</div>
			<div className={style.column}>
				Right column content
			</div>
		</div>
	</div>
);

export default Home;
