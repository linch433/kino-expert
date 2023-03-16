export const AuthButton = ({ text, type }) => {
  return (
    <button
      type={type}
      className="bg-int-gray-secondary hover:bg-int-blue-link font-bold py-2 px-4 rounded-full mt-5"
    >
      {text}
    </button>
  );
};
