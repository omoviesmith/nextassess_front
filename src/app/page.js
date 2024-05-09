import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between hero-wrapper">
        <div className="relative pt-20 px-8 w-full md:w-4/5">
          <div className="flex justify-center">
            <Image src="/hero-logo.png" width="100" height="100" />
          </div>
          <h1 className="text-center mt-0 text-6xl font-extrabold leading-[84.5px]">
            Be TEQSA-Ready. Assessment Reform in a Single Click.
          </h1>
          <p className="text-center mt-4 text-base leading-7">
            NextAssess transforms your assessments for the new technological
            era. Offering seamless integration, real-time adaptation, and the
            precise tools educators need to maintain compliance, encourage deep
            learning, and prepare students for a future dominated by AI.
            NextAssess takes care of everything, so you can concentrate on what
            matters most – teaching and student success
          </p>
          <div className="mt-4">
            <Image
              className="w-full"
              src="/circle-bg.svg"
              width="200"
              height="200"
            />
          </div>
        </div>
      </main>
      <div className=" my-16">
        <section className="md:w-3/4 mx-auto">
          <h2 className="text-[#18191F] text-5xl leading-[60px] font-extrabold">NextAssess Solves Assessment Reform in 3 Easy Steps</h2>
          <div className="flex justify-between gap-8 mt-16">
            <div>
              <div className="flex gap-4">
                <div className="flex justify-center items-center bg-[#F4F5F7] rounded-full w-[72px] h-[72px]">
                  <Image src='/service-1.svg' width='24' height={24} />
                </div>
                <Image src='/step-1.svg' width={120} height={16} />
              </div>
              <h6 className="font-bold leading-7 text-[#18191F] text-lg mt-4 mb-2">Headline1</h6>
              <p className="leadin-7 text-base text-[#18191F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <div className="flex gap-4">
                <div className="flex justify-center items-center bg-[#F4F5F7] rounded-full w-[72px] h-[72px]">
                  <Image src='/service-2.svg' width='24' height={24} />
                </div>
                <Image src='/step-2.svg' width={120} height={16} />
              </div>
              <h6 className="font-bold leading-7 text-[#18191F] text-lg mt-4 mb-2">Headline1</h6>
              <p className="leadin-7 text-base text-[#18191F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <div className="flex gap-4">
                <div className="flex justify-center items-center bg-[#F4F5F7] rounded-full w-[72px] h-[72px]">
                  <Image src='/service-3.svg' width='24' height={24} />
                </div>
                <Image src='/step-3.svg' width={120} height={16} />
              </div>
              <h6 className="font-bold leading-7 text-[#18191F] text-lg mt-4 mb-2">Headline1</h6>
              <p className="leadin-7 text-base text-[#18191F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <div className="flex justify-center items-center bg-[#F4F5F7] rounded-full w-[72px] h-[72px]">
                <Image src='/service-4.svg' width='24' height={24} />
              </div>
              <h6 className="font-bold leading-7 text-[#18191F] text-lg mt-4 mb-2">Headline1</h6>
              <p className="leadin-7 text-base text-[#18191F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </section>
        <section className="my-16 md:w-3/4 mx-auto">
          <h2 className="text-[#18191F] text-5xl leading-[60px] font-extrabold mb-8 text-center">Why choose AssessMate?</h2>
          <div className="grid grid-cols-2 items-center">
            <div>
              <Image src='/feature-1.png' width='400' height='400' />
            </div>
            <div>
              <div className="mb-3">
                <div className="flex gap-3 items-center">
                  <div className="h-[6px] w-[6px] bg-[#A0DCFF] rounded-full"></div>
                  <h6 className="font-bold leading-7 text-[#18191F] text-lg mt-4 mb-2">Future-proof assessments</h6>
                </div>
                <p className="leadin-7 text-base text-[#18191F]">Integrate AI and focus on relevant skill sets to prepare students for the digital future.</p>
              </div>
              <div className="mb-3">
                <div className="flex gap-3 items-center">
                  <div className="h-[6px] w-[6px] bg-[#FFC3D8] rounded-full"></div>
                  <h6 className="font-bold leading-7 text-[#18191F] text-lg mt-4 mb-2">Save time and effort</h6>
                </div>
                <p className="leadin-7 text-base text-[#18191F]">Let AssessMate redesign your assessments, saving you countless hours of work.</p>
              </div>
              <div className="mb-3">
                <div className="flex gap-3 items-center">
                  <div className="h-[6px] w-[6px] bg-[#C1E5C0] rounded-full"></div>
                  <h6 className="font-bold leading-7 text-[#18191F] text-lg mt-4 mb-2">Ensure best practices</h6>
                </div>
                <p className="leadin-7 text-base text-[#18191F]">Align your assessments with the latest pedagogy and ensure they meet the highest standards.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-8 mb-16 md:w-3/4 mx-auto">
          <h2 className="text-[#18191F] text-5xl leading-[60px] font-extrabold mb-8">How AssessMate works</h2>
          <div className="grid grid-cols-2 items-center gap-4">
            <div>
              <div className="flex items-start gap-5">
                <div className="flex justify-center items-center bg-[#F4F5F7] mt-8 rounded-full min-w-[72px] h-[72px]">
                  <Image src='/service-1.svg' width='24' height={24} />
                </div>
                <div>
                  <h6 className="font-bold leading-7 text-[#18191F] text-lg mt-4 mb-2">Input your existing assessments</h6>
                  <p className="leading-7 text-base text-[#18191F]">Simply provide your current assessment details to AssessMate.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="flex justify-center items-center bg-[#F4F5F7] mt-8 rounded-full min-w-[72px] h-[72px]">
                  <Image src='/service-3.svg' width='24' height={24} />
                </div>
                <div>
                  <h6 className="font-bold leading-7 text-[#18191F] text-lg mt-4 mb-2">Let AssessMate do the rest</h6>
                  <p className="leading-7 text-base text-[#18191F]">Our tool redesigns your assessments, whether you want to integrate AI or focus on other relevant skill sets. Our tool ensures your new assessment still hits all of the key learning objectives.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="flex justify-center items-center bg-[#F4F5F7] mt-8 rounded-full min-w-[72px] h-[72px]">
                  <Image src='/service-5.svg' width='24' height={24} />
                </div>
                <div>
                  <h6 className="font-bold leading-7 text-[#18191F] text-lg mt-4 mb-2">Receive comprehensive assessments</h6>
                  <p className="leading-7 text-base text-[#18191F]">Each custom assessment comes with a grade-appropriate outline (K-12 and higher ed), student-friendly description, and marking rubric.</p>
                </div>
              </div>
            </div>
            <div>
              <Image src='/feature-2.png' width='500' height='400' />
            </div>
          </div>
        </section>
        <section className="mt-8 mb-16 md:w-3/4 mx-auto">
          <h2 className="text-[#18191F] text-5xl leading-[60px] text-center font-extrabold mb-4">Tailor-made features</h2>
          <p className="leading-7 text-base text-[#18191F] mb-8 md:w-1/2 mx-auto">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
          <div className="mt-6 grid grid-cols-3 gap-6">
            <div className="flex items-center flex-col gap-3">
              <Image src='/service-1.svg' width='24' height={24} />
              <h6 className="font-bold text-center leading-7 text-[#18191F] text-lg">Robust workflow</h6>
              <p className=" text-center text-base text-[#18191F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
            </div>
            <div className="flex items-center flex-col gap-3">
              <Image src='/service-7.svg' width='24' height={24} />
              <h6 className="font-bold text-center leading-7 text-[#18191F] text-lg">Flexibility</h6>
              <p className=" text-center text-base text-[#18191F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
            </div>
            <div className="flex items-center flex-col gap-3">
              <Image src='/service-2.svg' width='24' height={24} />
              <h6 className="font-bold text-center leading-7 text-[#18191F] text-lg">User friendly</h6>
              <p className=" text-center text-base text-[#18191F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
            </div>
            <div className="flex items-center flex-col gap-3">
              <Image src='/service-5.svg' width='24' height={24} />
              <h6 className="font-bold text-center leading-7 text-[#18191F] text-lg">Multiple layouts</h6>
              <p className=" text-center text-base text-[#18191F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
            </div>
            <div className="flex items-center flex-col gap-3">
              <Image src='/service-3.svg' width='24' height={24} />
              <h6 className="font-bold text-center leading-7 text-[#18191F] text-lg">Better components</h6>
              <p className=" text-center text-base text-[#18191F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
            </div>
            <div className="flex items-center flex-col gap-3">
              <Image src='/service-6.svg' width='24' height={24} />
              <h6 className="font-bold text-center leading-7 text-[#18191F] text-lg">Well organised</h6>
              <p className=" text-center text-base text-[#18191F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
            </div>  
          </div>
        </section>
        <section className="mt-8">
          <div>
            <img className="w-full" src='/headline.png' width='100' height='100' />
          </div>
          <div className="bg-white p-10 w-[33%] relative ml-auto top-[-160px] right-[150px]">
            <h6 className="font-bold leading-[54px] text-[#18191F] text-[40px]">Headline</h6>
            <p className="text-base text-[#18191F] mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum quis amet, faucibus lorem. Lectus amet odio quis sed adipiscing adipiscing magna non. Nullam turpis faucibus ridiculus suscipit. Et blandit suspendisse curabitur eu congue dui ut.</p>
            <div className="flex gap-4 mt-5">
              <button className="flex bg-transparent gap-3 text-[#8C30F5]">Learn More</button>
              <button className="flex bg-transparent gap-3 text-[#8C30F5]"><Image src='/video-icon.svg' width={11} height={16} />Watch Video </button>
            </div>
          </div>
        </section>
        <section className="mb-16 md:w-3/4 mx-auto">
          <div className="bg-gradient py-16 px-16 rounded-2xl">
            <div className="flex items-center gap-16 md:w-3/4 mx-auto">
              <div>
                <Image src='/Illustration.png' width={175} height={100} />
              </div>
              <div>
                <h2 className="text-[#fff] text-[40px] leading-[54px] font-extrabold mb-4">Join 569 more people in the waitlist</h2>
                <div className="flex">
                  <input type="email" placeholder="Your work email address" className="p-3 rounded-tl-md rounded-bl-md outline-none" />
                  <button className="py-3 px-6 text-white outline-none rounded-tr-md rounded-br-md bg-[#18191F] text-sm">Join the waitlist</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-8 mb-16 md:w-3/4 mx-auto">
          <div className="grid grid-cols-2 items-center gap-12">
            <div>
              <Image src='/Creative.png' width={540} height={540} />
            </div>
            <div>
              <span className="text-[#2EC5CE] text-sm leading-[18px] font-bold">CONSULTANT</span>
              <h3 className="text-[#18191F] text-[40px] font-extrabold leading-[54px]">Headline</h3>
              <p className="text-[#18191F] leading-7 text-lg my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.</p>
              <button className="flex bg-transparent gap-3 text-[#8C30F5]">Get Started <Image src='/right-arrow.svg' width={24} height={24} /></button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
