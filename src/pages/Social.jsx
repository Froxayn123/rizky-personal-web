import Link from "../components/Link";
import Typewriter from "typewriter-effect";

const Social = () => {
  return (
    <>
      <section id="social">
        <div className="w-full p-14 flex flex-col justify-center items-center space-y-8 max-md:p-2 max-md:space-y-4">
          <h1 className="font-bold font-['Basic, sans-serif'] uppercase select-none text-6xl text-white max-md:text-4xl">reach me :</h1>
          <div className="flex flex-wrap justify-evenly font-semibold font-['Basic, sans-serif'] uppercase select-none text-3xl text-white space-x-5 max-md:text-xl max-md:space-x-2 max-md:justify-center">
            <Link href="https://www.instagram.com/708iki_" text="instagram" />
            <Link href="https://www.linkedin.com/in/rizkymuhammadyusuf" text="linkedin" />
            <Link href="https://github.com/Froxayn123" text="github" />
            <Link href="https://discord.com/users/froxayn" text="discord" />
            <Link href="https://www.facebook.com/profile.php?id=100089106085513&mibextid=ZbWKwL" text="facebook" />
            <Link href="https://wa.me/message/CQEIZP26QLDVM1" text="whatsapp" />
            <Link href="https://t.me/Froxayn" text="telegram" />
          </div>
          <div className="w-full space-y-16 max-md:space-y-8">
            <div className="h-1 bg-primary"></div>
            <h1 className="flex justify-center items-center font-bold font-['Basic, sans-serif'] uppercase select-none text-4xl text-white max-md:text-2xl">
              {
                <Typewriter
                  options={{
                    strings: ["Rizky Muhammad Yusuf", "Froxayn"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              }
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Social;
