"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "Years of Experience",
  },
  {
    num: 6,
    text: "Projects Completed",
  },
  {
    num: 9,
    text: "Technologies Used",
  },
  {
    num: 50,
    text: "Code commits",
  },
];
const Stats = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div
         className="flex flex-wrap gap-6 max-w-[86vw] mx-auto xl:max-w-none"
        >
          {stats.map((stat, index) => (
            <div className="flex-1 flex gap-4 items-center justify-center
            xl:justify-start" key={index}>
              <CountUp
                end={stat.num}
                key={index}
                duration={5}
                delay={2}
                className="text-4xl font-extrabold xl:text-6xl"
              />
              <p className={`${stat.text.length<15 ? "max-w-[100px]": "max-w-[150px]"} loading-snug text-white/80`}>
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
