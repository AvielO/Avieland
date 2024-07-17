import { PieChart, Pie, Tooltip, BarChart, Bar, XAxis, Legend } from "recharts";

//Get Workers Distribution
const workersDistribution = [
  { name: "עובדי נחושת", value: 400 },
  { name: "עובדי כסף", value: 300 },
  { name: "עובדי זהב", value: 300 },
];

//Get Power Distribution
const playerPowerDistribution = [
  { name: "כוח התקפי", value: 10000 },
  { name: "כוח הגנתי", value: 6905 },
];

//Get Reports Distributions - Day, How much attacked and defended
const data = [
  {
    name: "ראשון",
    attacker: 24,
    defender: 56,
  },
  {
    name: "שני",
    attacker: 12,
    defender: 64,
  },
  {
    name: "שלישי",
    attacker: 64,
    defender: 12,
  },
  {
    name: "רביעי",
    attacker: 35,
    defender: 53,
  },
  {
    name: "חמישי",
    attacker: 63,
    defender: 12,
  },
  {
    name: "שישי",
    attacker: 4,
    defender: 62,
  },
  {
    name: "שבת",
    attacker: 46,
    defender: 20,
  },
];

const data01 = [
  { name: "כוח התקפי", value: 10000 },
  { name: "כוח הגנתי", value: 6905 },
];

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <span>כמות הפועלים</span>
          <PieChart width={500} height={400}>
            <Pie
              dataKey="value"
              data={workersDistribution}
              // outerRadius={80}
              fill="#8884d8"
            />
            <Tooltip />
          </PieChart>
        </div>
        <div className="flex flex-col items-center">
          <span>כוח עצמי</span>
          <PieChart width={500} height={400}>
            <Pie
              dataKey="value"
              data={data01}
              // outerRadius={80}
              fill="#8884d8"
            />
            <Tooltip />
          </PieChart>
        </div>
        <div className="flex flex-col items-center">
          <span>כמות דוחות</span>
          <BarChart width={500} height={400} data={data}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar yAxisId="left" dataKey="attacker" fill="#8884d8" />
            <Bar yAxisId="right" dataKey="defender" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <span>כמות הפועלים</span>
          <PieChart width={500} height={400}>
            <Pie
              dataKey="value"
              data={data01}
              // outerRadius={80}
              fill="#8884d8"
            />
            <Tooltip />
          </PieChart>
        </div>
        <div className="flex flex-col items-center">
          <span>כמות הפועלים</span>
          <PieChart width={500} height={400}>
            <Pie
              dataKey="value"
              data={data01}
              // outerRadius={80}
              fill="#8884d8"
            />
            <Tooltip />
          </PieChart>
        </div>
        <div className="flex flex-col items-center">
          <span>כמות הפועלים</span>
          <PieChart width={500} height={400}>
            <Pie
              dataKey="value"
              data={data01}
              // outerRadius={80}
              fill="#8884d8"
            />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
