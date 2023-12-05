import Breadcrumb from '../components/Breadcrumb';
import Card from '../components/Cards';

const Projectlist = () => {
  return (
    <>
      <Breadcrumb pageName="Projectlist" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          {/* You can add more cards here */}
        </div>
    </>
  );
};

export default Projectlist;
