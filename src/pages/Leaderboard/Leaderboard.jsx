import LeaderboardItem from "../../components/LeaderboardItem/LeaderboardItem";

const Leaderboard = () => {
  //UseEffect for fetch data of all players
  //Need to think which information I want to dispaly
  //Design each column, Blue, White, Blue - Like that.
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
          
          <tr className="h-9 text-center">
            <td>1</td>
            <td>אביאל</td>
            <td className="flex items-center justify-center">
              <img
                className="h-16 w-16"
                src="/player-type-icons/attacker-icon.png"
                alt="player-type"
              />
            </td>
            <td>10005</td>
            <td>50</td>
            <td>50</td>
            <td>אין</td>
          </tr>
          <tr className="h-9 bg-sky-50 text-center">
            <td>2</td>
            <td>נועה</td>
            <td className="flex items-center justify-center">
              <img
                className="h-16 w-16"
                src="/player-type-icons/attdefer-icon.png"
                alt="player-type"
              />
            </td>
            <td>9783</td>
            <td>43</td>
            <td>43</td>
            <td>אין</td>
          </tr>
          <tr className="h-9 text-center">
            <td>3</td>
            <td>עילית</td>
            <td className="flex items-center justify-center">
              <img
                className="h-16 w-16"
                src="/player-type-icons/defender-icon.png"
                alt="player-type"
              />
            </td>
            <td>8346</td>
            <td>40</td>
            <td>40</td>
            <td>אין</td>
          </tr>
          <tr className="h-9 bg-sky-50 text-center">
            <td>4</td>
            <td>שלומקה</td>
            <td className="flex items-center justify-center">
              <img
                className="h-16 w-16"
                src="/player-type-icons/attdefer-icon.png"
                alt="player-type"
              />
            </td>
            <td>3526</td>
            <td>23</td>
            <td>23</td>
            <td>אין</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Leaderboard;
