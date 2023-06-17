import './index.scss';
import magnificationGlass from '../../assets/svg/magnification-glass.svg';
interface PropType {
  className?: string;
}

function SearchBarInput({ className }: PropType) {
  return (
    <div
      className={`search-bar-input-wrapper h-[5rem] w-[40.1rem] ${className}`}
    >
      <img
        src={magnificationGlass}
        className="search-bar-magnification-icon"
        alt=""
      />
      <input
        type="text"
        className="search-bar-input h-full w-full bg-[#F5F5F5]"
        placeholder="Search for anything..."
      />
    </div>
  );
}

export default SearchBarInput;
