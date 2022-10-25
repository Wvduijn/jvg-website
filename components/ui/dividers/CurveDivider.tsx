const CurveDivider = (props: any) => {
  const { color, position } = props;
  return (
    <div className={`absolute left-0 w-full overflow-hidden leading-0 ${position === 'top' ? 'top-0' : 'bottom-0 rotate-180'}`}>
      <svg
        data-name="curve-divider"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
          className={color}
        ></path>
      </svg>
    </div>
  );
};

export default CurveDivider;
