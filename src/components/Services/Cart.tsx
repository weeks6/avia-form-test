import { currencyFormatter } from "../../shared/currency-format";
import useCartService from "../../stores/cart.store";
import useServiceStore from "../../stores/services.store";

const Cart = () => {
  const { clearCart } = useCartService();

  const isDisabled = useCartService((state) => !state.cart.size);
  const cart = useCartService((state) => state.cart);
  const sum = useServiceStore((state) =>
    state.available.reduce((acc, service) => {
      if (cart.has(service.id)) acc += service.price;
      return acc;
    }, 0),
  );

  function submitHandler() {
    alert("Заказ оформлен");
    clearCart();
  }

  return (
    <section
      className=" flex flex-col gap-4 rounded-t-md
      lg:basis-1/2 lg:sticky lg:top-2 lg:h-fit
      not-lg:p-4 not-lg:w-full not-lg:shadow-[0_-4px_8px_-4px_rgba(0,0,0,0.15)] not-lg:bg-white not-lg:fixed not-lg:bottom-0 not-lg:left-0"
    >
      <div className="flex justify-between gap-2">
        <h2 className="text-xl text-slate-700 font-semibold">Итого</h2>
        <h2 className="text-xl text-slate-700 font-semibold">
          {currencyFormatter.format(sum)}
        </h2>
      </div>
      <button
        className="bg-slate-700 text-white w-full text-xl p-3 rounded-xl cursor-pointer active:bg-slate-600 hover:bg-slate-600 disabled:bg-slate-400 disabled:cursor-not-allowed"
        onClick={submitHandler}
        disabled={isDisabled}
      >
        Оформить заказ
      </button>
    </section>
  );
};

export default Cart;
