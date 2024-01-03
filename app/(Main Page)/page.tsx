import { Header } from "./Header/Header";
import { Filter } from "./Filter/Filter";
import { PropertyList } from "./PropertyList/PropertyList";

export default function Home() {
  return (
    <>
      <Header />
      <Filter />
      <main>
        <PropertyList />
      </main>
    </>
  );
}
