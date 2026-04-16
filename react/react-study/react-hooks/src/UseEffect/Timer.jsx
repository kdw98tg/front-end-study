import { useEffect } from "react";

function Timer() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Timer 돌아가는 중 ...");
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <div>Timer Start!</div>;
}
export default Timer;
