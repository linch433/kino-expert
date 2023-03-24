const ContentSearchRadioButton = ({ children, ...otherProps }) => {
  return (
    <div className="flex items-center">
      <input {...otherProps} />
      <label className="ml-1 text-xl">{children}</label>
    </div>
  );
};

export default ContentSearchRadioButton;
