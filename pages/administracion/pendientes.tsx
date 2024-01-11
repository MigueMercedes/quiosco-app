import axios from "axios";
import useSWR from "swr";
import Order from "../../components/Order";
import { IOrderResponse } from "../../interfaces/order.interface";
import AdminLayout from "../../layout/AdminLayout";

const Pendientes = () => {
  const fetcher = () => axios("/api/order").then((res) => res.data);

  const { data, error, isLoading } = useSWR<IOrderResponse[]>("/api/order?status=pending", fetcher, {
    refreshInterval: 200,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <AdminLayout title="Pendientes">
      <>
        <h1 className="text-4xl font-black">Panel de Administración</h1>
        <p className="text-2xl my-10">Administra las ordenes pendientes</p>

        {data && data.length > 0 ? (
          data.map((order) => <Order key={order.id} order={order} />)
        ) : (
          <div>No hay ordenes pendientes</div>
        )}
      </>
    </AdminLayout>
  );
};

export default Pendientes;
