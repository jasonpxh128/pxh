import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { Metadata } from 'next'
import Head from "next/head";
     {/* // <div className=" mx-3 mt-2 md:w-9/12 md:mx-auto text-gray-400 bg-zinc-900">
    //   <Head>
    //     <meta property="og:image" content="<generated>" />
    //     <meta property="og:image:type" content="<generated>" />
    //     <meta property="og:image:width" content="<generated>" />
    //     <meta property="og:image:height" content="<generated>" />

    //   </Head> */}

export default function Home() {
  return (
    <div>
      <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
        <section className="mx-auto w-full max-w-2xl md:max-w-4xl space-y-8 bg-zinc-900 text-gray-400 print:space-y-6">
          <div className="my-8 text-sm md:text-lg">
            <h1 className="flex flex-row min-h-1 justify-center items-center font-bold text-lg">Pua Xian Hao</h1>
            <p className=" text-xs flex flex-row min-h-1 justify-center items-center md:text-lg"> <span className="mx-1"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke=" currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-globe size-3"> <circle cx="12" cy="12" r="10"></circle> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path> <path d="M2 12h20"></path> </svg></span>KL, Malaysia</p>
            {/* <p className="flex flex-row min-h-1 justify-center items-center">+60183728819 | <SocialIcon  className=" cursor-pointer" network="email" href="mailto:puaxianhao@gmail.com" fgColor="white" bgColor="transparent"/> <a href="mailto:puaxianhao@gmail.com"> puaxianhao@gmail.com</a></p> */}
            <p className="flex flex-row min-h-1 justify-center items-center">+60183728819 | <a href="mailto:puaxianhao@gmail.com" className="mx-1 text-gray-200">  puaxianhao@gmail.com</a></p>

          </div>  

          <div className=" text-sm md:text-lg flex flex-col min-h-1 items-left ">
          {/* <div className=" text-sm md:text-lg lg:mx-11 lg:px-8 md:mx-6 sm:mx-2 mt-6 flex flex-col min-h-1 items-left "> */}

            <h1 className=" font-bold underline hover:decoration-4 md:text-2xl">PROFESSIONAL PRACTICE</h1>

            <div className="rounded-lg bg-card text-card-foreground">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between gap-x-2 ">
                  <h3 className="  inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                    <a className="text-base md:text-xl hover:underline" href="https://www.linkedin.com/company/intel-corporation/mycompany/verification/">Intel Corporation</a>
                    <span className="inline-flex gap-x-1 md:gap-x-2">
                      <div className=" inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent  bg-white/80 text-black hover:bg-white/60 align-middle text-xs md:hidden  ">APJ</div>
                      <div className=" hidden md:inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent  bg-white/80 text-black hover:bg-white/60 align-middle text-xs ">APJ</div>
                    </span>
                  </h3>
                  <div className="tabular-nums text-gray-300 underline">Nov. 2021 - Present</div>
                </div>

              </div>
              {/* <p className="  md:text-xl text-gray-300 mt-2 font-bold">Intel Malaysia Sdn Bhd</p> */}
              <p className=" text-sm md:text-lg mt-0 font-bold text-gray-300">Sales Applications Engineer - Sales Marketing Group - SEA ANZ</p>
              {/* <p>Nov 2021 - current</p> */}
              <div className=" text-sm mx-3 p-1 text-pretty text-muted-foreground md:text-base">
                <ul className= "list-disc justify-normal">
                  <li>Providing sales & technical coverage for Global MNC accounts in Asia region:</li>
                  <p className=" indent-5 font-bold"> -- Siemens </p>
                  <p className=" indent-5 font-bold"> -- Honeywell </p>
                  <p className=" indent-5 font-bold"> -- GE Healthcare & Vernova </p>
                  <li className=" justify-normal">Charter includes providing account management and technical support for product design on Intel Architecture such as <span className=" underline hover:decoration-4  font-bold text-gray-300 ">(CPU, GPU & Ethernet)</span> </li>
                  <li>Enabling customers to accelerate <span className=" underline hover:decoration-4  font-bold text-gray-300 ">AI/DL</span> & Machine Learning workloads using Intel CPU features and accelerators such as <span className=" underline hover:decoration-4  font-bold text-gray-300 ">AMX and AVX512. </span></li>
                  <li>Driving adoption for Intel open standards software such as OpenVINO and OneAPI to accelerate <span className=" underline hover:decoration-4  font-bold text-gray-300 ">Edge AI Inferencing</span>.</li>
                  <li>Providing technical support until board bring up and power on stages for <span className=" underline hover:decoration-4 font-bold text-gray-300 ">embedded / industrial IOT applications</span>  on form factors such as single board computers (SBC), system on modules (SOM), COM Express.</li>
                  <li>Close collaboration with OEMs to such as <span className=" underline hover:decoration-4  font-bold text-gray-300 ">Lenovo, Dell and HPE</span> for bespoke solutions on customers specified power & thermal envelope.</li>
                  <li>Training and technical enablement of Lenovo Technical Sales Team & regional account teams for Client Compute <span className="underline hover:decoration-4  font-bold text-gray-300 ">(AIPC)</span> and Data Center Servers (AI on Xeon) for Enterprise, Public Sector and MNC segments.</li>

                </ul>
              </div>

            </div>

            <div className="rounded-lg bg-card text-card-foreground mt-6">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between gap-x-2 ">
                  <h3 className="  inline-flex items-center justify-center gap-x-1 font-semibold leading-none mt-3">
                    <a className=" text-base md:text-xl hover:underline" href="https://www.linkedin.com/company/intel-corporation/mycompany/verification/">ABB Corporation</a>
                    <span className="inline-flex gap-x-1 md:gap-x-2">
                      <div className=" inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent  bg-white/80 text-black hover:bg-white/60 align-middle text-xs md:hidden  ">SEA</div>
                      <div className=" hidden md:inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent  bg-white/80 text-black hover:bg-white/60 align-middle text-xs ">SEA</div>
                    </span>
                  </h3>
                  <div className="tabular-nums text-gray-300 mt-3 underline">Apr. 2016 - Oct 2021</div>
                </div>

              </div>
              {/* <p className="  md:text-xl text-gray-300 mt-2 font-bold">Intel Malaysia Sdn Bhd</p> */}
              <p className=" mt-0 font-bold text-gray-300">Engineer – Sales Specialist – Motion</p>
              {/* <p>Nov 2021 - current</p> */}
              <div className="text-sm mx-3 p-1 text-pretty text-muted-foreground  md:text-base">
                <ul className= "list-disc justify-normal">
                  <li className=" justify-normal">Managed Key Accounts in project management role for sectors such as Oil & Gas, Critical Power Generation and Public Utilities across the region [Malaysia, Thailand & Brunei].</li>
                  <li>Prepared project specification & technical design of IEC LV Induction motors in accordance to PETRONAS Technical Standard (PTS) & SHELL DEP (Design and Engineering Practice) in projects:</li>
                  <p className=" indent-5 font-black"> -- Kasawari Gas Field – Awarded 2020 </p>
                  <p className=" indent-5 font-black"> -- Bokor shallow-water Oil Fields – Awarded 2018 </p>
                  <li>Tasked with growing the ABB Ability Smart Sensors & ABB Ability Cloud-based platform. Provided a solution with IOT devices paired with Machine Learning methods in digitizing the operations and equipment in manufacturing plants of end-users such as Petronas, Top Glove, Hartalega, etc..</li>
                  <li>Presented and performed energy efficiency auditing and maintenance costs projection for Ministry of Health of Malaysia. The project was to retrofit high efficiency motors for the chillers & cooling towers in major health institutions across Malaysia.</li>

                </ul>
              </div>

            </div>
            

            <h1 className=" text-lg mt-10 font-bold underline hover:decoration-4 md:text-2xl">EDUCATION</h1>
            <p className=" text-sm md:text-lg  text-gray-300 font-bold">MONASH UNIVERSITY</p>
            <p className=" mt-0 font-bold text-sm">Bachelor of Electrical and Computer Systems Engineering</p>
            <div className="mx-3 p-1">
              <ul className= "list-disc justify-normal">
                <li>First Class Honours Graduate – Class of December 2015</li>
              </ul>
            </div>

            <p className=" mt-2 font-bold text-gray-300">SUNWAY UNIVERSITY COLLEGE</p>
            <p className=" mt-0 font-bold text-sm">Monash University Foundation Year [MUFY]</p>
            <div className="mx-3 p-1">
              <ul className= "list-disc justify-normal">
                <li>Award: Jeffrey Cheah Entrance Scholarship - 2011</li>
              </ul>
            </div>

            <p className=" mt-2 font-bold text-gray-300">BALDOR USA</p>
            <p className=" mt-0 font-bold text-sm">School of Transmissioneering</p>
            <div className="mx-3 p-1">
              <ul className= "list-disc justify-normal">
                <li>First Class Honours Graduate – Class of Oct’ 2016</li>
              </ul>
            </div>

            <h1 className=" text-lg font-bold underline hover:decoration-4  md:text-2xl my-3">SKILLS</h1>
            <div className="flex flex-wrap gap-1">
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 text-[15px]"> Python </div>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 text-[15px]"> React/Next.js </div>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 text-[15px]"> C++ </div>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 text-[15px]"> Docker </div>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 text-[15px]"> OneAPI </div>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 text-[15px]"> OpenVINO </div>

            </div>
            
            <h1 className=" text-lg font-bold underline hover:decoration-4  md:text-2xl my-3">Projects & LinkedIn Articles</h1>
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
                    <p className="text-muted-foreground font-mono text-xs"> Running Llama3 model on Intel FLEX 170 GPU with llama.cpp</p>
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
                    <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 px-1 py-0 text-[15px]">
                      SYCL
                    </div>
                    <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 px-1 py-0 text-[15px]">
                      CPU & GPU
                    </div>
                  </div>
                </div>

              </div>
              
              <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3">
                <div className="flex flex-col space-y-1.5">
                  <div className="space-y-1">
                    <h3 className="font-semibold tracking-tight text-base">
                      <a href="https://www.linkedin.com/pulse/how-run-llama3-models-llamacpp-intel-gpus-sycl-oneapi-jason-pua-5g6vc/?trackingId=PgxN1cPCfuUKfgPvkIzveQ%3D%3D" target="blank" className="inline-flex items-center gap-1 hover:underline">Llama3 on Llama.cpp <span className="size-1 rounded-full bg-green-500"></span></a>
                      
                    </h3>
                    <div className="hidden font-mono text-xs underline print:visible">
                      https://www.linkedin.com/pulse/llama3-whisper-v3-long-text-summarization-intel-xeon-cpu-jason-pua-v66de/?trackingId=R2Nc1F5URmu41my4vImzOA%3D%3D
                    </div>
                    <p className="text-muted-foreground font-mono text-xs"> Llama 3.1 & Whisper v3 long text summarization on Intel Xeon CPU</p>
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
                    <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 px-1 py-0 text-[15px]">
                      Llama.cpp
                    </div>
                    <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 px-1 py-0 text-[15px]">
                      OpenAI
                    </div>
                    <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 px-1 py-0 text-[15px]">
                      CPU
                    </div>
                    <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 px-1 py-0 text-[15px]">
                      OpenVINO
                    </div>
                    <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-white/80 text-black hover:bg-white/60 px-1 py-0 text-[15px]">
                      HuggingFace
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

        </section>

      </main>
      
    </div>

  );
}

