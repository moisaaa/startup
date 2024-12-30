import Image from 'next/image';
import GoldEgg from '../goldegg.png';
import PoopEgg from '../poopegg.png';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const imgs = [
  <Image key={1} src={GoldEgg} width={400} alt="gold"></Image>,
  <Image key={2} src={PoopEgg} width={400} alt="poop"></Image>,
];

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
      <div>
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 2 }).map((_, index) => (
              <CarouselItem className="flex justify-center" key={index}>
                {imgs[index]}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <Link href={'/prices'}>
        <Button>&gt;</Button>
      </Link>
    </div>
  );
};
export default page;
