import { h } from 'preact';
import style from './style';
import classnames from 'classnames';

const Image= ({
	src,
	type,
	className,
	text,
}) => (
  <picture class={classnames(style[type], style.main, className)}>
		{src && <img src={src} />}
		{text && <p>{text}</p>}
	</picture>
);

Image.defaultProps = {
	src: null,
	type: null,
	className: null,
	text: null,
};

export default Image;
