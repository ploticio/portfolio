export default function Hero() {
  return (
    <div className="relative slant bg-white h-[400px] md:h-[800px]">
      <div className="flex flex-col absolute left-[15%] top-1/3">
        <h1 className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">
          Hi, my name&apos;s Darren.
        </h1>
        <h1 className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">
          Welcome to my showcase.
        </h1>
      </div>
    </div>
  );
}
