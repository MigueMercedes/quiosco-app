import type { NextPage } from "next";
import useQuiosco from "../hooks/useQuiosco";
import Product from "../components/Product";
import Layout from "../layout";

const Home: NextPage = () => {
  const { currentCategory } = useQuiosco();
  return (
    <Layout page={`Menú ${currentCategory.name}`}>
      <h1 className="text-4xl font-black">{currentCategory?.name}</h1>
      <p className="text-2xl my-10">Elige y personaliza tu pedido a continuación</p>

      <div className="grid gap-4 place-items-center grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {currentCategory?.products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
