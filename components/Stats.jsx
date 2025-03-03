"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    text: "Years of Experience",
  },
  {
    num: 10,
    text: "Projects Completed",
  },
  {
    num: 17,
    text: "Technologies Used",
  },
  {
    num: 100,
    text: "Code commits",
  },
  {
    num: 110,
    text: "LeetCode Problems Solved",
  },
];
const Stats = () => {
  return (
    <div className="pt-4 pb-12 xl:pt-0 xl:pb-0">
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
              <p className={`${stat.text.length<15 ? "max-w-[100px]": "max-w-[160px]"} loading-snug text-white/80`}>
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
