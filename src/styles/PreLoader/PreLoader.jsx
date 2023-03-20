import './PreLoader.css';

const PreLoader = () => {
  return <div className="spin" />;
};

export default PreLoader;

export const PagePreLoader = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-76px)]">
      <PreLoader />
    </div>
  );
};
