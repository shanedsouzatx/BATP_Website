import Image from "next/image";
import Link from "next/link";

export default function Hero3() {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between py-7 px-4 max-w-screen-2xl mx-auto">

        {/* Left: Text Content */}
        <div className="md:w-1/2 w-full w-[1300px] px-4 md:px-11 mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-black">Our Team</h2>
          <p className="text-black/90 text-lg mt-4">
            In addition to our leadership, Behavior Analysis & Therapy Partners employs about 100 dedicated professionals with various roles, functions, and credentials–all committed to delivering the highest standard of care.
            To join our team
            <Link href="/job-application" className="pl-2 text-blue-500 hover:text-blue-600">
              Click here
            </Link>
          </p>
          <p className="text-bold text-black text-lg pt-4">For inquiries, you can reach our Administrator at:</p>
          <Link href="mailto:ChantelleBosier@batp.org" className="text-blue-500 hover:text-blue-600">
            ChantelleBosier@batp.org
          </Link>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 w-full text-left mt-8 md:mt-0 md:pl-8 flex justify-center">
          <Image
            src="/images/ab3.jpg"
            alt="Hero Image"
            width={500}
            height={500}
            className="object-cover rounded p-4 md:p-16 w-full max-w-[500px]"
          />
        </div>

      </div>

      {/* Logos */}
      <div className="flex items-center justify-center gap-8 py-8 max-w-screen-2xl mx-auto">
        <Image
          src="/images/client-image-1.jpeg"
          alt="Logo 1"
          width={150}
          height={80}
          className="object-contain"
        />
        <Image
          src="/images/client-image-2.png"
          alt="Logo 2"
          width={150}
          height={80}
          className="object-contain"
        />
      </div>
    </div>
  );
}
