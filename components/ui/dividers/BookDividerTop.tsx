import classes from './BookDividerTop.module.scss';
const BookDividerTop = (props: any) => {
  const { color } = props;
  return (
    <div
      className={`absolute top-0 left-0 w-full overflow-hidden leading-0 rotate-180 ${classes.divider}`}
    >
      <svg
        className="block relative"
        data-name="book-divider-top"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
          className={color}
        ></path>
      </svg>
    </div>
  );
};

export default BookDividerTop;
