interface BoltWhiteFileProp {
  fill?: string;
  className?: string;
}

const BoltWhiteFile: React.FC<BoltWhiteFileProp> = ({
  fill = 'none',
  className = '',
}) => {
  return (
    <svg
      width='140'
      height='889'
      viewBox='0 0 140 889'
      fill={fill}
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M84.5586 0.5L63.2135 352.731L63.1673 353.493L63.8841 353.231L139.322 325.678L20.4731 881.042L60.0191 424.828L60.1366 423.473L59.1693 424.43L0.618177 482.352L43.2122 0.5H63.7126H84.5586Z'
        stroke='white'
      />
    </svg>
  );
};

export default BoltWhiteFile;
