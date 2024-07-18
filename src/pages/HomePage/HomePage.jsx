import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Tooltip, BarChart, Bar, XAxis, Legend } from "recharts";

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

  useEffect(() => {
    const getUserDetails = async () => {
      const res = await fetch(`${process.env.SERVER_URL}/users/${username}`);
      const data = await res.json();
      setDistributions(data);
    };

    getUserDetails();
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <span>כמות הפועלים</span>
          <PieChart width={500} height={400}>
            <Pie
              dataKey="value"
              data={distributions.workersDistribution}
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
              data={distributions.playerPowerDistribution}
              // outerRadius={80}
              fill="#8884d8"
            />
            <Tooltip />
          </PieChart>
        </div>
        <div className="flex flex-col items-center">
          <span>כמות דוחות</span>
          <BarChart
            width={500}
            height={400}
            data={distributions.reportsTypeDistribution}
          >
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar yAxisId="attacker-defender" dataKey="attacker" fill="#8884d8" />
            <Bar yAxisId="attacker-defender" dataKey="defender" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <span>כמות נצחונות והפסדים</span>
          <BarChart
            width={500}
            height={400}
            data={distributions.reportsWinLoseDistribution}
          >
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="wins" stackId="win-lose" fill="#8884d8" />
            <Bar dataKey="loses" stackId="win-lose" fill="#82ca9d" />
          </BarChart>
        </div>
        <div className="flex flex-col items-center">
          <span>כמות נשקים</span>
          <PieChart width={500} height={400}>
            <Pie
              dataKey="value"
              data={distributions.weaponsDistribution}
              // outerRadius={80}
              fill="#8884d8"
            />
            <Tooltip />
          </PieChart>
        </div>
        <div className="flex flex-col items-center">
          <span>כמות משאבים בבנק</span>
          <PieChart width={500} height={400}>
            <Pie
              dataKey="value"
              data={distributions.workersDistribution}
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
