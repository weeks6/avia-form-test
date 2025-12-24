import "./App.css";

import Cart from "./components/Services/Cart";
import ServiceList from "./components/Services/ServiceList";

function App() {
  return (
    <main className="h-screen bg-slate-50 p-4">
      <div className="max-w-7xl mx-auto lg:flex lg:gap-8">
        <ServiceList />
        <Cart />
      </div>
    </main>
  );
}

export default App;
