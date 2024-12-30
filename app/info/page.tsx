import { Button } from '@/components/ui/button';
import Link from 'next/link';

const page = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1>
        Primul startup romanesc 100% unregulated, cu oua misterioase, probabil
        expirate.
      </h1>
      <div className="pt-4">
        <Link href={'/faq'}>
          <Button>&gt;</Button>
        </Link>
      </div>
    </div>
  );
};
export default page;
