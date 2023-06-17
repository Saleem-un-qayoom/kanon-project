interface PropTypes {
  images: string[];
  direction?: 'right' | 'left';
  height?: number;
  width?: number;
}

function ImageStack({
  images,
  direction = 'right',
  height = 38,
  width = 38,
}: PropTypes) {
  return (
    <div className="flex">
      {images.slice(0, 4).map((image, index) => {
        let style: any =
          direction === 'right'
            ? {}
            : {
                zIndex: 5 - index,
              };
        style = { ...style, height, width };

        return (
          <img
            key={index}
            style={style}
            className={` h-[2.4rem] w-[2.4rem] rounded-full object-cover ${
              index !== 4 ? 'mr-[-1rem]' : ''
            }`}
            src={image}
            alt=""
          />
        );
      })}

      {images.length > 4 ? (
        <div
          style={{ height, width }}
          className={`flex h-[2.4rem] w-[2.4rem] items-center justify-center rounded-full bg-[#F4D7DA] text-[1.5rem] leading-4 text-[#D25B68]`}
        >
          {`+${images.length - 4}`}
        </div>
      ) : null}
    </div>
  );
}

export default ImageStack;
