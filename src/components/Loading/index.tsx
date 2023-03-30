export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-mpBlackHeader">
      <img
        className="bg-mpLightBlack w-16 h-16 md:w-40 md:h-40"
        src="./assets/spinner.gif"
        alt="Loading"
      />
    </div>
  );
}
