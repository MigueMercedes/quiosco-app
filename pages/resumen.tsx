import ResumeProduct from '../components/ResumeProduct';
import useQuiosco from '../hooks/useQuiosco';
import Layout from '../layout/Layout';

const Resumen = () => {
	const { order } = useQuiosco();

	return (
		<Layout page='Resumen'>
			<h1 className='text-4xl font-black'>Resumen</h1>
			<p className='text-2xl my-10'>Revisa tu pedido</p>

			{order.length === 0 ? (
				<p className='text-center text-4xl'>No hay elementos en tu pedido</p>
			) : (
				order.map( (product) => (
					<ResumeProduct key={product.id} product={product} />
				))
			)}
		</Layout>
	);
};

export default Resumen;
