import Breadcrumb from '../components/Breadcrumb';
import Card from '../components/Cards';

const Semproject = () => {
  return (
    <>
      <Breadcrumb pageName="Projectlist" />
      <div className="p-4">
      {/* <Navbar /> */}
      <div className="mt-4">
        {/* Add margin-top here */}
        <h2 className="text-xl font-bold py-2 border-2 flex w-20 p-auto rounded-xl my-2">
          Sem-2
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <Card />
          <Card />
          <Card />

          {/* You can add more cards here */}
        </div>
      </div>
      {/* sem-3 */}
      <div className="mt-4">
        {/* Add margin-top here */}
        <h2 className="text-xl font-bold py-2 border-2 flex w-20 p-auto rounded-xl my-2">
          Sem-3
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <Card />
          <Card />
          <Card />

          {/* You can add more cards here */}
        </div>
      </div>
      {/* sem-4 */}
      <div className="mt-4">
        {/* Add margin-top here */}
        <h2 className="text-xl font-bold py-2 border-2 flex w-20 p-auto rounded-xl my-2">
          Sem-4
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <Card />
          <Card />
          <Card />

          {/* You can add more cards here */}
        </div>
      </div>

      {/* sem-6 */}
      <div className="mt-4">
        {/* Add margin-top here */}
        <h2 className="text-xl font-bold py-2 border-2 flex w-20 p-auto rounded-xl my-2">
          Sem-5
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <Card />
          <Card />
          <Card />

          {/* You can add more cards here */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Semproject;
