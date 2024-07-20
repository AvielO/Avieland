import { useEffect, useState } from "react";
import LeaderboardItem from "../../components/LeaderboardItem/LeaderboardItem";
import { sortByAmount, sortByName } from "../../utils/columnSorts";
import CircularProgress from "@mui/joy/CircularProgress";

const Leaderboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [activeSort, setActiveSort] = useState({
    columnName: "null",
    direction: "null",
  });

  const handleSort = (columnName) => {
    let sortedArray = [...users];
    let direction = "asc";

    if (activeSort.columnName === columnName) {
      if (activeSort.direction === "asc") {
        direction = "desc";
      } else if (activeSort.direction === "desc") {
        columnName = "null";
        direction = "null";
        sortedArray = sortByAmount(users, "index", "desc");
      }
    }

    if (direction) {
      if (["index", "gold", "soliders", "workers"].includes(columnName)) {
        sortedArray = sortByAmount(users, columnName, direction);
      } else if (["username", "type"].includes(columnName)) {
        sortedArray = sortByName(users, columnName, direction);
      }
    }
    setUsers(direction ? sortedArray : [...users]);
    setActiveSort({ columnName, direction });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const res = await fetch(`${process.env.SERVER_URL}/users/leaderboard`);
      if (!res.ok) {
        throw new Error("Could not fetch the users");
      }
      const leaderboardUsers = await res.json();
      setUsers(leaderboardUsers);
      setIsLoading(false);
    };

    fetchUsers();
  }, []);

  //UseEffect for fetch data of all players
  //Optional - sort of the list.DF
  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center">
          <CircularProgress size="lg" variant="soft" />
        </div>
      )}
      {!isLoading && (
        <table className="w-full">
          <thead className="h-12 bg-sky-300 text-xl">
            <tr className="cursor-pointer select-none text-sky-900">
              <th
                id="index"
                className={`transition-all ${activeSort.columnName === "index" ? "bg-sky-500 text-sky-50" : ""}`}
                onClick={(e) => handleSort(e.target.id)}
              >
                #
              </th>
              <th
                id="username"
                className={`transition-all ${activeSort.columnName === "username" ? "bg-sky-500 text-sky-50" : ""}`}
                onClick={(e) => handleSort(e.target.id)}
              >
                שם משתמש
              </th>
              <th
                id="type"
                className={`transition-all ${activeSort.columnName === "type" ? "bg-sky-500 text-sky-50" : ""}`}
                onClick={(e) => handleSort(e.target.id)}
              >
                סוג
              </th>
              <th
                id="gold"
                className={`transition-all ${activeSort.columnName === "gold" ? "bg-sky-500 text-sky-50" : ""}`}
                onClick={(e) => handleSort(e.target.id)}
              >
                זהב
              </th>
              <th
                id="soliders"
                className={`transition-all ${activeSort.columnName === "soliders" ? "bg-sky-500 text-sky-50" : ""}`}
                onClick={(e) => handleSort(e.target.id)}
              >
                לוחמים
              </th>
              <th
                id="workers"
                className={`transition-all ${activeSort.columnName === "workers" ? "bg-sky-500 text-sky-50" : ""}`}
                onClick={(e) => handleSort(e.target.id)}
              >
                עובדים
              </th>
              <th className="cursor-default">אירגון</th>
            </tr>
          </thead>
          <tbody className="bg-sky-100 text-2xl text-sky-700">
            {users.map((user, index) => (
              <LeaderboardItem
                id={user.id}
                index={user.index}
                username={user.username}
                type={user.type}
                gold={user.gold}
                soliders={user.soliders}
                workers={user.workers}
                key={user.id}
                columnIndex={index}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Leaderboard;
