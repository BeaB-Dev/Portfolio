import Image from 'next/image';
import background from '../../public/jack-b-lKvN0xV4jeA-unsplash.jpg'

export default function Background() {
  return (
    <Image className=''
      alt="background image of outer space"
      src={background}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
        opacity: '20%',
      }}
    />
  );
}