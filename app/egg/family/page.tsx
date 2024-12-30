import Image from 'next/image';
import FamilyPack from '../../familypack.png';

const family = () => {
  return (
    <div className="w-screen h-screen flex justify-around items-center">
      <div>
        <h1 className="text-center">family pack</h1>
        <Image src={FamilyPack} width={400} height={400} alt="egg"></Image>
      </div>
      <div>
        <p>info:</p>
        <li>la fel ca oul simplu dar x6</li>
      </div>
    </div>
  );
};
export default family;
