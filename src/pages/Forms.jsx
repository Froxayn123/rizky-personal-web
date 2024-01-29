import Button from "../components/Button";

const Forms = () => {
  const submitForm = (theform) => {
    window.open(`mailto:froxayn123@gmail.com?subject=FROM: ${theform[0].value}&body=MESSAGES: ${theform[2].value}`);
  };

  return (
    <>
      <section id="forms">
        <div id="form" data-aos="fade-up" data-aos-duration="2000" className="pt-12 pb-12 flex justify-center items-center max-md:ps-5 max-md:pe-5 max-lg:p-6">
          <div className="p-12 max-md:p-6 w-[1000px] outline outline-1 outline-[rgb(95,83,144)] rounded-lg">
            <div className="space-y-10">
              <div className="space-y-5">
                <h1 className="font-semibold font-['Basic, sans-serif'] uppercase select-none text-2xl text-[#5f5390]">get in touch</h1>
                <h1 className="font-bold font-['Basic, sans-serif'] uppercase select-none text-5xl text-white max-md:text-4xl">hire me for a work</h1>
              </div>
              <form
                action="#"
                onSubmit={(e) => {
                  const target = e.target;
                  return submitForm(target);
                }}
                className="flex flex-col space-y-4"
              >
                <div className="flex flex-col space-y-4">
                  <input
                    type="text"
                    id="senderName"
                    className="p-5 bg-transparent border-b-2 border-[#5f5390] border-t-0 border-r-0 border-l-0 focus:ring-0 placeholder-slate-400 text-slate-200 focus:placeholder:-translate-y-6 focus:placeholder:text-xs placeholder:transition placeholder:duration-300 placeholder:ease-in-out"
                    placeholder="Full Name"
                    required
                  />
                  <input
                    type="email"
                    id="senderEmail"
                    placeholder="Email"
                    className="p-5 bg-transparent border-b-2 border-[#5f5390] border-t-0 border-r-0 border-l-0 focus:ring-0 placeholder-slate-400 text-slate-200 focus:placeholder:-translate-y-6 focus:placeholder:text-xs placeholder:transition placeholder:duration-300 placeholder:ease-in-out"
                    required
                  />
                  <textarea
                    rows={5}
                    placeholder="Messages"
                    id="senderMessages"
                    className="p-5 bg-transparent border-b-2 border-[#5f5390] border-t-0 border-r-0 border-l-0 focus:ring-0 placeholder-slate-400 text-slate-200 focus:placeholder:-translate-y-6 focus:placeholder:text-xs placeholder:transition placeholder:duration-300 placeholder:ease-in-out"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end items-center">
                  <Button id="rightArrowSubmit" text="Submit" type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Forms;
