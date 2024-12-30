import Image from 'next/image';
import Egg from './egg.png';
import Link from 'next/link';

const page = () => {
  return (
    <div className="flex flex-col items-center gap-4 w-screen h-screen justify-center">
      <h1>mistery egg</h1>
      <Link href="/info">
        <Image
          src={Egg}
          width={400}
          height={400}
          alt="egg"
          className="animate-bounce"
        ></Image>
      </Link>
    </div>
  );
};
export default page;
