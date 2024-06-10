type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
};

export const Thumb = (props: PropType) => {
  const { selected, index, onClick } = props;

  return (
    <div className={'embla-thumbs__slide'.concat(selected ? ' embla-thumbs__slide--selected' : '')}>
      <button onClick={onClick} type="button" className="embla-thumbs__slide__number rounded-2xl border shadow-sm">
        {index + 1}
      </button>
    </div>
  );
};
