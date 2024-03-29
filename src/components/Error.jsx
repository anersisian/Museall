const Error = ({ title }) => (
  <div className="w-full flex justify-center items-center">
    <h1 className="font-bold text-2xl text-white mt-2">
      {title || "Something Went Wrong. Please try again."}
    </h1>
  </div>
);

export default Error;
