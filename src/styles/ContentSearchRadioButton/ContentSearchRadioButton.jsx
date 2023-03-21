const ContentSearchRadioButton = ({ children, ...otherProps }) => {
  return (
    <div>
      <input
        // id="radioBtnForName"
        // type="radio"
        // value="name"
        // checked={filterOption === 'name'}
        // onChange={() => setFilterOption('name')}
        {...otherProps}
      />
      <label className="ml-1 text-xl">{children}</label>
    </div>
  );
};

export default ContentSearchRadioButton;
