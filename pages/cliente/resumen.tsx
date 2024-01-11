import ResumeProduct from "../../components/ResumeProduct";
import useQuiosco from "../../hooks/useQuiosco";
import Layout from "../../layout/ClientLayout";

const Resumen = () => {
  const { order } = useQuiosco();

  return (
    <Layout page="Resumen">
      <h1 className="text-4xl font-black mb-10">Resumen</h1>
      {order.length > 0 && <p className="text-2xl my-10 mb-5">Revisa tu pedido</p>}

      {order.length === 0 ? (
        <p className="text-center text-4xl">No hay elementos en tu pedido</p>
      ) : (
        order.map((product) => <ResumeProduct key={product.id} product={product} />)
      )}
    </Layout>
  );
};

export default Resumen;
