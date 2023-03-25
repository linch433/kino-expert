import Header from './Header';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="my-[15px] text-int-white-secondary">{children}</div>
    </div>
  );
};

export default MainLayout;
