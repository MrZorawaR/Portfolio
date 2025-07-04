import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
export default function Home() {
  return (
    <main className="h-full ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between h-full xl:flex-row ml:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">FullStack Developer</span>
            <h1 className="h1 mb-6 xl:mb-2">
              Hello I'm <br />
              <span className="text-accent">ZorawaR SingH</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a full stack developer based in India. I have a passion for
              building scalable and efficient web applications.
            </p>
            <div className="flex flex-col xl:flex-row gap-8 items-center">
              <Button
                variant="outline"
                size="lg"
                className=""
              >
                  <a href="/assets/resume/Nitish_CV_Latest.pdf" download className="uppercase flex items-center gap-2">

                <span>Download CV</span>
                <FiDownload className="text-xl" />
                  </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </main>
  );
}
