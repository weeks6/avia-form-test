import useServiceStore from "../../stores/services.store";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  const list = useServiceStore((state) => state.available);

  return (
    <section
      className="flex flex-col gap-4
      lg:basis-1/2
      "
    >
      <h1 className="text-xl font-semibold">Доступные услуги</h1>
      <ul className="flex flex-col gap-2">
        {list.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </ul>
    </section>
  );
};

export default ServiceList;
