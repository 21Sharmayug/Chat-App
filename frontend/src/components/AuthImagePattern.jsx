const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-blue-100 p-12 border border-gray-300 mt-8">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => {
            const isLeftColumn = i % 3 === 0; // indexes 0, 3, 6
            return (
              <div
                key={i}
                className={`aspect-square ${
                  isLeftColumn ? "rounded-full" : "rounded-xl"
                } bg-blue-400 ${i % 2 === 0 ? "animate-pulse" : ""}`}
              />
            );
          })}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
