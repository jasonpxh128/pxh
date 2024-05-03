import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  return (
    <div className=" mx-3 mt-2 md:w-9/12 md:mx-auto text-gray-400 bg-zinc-900">
       <div className="my-8 text-sm md:text-lg">
        <h1 className="flex flex-row min-h-1 justify-center items-center font-bold text-lg">Pua Xian Hao</h1>
        <p className=" text-xs flex flex-row min-h-1 justify-center items-center md:text-lg">S-18-18, Residensi HighPark Suites, 47301 Petaling Jaya</p>
        {/* <p className="flex flex-row min-h-1 justify-center items-center">+60183728819 | <SocialIcon  className=" cursor-pointer" network="email" href="mailto:puaxianhao@gmail.com" fgColor="white" bgColor="transparent"/> <a href="mailto:puaxianhao@gmail.com"> puaxianhao@gmail.com</a></p> */}
        <p className="flex flex-row min-h-1 justify-center items-center">+60183728819 | <a href="mailto:puaxianhao@gmail.com" className="mx-1 text-gray-200">  puaxianhao@gmail.com</a></p>

      </div>  

      <div className=" text-sm md:text-lg lg:mx-11 lg:px-8 md:mx-6 sm:mx-2 mt-6 flex flex-col min-h-1 items-left ">
        <h1 className=" font-bold underline hover:decoration-4 ">PROFESSIONAL PRACTICE</h1>
        <p className="  md:text-xl text-gray-300 mt-2 font-bold">Intel Malaysia Sdn Bhd</p>
        <p className=" mt-0 font-bold text-gray-300 text-sm">Sales Applications Engineer - Sales Marketing Group - SEA ANZ</p>
        <p>Nov 2021 - current</p>
        <div className="mx-3 p-1">
          <ul className= "list-disc justify-normal">
            <li>Providing coverage for MNC accounts in APJ region as technical sales support:</li>
            <p className=" indent-5 font-extrabold"> -- Siemens </p>
            <p className=" indent-5 font-extrabold"> -- Honeywell </p>
            <p className=" indent-5 font-extrabold"> -- GE Healthcare & Vernova </p>
            <li className=" justify-normal">Charter includes providing technical support and account coverage for product design on Intel Architecture <span className=" underline hover:decoration-4  font-bold text-gray-300 ">(CPU, GPU & Ethernet)</span> </li>
            <li>Providing technical support until board bring up and power on stages for <span className=" underline hover:decoration-4 font-bold text-gray-300 ">embedded / industrial IOT applications</span>  on form factors such as single board computers (SBC), system on modules (SOM), COM Express.</li>
            <li>Enabling customers to accelerate AI/ML & Deep Learning workloads using Intel CPU features and accelerators such as <span className=" underline hover:decoration-4  font-bold text-gray-300 ">AMX and AVX512. </span></li>
            <li>Driving adoption for Intel open standards software toolchains such as OpenVINO and OneAPI to accelerate <span className=" underline hover:decoration-4  font-bold text-gray-300 ">AI Edge Inferencing</span> to leverage heterogenous compute.</li>

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
          </ul>
        </div>

        <h1 className=" text-sm font-bold underline hover:decoration-4  md:text-lg">EDUCATION</h1>
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

        <h1 className=" text-sm font-bold underline hover:decoration-4  md:text-lg my-3">SKILLS</h1>
        <div className="flex flex-wrap gap-1">
          <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 text-[15px]"> Python </div>
          <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 text-[15px]"> React/Next.js </div>
          <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 text-[15px]"> C++ </div>
          <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 text-[15px]"> Docker </div>
       
        </div>
        
        <h1 className=" text-sm font-bold underline hover:decoration-4  md:text-lg my-3">ARTICLES</h1>
        <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
          
          <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3">
            <div className="flex flex-col space-y-1.5">
              <div className="space-y-1">
                <h3 className="font-semibold tracking-tight text-base">
                  <a href="https://www.linkedin.com/pulse/how-run-llama3-models-llamacpp-intel-gpus-sycl-oneapi-jason-pua-5g6vc/?trackingId=PgxN1cPCfuUKfgPvkIzveQ%3D%3D" target="blank" className="inline-flex items-center gap-1 hover:underline">Llama3 on Llama.cpp <span className="size-1 rounded-full bg-green-500"></span></a>
                  
                </h3>
                <div className="hidden font-mono text-xs underline print:visible">
                https://www.linkedin.com/pulse/how-run-llama3-models-llamacpp-intel-gpus-sycl-oneapi-jason-pua-5g6vc/?trackingId=PgxN1cPCfuUKfgPvkIzveQ%3D%3D
                </div>
                <p className="text-muted-foreground font-mono text-xs"> Running Llama3 model on llama.cpp</p>
              </div>

            </div>

            <div className="text-pretty font-mono text-sm text-muted-foreground mt-auto flex">
              <div className="mt-2 flex flex-wrap gap-1">
                <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 px-1 py-0 text-[15px]">
                  Intel Demo
                </div>
                <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 px-1 py-0 text-[15px]">
                  C++
                </div>
              </div>
            </div>



          </div>

          <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3">
            <div className="flex flex-col space-y-1.5">
              <div className="space-y-1">
                <h3 className="font-semibold tracking-tight text-base">
                  <a href="https://www.linkedin.com/pulse/openvino-asynchronous-inferencing-anomalib-jason-pua-njbsf/?trackingId=RYbCkhslAa4lDgfwzfmOHg%3D%3D" target="blank" className="inline-flex items-center gap-1 hover:underline">OpenVINO Asynchronous Inferencing with ANOMALIB<span className="size-1 rounded-full bg-green-500"></span></a>
                  
                </h3>
                <div className="hidden font-mono text-xs underline print:visible">
                https://www.linkedin.com/pulse/openvino-asynchronous-inferencing-anomalib-jason-pua-njbsf/?trackingId=RYbCkhslAa4lDgfwzfmOHg%3D%3D
                </div>
                <p className="text-muted-foreground font-mono text-xs"> Shifting gears from LLMs, this time we are exploring image segmentation and anomaly detection using the ANOMALIB library and the PADIM Model. Do not leave any performance on the table with the OpenVINO Asynchronous API.</p>
              </div>

            </div>

            <div className="text-pretty font-mono text-sm text-muted-foreground mt-auto flex">
              <div className="mt-2 flex flex-wrap gap-1">
                <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 px-1 py-0 text-[15px]">
                  Intel Demo
                </div>
                <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 px-1 py-0 text-[15px]">
                  Python
                </div>
                <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 px-1 py-0 text-[15px]">
                  OpenVINO
                </div>
                <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 px-1 py-0 text-[15px]">
                  OneAPI
                </div>
              </div>
            </div>

          </div>

          <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3">
            <div className="flex flex-col space-y-1.5">
              <div className="space-y-1">
                <h3 className="font-semibold tracking-tight text-base">
                  <a href="https://www.linkedin.com/pulse/my-still-ongoing-journey-understanding-gpt-training-intel-jason-pua/?trackingId=ewOH2UB1EyCHFf5LjsoBZQ%3D%3D" target="blank" className="inline-flex items-center gap-1 hover:underline">My still ongoing journey understanding GPT. Training a small bigram model on Intel CPU vs GPU<span className="size-1 rounded-full bg-green-500"></span></a>
                  
                </h3>
                <div className="hidden font-mono text-xs underline print:visible">
                https://www.linkedin.com/pulse/my-still-ongoing-journey-understanding-gpt-training-intel-jason-pua/?trackingId=ewOH2UB1EyCHFf5LjsoBZQ%3D%3D
                </div>
                <p className="text-muted-foreground font-mono text-xs">A little late to the party, paying self-attention and took some time off 😄.Worked on training a small and simple bigram language model on the transfomers architecture using Intel Extension for PyTorch.</p>
              </div>

            </div>

            <div className="text-pretty font-mono text-sm text-muted-foreground mt-auto flex">
              <div className="mt-2 flex flex-wrap gap-1">
                <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 px-1 py-0 text-[15px]">
                  Intel Demo
                </div>
                <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 px-1 py-0 text-[15px]">
                  Python
                </div>
                <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 px-1 py-0 text-[15px]">
                  Pytorch
                </div>
                <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 px-1 py-0 text-[15px]">
                  LLM
                </div>
                <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 px-1 py-0 text-[15px]">
                  CPU & GPU
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
      
    </div>
 
  );
}

