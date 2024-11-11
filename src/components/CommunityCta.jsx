const CommunityCta = ({ waitlistForm, handleChangeWaitlist, isLoading, submitWaitlist }) => {
  return (
    <div
      id="waitlist"
      className="flex items-center justify-center gap-5 flex-col mt-10 p-4"
      style={{
        background: "linear-gradient(180deg, #060809 0%, rgba(20, 21, 22, 0.6) 100%)"
      }}
    >
      <h1 className="text-white font-[600] md:text-[36px] text-[22px]">
        Be a part of our community 🤗{" "}
      </h1>
      <p className="text-white font-[400] opacity-60 max-w-xl text-center text-[15px] md:text-[18px]">
      Connect with the team, be the first to get access to the beta, share your feedback, and innovate together in our Discord community.
      </p>
      <form className="gap-6 my-5 flex items-center justify-center flex-col max-w-lg w-full">
        <input
          type="email"
          value={waitlistForm.email}
          onChange={handleChangeWaitlist}
          name="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-full border border-[#FFFFFF12] bg-[#FFFFFF05] text-white placeholder-opacity-25 placeholder-[#FFFFFF] placeholder:text-sm focus:outline-none"
        />
        <input
          type="text"
          value={waitlistForm.name}
          onChange={handleChangeWaitlist}
          name="name"
          placeholder="Name"
          className="w-full px-4 py-3 rounded-full border border-[#FFFFFF12] bg-[#FFFFFF05] text-white placeholder-opacity-25 placeholder-[#FFFFFF] placeholder:text-sm focus:outline-none"
        />

        <button
          disabled={isLoading}
          onClick={submitWaitlist}
          className="text-[16px] fon-[600] text-black px-5 py-2.5 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%)",
          }}
        >
          Join the waitlist
        </button>
      </form>
    </div>
  );
};

export default CommunityCta;
