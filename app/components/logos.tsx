import { logos as content } from '../constants/content';

export default function Logos(): JSX.Element {
  return (
    <ul className='flex justify-around'>
      {content.map((logo) => (
        <li>
          <img src={logo.src} alt={logo.alt} />
        </li>
      ))}
    </ul>
  );
}
