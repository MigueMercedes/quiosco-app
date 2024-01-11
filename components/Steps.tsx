import { useRouter } from "next/router";

interface Step {
  step: number;
  name: string;
  url: string;
}

const steps: Step[] = [
  {
    step: 1,
    name: "Menú",
    url: "/cliente",
  },
  {
    step: 2,
    name: "Resumen",
    url: "/cliente/resumen",
  },
  {
    step: 3,
    name: "Datos y Total",
    url: "/cliente/total",
  },
];

const Steps = () => {
  const router = useRouter();

  const calculateProgress = () => {
    let percent;

    if (router.pathname === "/cliente") {
      percent = 2;
    } else if (router.pathname === "/cliente/resumen") {
      percent = 50;
    } else {
      percent = 100;
    }

    return percent;
  };

  return (
    <>
      <div className="flex justify-between mb-10">
        {steps.map((step) => (
          <button
            key={step.step}
            className="text-2xl font-bold"
            onClick={() => {
              router.push(step.url);
            }}
          >
            {step.name}
          </button>
        ))}
      </div>

      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
          style={{ width: `${calculateProgress()}%` }}
        ></div>
      </div>
    </>
  );
};

export default Steps;
