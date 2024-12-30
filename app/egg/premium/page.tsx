import Image from 'next/image';
import PremiumEgg from '../../premiumegg.png';

const page = () => {
  return (
    <div className="w-screen h-screen flex justify-around items-center">
      <div>
        <h1 className="text-center">ou premium</h1>
        <Image src={PremiumEgg} width={400} height={400} alt="egg"></Image>
      </div>
      <div>
        <p>info:</p>
        <li>sanse mari de castig</li>
        <li>potential mai mare</li>
      </div>
    </div>
  );
};
export default page;
