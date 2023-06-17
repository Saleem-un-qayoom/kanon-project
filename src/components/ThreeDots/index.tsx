function ThreeDots() {
  return (
    <div className="flex">
      {[...Array(3)].map(() => (
        <div className="mx-[0.2rem] h-[0.4rem] w-[0.4rem] rounded bg-[#0D062D]" />
      ))}
    </div>
  );
}

export default ThreeDots;
