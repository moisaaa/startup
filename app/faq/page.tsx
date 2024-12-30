import Image from 'next/image';
import GoldEgg from '../goldegg.png';
import PoopEgg from '../poopegg.png';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const page = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div>
        <h1>Cum functioneaza?</h1>
      </div>
      <div>
        <ol type="1">
          <li>Comanzi oul misterios.</li>
          <li>Spargi oul si vezi ce ai castigat.</li>
        </ol>
      </div>
      <div className="flex w-screen justify-around pt-10">
        <Image src={GoldEgg} width={400} alt="gold"></Image>
        <Image src={PoopEgg} width={400} alt="poop"></Image>
      </div>
      <Link href={'/prices'}>
        <Button>&gt;</Button>
      </Link>
    </div>
  );
};
export default page;
