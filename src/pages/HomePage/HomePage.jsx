import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Tooltip, BarChart, Bar, XAxis, Cell } from "recharts";
import { fetchWrapper } from "../../utils/fetchWarpper";

const ATTACKE_DEFENDER_COLORS = ["#FF4500", "#32CD32"];
const RESOURCES_COLORS = ["#B87333", "#C0C0C0", "#FFD700"];

const HomePage = () => {
  const username = useSelector((state) => state.user.username);
  const [distributions, setDistributions] = useState({
    workersDistribution: [],
    playerPowerDistribution: [],
    reportsTypeDistribution: [],
    reportsWinLoseDistribution: [],
    weaponsDistribution: [],
    bankDistribution: [],
  });

  const customTooltipFormatter = (value, name) => {
    if (name === "wins") {
      return [value, "נצחונות"];
    } else if (name === "loses") {
      return [value, "הפסדים"];
    } else if (name === "attacker") {
      return [value, "תוקף"];
    } else if (name === "defender") {
      return [value, "מגן"];
    }
    return [value, name];
  };

  useEffect(() => {
    const getUserDetails = async () => {
      const data = await fetchWrapper(
        `${process.env.SERVER_URL}/users/${username}`,
      );
      setDistributions(data);
    };

    getUserDetails();
  }, []);

  return (
    <div className="flex flex-wrap justify-center p-4">
      <div className="m-2 flex h-fit flex-col items-center rounded-3xl bg-sky-50 p-4">
        <span className="text-4xl font-semibold">כמות הפועלים</span>
        <PieChart width={400} height={370}>
          <Pie
            dataKey="value"
            data={distributions.workersDistribution}
            outerRadius={160}
            fill="#8884d2"
          >
            {distributions.workersDistribution.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={RESOURCES_COLORS[index % RESOURCES_COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className="m-2 flex h-fit flex-col items-center rounded-3xl bg-sky-50 p-4">
        <span className="text-4xl font-semibold">מדד כוח</span>
        <PieChart width={400} height={370}>
          <Pie
            dataKey="value"
            data={distributions.playerPowerDistribution}
            outerRadius={160}
            fill="#8884d8"
          >
            {distributions.playerPowerDistribution.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  ATTACKE_DEFENDER_COLORS[
                    index % ATTACKE_DEFENDER_COLORS.length
                  ]
                }
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className="m-2 flex h-fit flex-col items-center rounded-3xl bg-sky-50 p-4">
        <span className="text-4xl font-semibold">כמות דוחות</span>
        <BarChart
          width={400}
          height={370}
          data={distributions.reportsTypeDistribution}
        >
          <XAxis dataKey="name" />
          <Tooltip formatter={customTooltipFormatter} />
          <Bar yAxisId="attacker-defender" dataKey="attacker" fill="#FF4500" />
          <Bar yAxisId="attacker-defender" dataKey="defender" fill="#32CD32" />
        </BarChart>
      </div>

      <div className="m-2 flex h-fit flex-col items-center rounded-3xl bg-sky-50 p-4">
        <span className="text-4xl font-semibold">כמות נצחונות והפסדים</span>
        <BarChart
          width={400}
          height={370}
          data={distributions.reportsWinLoseDistribution}
        >
          <XAxis dataKey="name" />
          <Tooltip formatter={customTooltipFormatter} />
          <Bar dataKey="wins" stackId="win-lose" fill="#32CD32" />
          <Bar dataKey="loses" stackId="win-lose" fill="#FF4500" />
        </BarChart>
      </div>
      <div className="m-2 flex h-fit flex-col items-center rounded-3xl bg-sky-50 p-4">
        <span className="text-4xl font-semibold">נשקים</span>
        <PieChart width={400} height={370}>
          <Pie
            dataKey="value"
            data={distributions.weaponsDistribution}
            outerRadius={160}
            fill="#8884d8"
          />
          <Tooltip />
        </PieChart>
      </div>
      <div className="m-2 flex h-fit flex-col items-center rounded-3xl bg-sky-50 p-4">
        <span className="text-4xl font-semibold">כמות משאבים בבנק</span>
        <PieChart width={400} height={370}>
          <Pie
            dataKey="value"
            data={distributions.bankDistribution}
            outerRadius={160}
            fill="#8884d8"
          >
            {distributions.bankDistribution.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={RESOURCES_COLORS[index % RESOURCES_COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default HomePage;
