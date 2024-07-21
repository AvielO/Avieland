import { getStore } from "../../services/backendAPI.js";

import Card from "../../components/Card/Card";
import { useLoaderData } from "react-router-dom";

const StorePage = () => {
  const storeItems = useLoaderData();

  return (
    <div className="flex flex-wrap gap-8">
      {storeItems.map((item) => (
        <Card
          weaponID={item.id}
          attack={item.attack}
          defense={item.defense}
          weaponName={item.name}
          copperPrice={item.copperPrice}
          silverPrice={item.silverPrice}
          goldPrice={item.goldPrice}
          key={item.id}
        />
      ))}
    </div>
  );
};

export async function loader() {
  const storeItems = await getStore();
  return storeItems;
}

export default StorePage;
