import Image from 'next/image';
import Egg from '../../egg.png';

const page = () => {
  return (
    <div className="w-screen h-screen flex justify-around items-center">
      <div>
        <h1 className="text-center">ou simplu</h1>
        <Image src={Egg} width={400} height={400} alt="egg"></Image>
      </div>
      <div>
        <p>info:</p>
        <li>pret avantajos</li>
        <li>merge la orice ocazie</li>
        <li>e tare rau</li>
      </div>
    </div>
  );
};
export default page;
