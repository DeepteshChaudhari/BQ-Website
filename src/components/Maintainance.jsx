import { useCallback, useEffect, useRef, useState } from "react";
import image from '../assets/Brand Quube logo.svg'
import image2 from '../assets/Brand Quube Portfolio-01.svg'
import image3 from '../assets/Brand Quube Portfolio-02.svg'
import { BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs';

const Maintainance = () => {

  const [countDownTime, setCountDownTIme] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const minuteCircle = useRef();
  const secondCircle = useRef();
  const hourCircle = useRef();
  const daysCircle = useRef();
  const changeCircleoffset = (seconds, minutes, hours, days) => {
    if (daysCircle.current) {
      daysCircle.current.style.strokeDashoffset = `${days > 0 ? 440 - (days * 440) / 365 : 440
        }px`;
      hourCircle.current.style.strokeDashoffset = `${hours > 0 ? 451 - (hours * 451) / 24 : 451
        }px`;
      minuteCircle.current.style.strokeDashoffset = `${minutes > 0 ? 451 - (minutes * 451) / 60 : 451
        }px`;
      secondCircle.current.style.strokeDashoffset = `${seconds > 0 ? 451 - (seconds * 451) / 60 : 451
        }px`;
    }
  };
  const getTimeDifference = useCallback((countDownDate) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownDate - currentTime;
    const days = Math.floor(timeDiffrence / (24 * 60 * 60 * 1000));
    const hours = Math.floor(
      (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDiffrence % (60 * 1000)) / 1000);
    if (timeDiffrence < 0) {
      changeCircleoffset(seconds, minutes, hours, days);
      setCountDownTIme({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      clearInterval();
    } else {
      changeCircleoffset(seconds, minutes, hours, days);
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  }, []);
  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth(),
      customDate.getDate() + 30,
      customDate.getHours() + 0o0,
      customDate.getMinutes() + 0o0,
      customDate.getSeconds() + 0o0
    );
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, [getTimeDifference]);
  useEffect(() => {
    startCountDown();
  }, [startCountDown]);
  return (
    <>
      <img className="absolute rotate-90 sm:rotate-0" src={image2} />
      <img className="absolute rotate-90 sm:rotate-0" src={image3} />
      <div className="relative py-8">
        <div className="m-auto">
          <div className="m-auto p-2 sm:p-8">
            <img className="h-24 w-24 sm:h-72 sm:w-72 mx-auto" src={image} />
          </div>
          <div className="hidden sm:block max-w-4xl m-auto">
            <div className="m-auto flex gap-3 sm:gap-1 flex-row bg-transparent h-fit w-fit rounded-lg overflow-hidden">
              <div className="relative">
                <svg className="-rotate-90 h-48 w-48">
                  <circle
                    r="70"
                    cx="90"
                    cy="90"
                    className="fill-transparent stroke-[#F2AD19] stroke-[14px]"
                  ></circle>
                  <circle
                    r="70"
                    ref={daysCircle}
                    cx="90"
                    cy="90"
                    style={{
                      strokeDasharray: "440px",
                    }}
                    className="fill-transparent stroke-white  stroke-[14px]"
                  ></circle>
                </svg>
                <div className="text-white absolute top-16 left-11 text-2xl font-semibold flex flex-col items-center w-24 h-20">
                  <span className="text-center">{countDownTime?.days}</span>
                  <span className="text-center">
                    {countDownTime?.days == 1 ? "Day" : "Days"}
                  </span>
                </div>
              </div>
              <div className="relative">
                <svg className="-rotate-90 h-48 w-48">
                  <circle
                    r="70"
                    cx="90"
                    cy="90"
                    className="fill-transparent stroke-[#F2AD19] stroke-[14px]"
                  ></circle>
                  <circle
                    r="70"
                    ref={hourCircle}
                    cx="90"
                    cy="90"
                    style={{
                      strokeDasharray: "451px",
                    }}
                    className="fill-transparent stroke-white  stroke-[14px]"
                  ></circle>
                </svg>
                <div className="text-white absolute top-16 left-11 text-2xl font-semibold flex flex-col items-center w-24 h-20">
                  <span className="text-center">{countDownTime?.hours}</span>
                  <span className="text-center">
                    {countDownTime?.hours == 1 ? "Hour" : "Hours"}
                  </span>
                </div>
              </div>
              <div className="relative">
                <svg className="-rotate-90 h-48 w-48">
                  <circle
                    r="70"
                    cx="90"
                    cy="90"
                    className="fill-transparent stroke-[#F2AD19] stroke-[14px]"
                  ></circle>
                  <circle
                    r="70"
                    ref={minuteCircle}
                    cx="90"
                    cy="90"
                    style={{
                      strokeDasharray: "451px",
                    }}
                    className="fill-transparent stroke-white stroke-[14px]"
                  ></circle>
                </svg>
                <div className="text-white absolute top-16 left-11 text-2xl font-semibold flex flex-col items-center w-24 h-20">
                  <span className="text-center">{countDownTime?.minutes}</span>
                  <span className="text-center">
                    {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
                  </span>
                </div>
              </div>
              <div className="relative">
                <svg className="-rotate-90 h-48 w-48">
                  <circle
                    r="70"
                    cx="90"
                    cy="90"
                    className="fill-transparent stroke-[#F2AD19] stroke-[14px]"
                  ></circle>
                  <circle
                    r="70"
                    cx="90"
                    cy="90"
                    className=" fill-transparent stroke-white  stroke-[14px]"
                    ref={secondCircle}
                    style={{
                      strokeDasharray: "451px",
                    }}
                  ></circle>
                </svg>
                <div className="text-white absolute top-16 left-11 text-2xl font-semibold flex flex-col items-center w-24 h-20">
                  <span className="text-center">{countDownTime?.seconds}</span>
                  <span className="text-center">
                    {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center p-8">
            <div className="max-w-md grid grid-cols-2 sm:grid-cols-4">
              <div className="w-auto p-2 animate-bounce">
                <a href="https://www.facebook.com/brandquube?mibextid=LQQJ4d">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white hover:scale-105 duration-300">
                    <BsFacebook color="white" size={30} />
                  </div>
                </a>
              </div>
              <div className="w-auto p-2 animate-bounce">
                <a href="https://instagram.com/brandquube_?igshid=MzRlODBiNWFlZA==">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white hover:scale-105 duration-300">
                    <BsInstagram color="white" size={30} />
                  </div>
                </a>
              </div>
              <div className="w-auto p-2 animate-bounce">
                <a href="https://www.linkedin.com/company/brand-quube/">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white hover:scale-105 duration-300">
                    <BsLinkedin color="white" size={30} />
                  </div>
                </a>
              </div>
              <div className="w-auto p-2 animate-bounce">
                <a href="https://www.linkedin.com/company/brand-quube/">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white hover:scale-105 duration-300">
                    <BsWhatsapp color="green" size={30} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Maintainance
