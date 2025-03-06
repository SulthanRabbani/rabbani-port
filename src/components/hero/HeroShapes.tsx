
const HeroShapes = () => {
  return (
    <div className="absolute -z-10 inset-0">
      <div className="absolute top-10 right-10 w-20 h-20 border-4 border-purple-500/30 rounded-xl animate-spin-slow"></div>
      <div className="absolute bottom-10 left-20 w-16 h-16 border-4 border-purple-500/20 rounded-full animate-float"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
      <div className="absolute top-1/4 right-1/3 w-1 h-32 bg-gradient-to-b from-purple-500 to-transparent"></div>
    </div>
  );
};

export default HeroShapes;
