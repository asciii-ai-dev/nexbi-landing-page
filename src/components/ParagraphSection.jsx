import { useEffect, useState } from "react";
import Word from "./Word";

const ParagraphSection = () => {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    // Detect Safari by checking user agent
    if (/^((?!chrome|android).)*safari/i.test(ua)) {
      setIsSafari(true);
    }
  }, []);

  const para = `Running a business is about growth 💹 and not getting lost in data. \n\n NexBI gathers data from the real-time feed generated from multiple integrations your online business is connected to. We turn this stream of complex data into actionable insights and present super-relevant opportunities that are otherwise missed — keeping you at the forefront in your industry 🚀 \n\n Let us transform confusion into clarity and guide your growth. Welcome to the future of Business Intelligence 🌍`;

  return (
    <div className="max-w-[600px]">
      
      {isSafari ? (
        <>
          <p
            style={{
              color:'white',
              fontSize: 20,
              lineHeight: 2,
              fontFamily: "Manrope",
              fontWeight: 450,
            }}
          >
            Running a business is about growth 💹 and not getting lost in data.
          </p>
          <p
            className="mt-4"
            style={{
              color:'white',
              fontSize: 20,
              lineHeight: 2,
              fontFamily: "Manrope",
              fontWeight: 450,
            }}
          >
            NexBI gathers data from the real-time feed generated from multiple
            integrations your online business is connected to. We turn this
            stream of complex data into actionable insights and present
            super-relevant opportunities that are otherwise missed — keeping
            your at the forefront in your industry🚀
          </p>
          <p
            className="mt-4"
            style={{
              color:'white',
              fontSize: 20,
              lineHeight: 2,
              fontFamily: "Manrope",
              fontWeight: 450,
            }}
          >
            Let us transform confusion into clarity and guide your growth.
            Welcome to the future of Business Intelligence 🌍{" "}
          </p>
        </>
      ) : (
        <Word value={para} />
      )}
    </div>
  );
};

export default ParagraphSection;
