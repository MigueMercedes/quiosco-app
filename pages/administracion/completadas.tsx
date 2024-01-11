import axios from "axios";
import useSWR from "swr";
import Order from "../../components/Order";
import { IOrderResponse } from "../../interfaces/order.interface";
import AdminLayout from "../../layout/AdminLayout";

const Completadas = () => {
  const fetcher = () => axios("/api/order?status=complete").then((res) => res.data);

  const { data, error, isLoading } = useSWR<IOrderResponse[]>("/api/order?status=complete", fetcher, {
    refreshInterval: 100,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <AdminLayout title="Pendientes">
      <>
        <h1 className="text-4xl font-black">Panel de Administración</h1>
        <p className="text-2xl my-10">Administra las ordenes completadas</p>

        {data && data.length > 0 ? (
          data.map((order) => <Order key={order.id} order={order} />)
        ) : (
          <div>No hay ordenes completadas</div>
        )}
      </>
    </AdminLayout>
  );
};

export default Completadas;
