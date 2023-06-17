function ThreeDots() {
  return (
    <div className="flex cursor-pointer px-1 py-2">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="mx-[0.2rem] h-[0.4rem] w-[0.4rem] rounded bg-[#0D062D]"
        />
      ))}
    </div>
  );
}

export default ThreeDots;
