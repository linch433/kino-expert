const ReviewCardButton = ({ children, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className=" w-11/12 bg-int-gray-main hover:bg-int-blue-link font-bold rounded-full py-2"
    >
      {children}
    </button>
  );
};

export default ReviewCardButton;
