const Divider = () => {
  return (
    <div className="flex items-center gap-3 my-6">
      <div className="flex-1 h-px bg-gray-300"></div>

      <span className="text-gray-400 text-sm">or</span>

      <div className="flex-1 h-px bg-gray-300"></div>
    </div>
  );
};

export default Divider;
