import './index.scss';

interface BadgeType {
  type: 'low' | 'high' | 'completed';
}

function Badges({ type }: BadgeType) {
  return (
    <div
      className={`inline-block w-fit rounded-[0.4rem] px-[0.8rem] py-[0.3rem] text-[1.2rem] font-semibold capitalize ${type}`}
    >
      {type}
    </div>
  );
}

export default Badges;
