import { currencyFormatter } from "../../shared/currency-format";
import useCartService from "../../stores/cart.store";
import type { AviaService } from "../../stores/types";
import { Add, Delete } from "../Icons";

interface Props {
  el?: "li" | "div";
  service: AviaService;
}

const ServiceCard = ({ service, el = "li" }: Props) => {
  const Component = el;

  const { addToCart, removeFromCart } = useCartService();
  const inCart = useCartService((state) => state.cart.has(service.id));

  function toggleHandler() {
    if (inCart) {
      removeFromCart(service.id);
    } else {
      addToCart(service.id);
    }
  }

  return (
    <Component
      className={`flex rounded-md transition-colors px-4 py-2 justify-between items-center gap-2 border
        ${inCart ? "bg-green-100 border-green-200" : "bg-slate-100 border-slate-200"}`}
    >
      <section className="flex flex-col gap-1">
        <p className="">{service.name}</p>
        <p className="text-xl">{currencyFormatter.format(service.price)}</p>
      </section>

      <button
        className="flex items-center justify-center w-8 h-8 transition-colors fill-slate-600 active:bg-slate-200 hover:bg-slate-200 cursor-pointer rounded-sm"
        onClick={toggleHandler}
      >
        {inCart ? <Delete size={24} /> : <Add size={24} />}
      </button>
    </Component>
  );
};

export default ServiceCard;
