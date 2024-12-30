import { Button } from '@/components/ui/button';
import Link from 'next/link';

const page = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1>Alege-ti mistery egg-ul! Fa click pe produs pentru informatii.</h1>
      <div>
        <ul>
          <li>
            <Link href={'/egg/simple'}>&gt; simple egg - 49.99 ron</Link>
          </li>
          <li>
            <Link href={'/egg/family'}>&gt; family box - 249.99 ron</Link>
          </li>
          <li>
            <Link href={'/egg/premium'}>&gt; premium egg - 99.99 ron</Link>
          </li>
        </ul>
      </div>
      <div className="pt-4">
        <Link href={'/order'}>
          <Button>&gt;</Button>
        </Link>
      </div>
    </div>
  );
};
export default page;
