import Card from "../../components/Card/Card";

const StorePage = () => {
  return (
    <div className="flex gap-8">
      <Card price={{ copper: 5, silver: 10, gold: 15 }} />
      <Card price={{ copper: 5, silver: 10, gold: 15 }} />
      <Card price={{ copper: 5, silver: 10, gold: 15 }} />
    </div>
  );
};

export default StorePage;
