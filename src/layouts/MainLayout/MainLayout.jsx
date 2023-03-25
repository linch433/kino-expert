import Header from './Header';

const MainLayout = ({ children }) => {

  console.log('Locale storage layout: ', JSON.parse(localStorage.getItem('user')));

  return (
    <div>
      <Header />
      <div className='my-[15px] text-int-white-secondary'>{children}</div>
    </div>
  );
};

export default MainLayout;
