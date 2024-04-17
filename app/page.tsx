import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-11">
       <div className="my-8">
        <h1 className="flex flex-row min-h-1 justify-center items-center font-bold text-lg">Pua Xian Hao</h1>
        <p className="flex flex-row min-h-1 justify-center items-center">S-18-18, Residensi HighPark Suites, 47301 Petaling Jaya</p>
        <p className="flex flex-row min-h-1 justify-center items-center">+60183728819 | puaxianhao@gmail.com</p>
      </div>  
      <div className=" mx-11 px-8 mt-6 flex flex-col min-h-1 items-left ">
        <h1 className=" text-lg font-bold underline">PROFESSIONAL PRACTICE</h1>
        <p className=" mt-2 font-bold">Intel Malaysia Sdn Bhd</p>
        <p className=" mt-0 font-bold text-sm">Sales Applications Engineer - Sales Marketing Group - SEA ANZ</p>
        <p>Nov 2021 - current</p>
        <div className="mx-3 p-1">
          <ul className= "list-disc justify-normal">
            <li>Providing coverage for MNC accounts in APJ region in technical sales support:</li>
            <p className=" indent-5 font-black"> -- Siemens </p>
            <p className=" indent-5 font-black"> -- Honeywell </p>
            <p className=" indent-5 font-black"> -- GE Healthcare & Vernova </p>
            <li className=" justify-normal">Charter includes providing technical support and inﬂuencing at design-in stages for go-to-market products and also proof of concepts on latest Intel Silicon.</li>
            <li>Providing technical support on board bring up and power on stages for embedded / industrial single board computers (SBC), system on modules (SOM), COM express, SOCs etc..</li>
            <li>Enabling customers to accelerate their workloads/applications using Intel hardened features on CPU and accelerators for AI/ML & Deep Learning applications.</li>
            <li>Driving adoption for Intel open standards software toolchains such as OpenVINO and OneAPI to accelerate edge inferencing and optimise traditional Computer Vision & media applications.</li>

          </ul>
        </div>


      </div>
    </div>
 
  );
}

