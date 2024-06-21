import { useEffect, useState } from "react";
import LeaderboardItem from "../../components/LeaderboardItem/LeaderboardItem";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`${process.env.SERVER_URL}/users`);
      if (!res.ok) {
        throw new Error("Could not fetch the users");
      }
      const leaderboardUsers = await res.json();
      setUsers(leaderboardUsers);
    };

    fetchUsers();
  }, []);

  //UseEffect for fetch data of all players
  //Optional - sort of the list.DF
  return (
    <>
      <table className="w-full">
        <thead className="h-10 bg-sky-300 text-xl">
          <tr className="text-sky-900">
            <th>#</th>
            <th>שם משתמש</th>
            <th>סוג</th>
            <th>זהב</th>
            <th>לוחמים</th>
            <th>עובדים</th>
            <th>אירגון</th>
          </tr>
        </thead>
        <tbody className="bg-sky-100 text-2xl text-sky-700">
          {users.map((user, index) => (
            <LeaderboardItem
              index={index + 1}
              username={user.username}
              type="attacker"
              gold={user.gold}
              soliders={user.soliders}
              workers={user.workers}
              key={user.id}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Leaderboard;
