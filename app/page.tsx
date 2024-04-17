import Image from "next/image";

export default function Home() {
  return (
    <div className="md:w-9/12 mx-auto text-gray-400 bg-zinc-900">
       <div className="my-8 sm:text-sm">
        <h1 className="flex flex-row min-h-1 justify-center items-center font-bold text-lg">Pua Xian Hao</h1>
        <p className=" text-sm flex flex-row min-h-1 justify-center items-center md:text-lg">S-18-18, Residensi HighPark Suites, 47301 Petaling Jaya</p>
        <p className="flex flex-row min-h-1 justify-center items-center">+60183728819 | puaxianhao@gmail.com</p>
      </div>  
      <div className=" lg:mx-11 lg:px-8 md:mx-6 sm:mx-2 mt-6 flex flex-col min-h-1 items-left ">
        <h1 className=" text-sm font-bold underline md:text-lg">PROFESSIONAL PRACTICE</h1>
        <p className=" mt-2 font-bold">Intel Malaysia Sdn Bhd</p>
        <p className=" mt-0 font-bold text-sm">Sales Applications Engineer - Sales Marketing Group - SEA ANZ</p>
        <p>Nov 2021 - current</p>
        <div className="mx-3 p-1">
          <ul className= "list-disc justify-normal">
            <li>Providing coverage for MNC accounts in APJ region as technical sales support:</li>
            <p className=" indent-5 font-black"> -- Siemens </p>
            <p className=" indent-5 font-black"> -- Honeywell </p>
            <p className=" indent-5 font-black"> -- GE Healthcare & Vernova </p>
            <li className=" justify-normal">Charter includes providing technical support and account coverage for product design on Intel Architecture (CPU, GPU & Ethernet) </li>
            <li>Providing technical support until board bring up and power on stages for embedded / industrial single board computers (SBC), system on modules (SOM), COM express</li>
            <li>Enabling customers to accelerate their workloads using Intel CPU features and accelerators for AI/ML & Deep Learning applications.</li>
            <li>Driving adoption for Intel open standards software toolchains such as OpenVINO and OneAPI to accelerate <span className=" underline font-bold ">AI Edge Inferencing</span> to leverage heterogenous compute.</li>

          </ul>
        </div>
        <p className=" mt-2 font-bold">ABB Malaysia Sdn Bhd</p>
        <p className=" mt-0 font-bold text-sm">Engineer – Sales Specialist – Motion</p>
        <p>October 2018 - Nov 2021</p>
        <div className="mx-3 p-1 mb-5">
          <ul className= "list-disc justify-normal">
            <li>Managed Key Accounts in project management role for sectors such as Oil & Gas, Critical Power Generation and Public Utilities across the region [Malaysia, Thailand & Brunei].</li>
            <li className=" justify-normal">Prepared project specification & technical design of IEC LV Induction motors in accordance to PETRONAS Technical Standard (PTS) & SHELL DEP (Design and Engineering Practice) in projects:</li>
            <p className=" indent-5 font-black"> -- Kasawari Gas Field – Awarded 2020 </p>
            <p className=" indent-5 font-black"> -- Bokor shallow-water Oil Fields – Awarded 2018 </p>
            <li>Tasked with growing the ABB Ability Smart Sensors & ABB Ability Cloud-based platform. Provided a solution with IOT devices paired with Machine Learning methods in digitizing the operations and equipment in manufacturing plants of end-users such as Petronas, Top Glove, Hartalega, etc..</li>
            <li>Presented and performed energy efficiency auditing and maintenance costs projection for Ministry of Health of Malaysia. The project was to retrofit high efficiency motors for the chillers & cooling towers in major health institutions across Malaysia.</li>
            <li>Driving adoption for Intel open standards software toolchains such as OpenVINO and OneAPI to accelerate <span className=" underline font-bold ">edge inferencing</span> and optimise traditional Computer Vision & media applications.</li>

          </ul>
        </div>

        <h1 className=" text-sm font-bold underline md:text-lg">EDUCATION</h1>
        <p className=" mt-2 font-bold">MONASH UNIVERSITY</p>
        <p className=" mt-0 font-bold text-sm">Bachelor of Electrical and Computer Systems Engineering</p>
        <div className="mx-3 p-1">
          <ul className= "list-disc justify-normal">
            <li>First Class Honours Graduate – Class of December 2015</li>
          </ul>
        </div>

        <p className=" mt-2 font-bold">SUNWAY UNIVERSITY COLLEGE</p>
        <p className=" mt-0 font-bold text-sm">Monash University Foundation Year [MUFY]</p>
        <div className="mx-3 p-1">
          <ul className= "list-disc justify-normal">
            <li>Award: Jeffrey Cheah Entrance Scholarship - 2011</li>
          </ul>
        </div>

        <p className=" mt-2 font-bold">BALDOR USA</p>
        <p className=" mt-0 font-bold text-sm">School of Transmissioneering</p>
        <div className="mx-3 p-1">
          <ul className= "list-disc justify-normal">
            <li>First Class Honours Graduate – Class of Oct’ 2016</li>
          </ul>
        </div>
        

      </div>
      
    </div>
 
  );
}

