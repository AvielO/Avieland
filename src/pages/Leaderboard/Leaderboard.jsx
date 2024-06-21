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
          <LeaderboardItem
            index="1"
            username="אביאל"
            type="attacker"
            gold="35265"
            soliders="80"
            workers="35"
          />
          <LeaderboardItem
            index="2"
            username="נועה"
            type="attdefer"
            gold="25626"
            soliders="58"
            workers="32"
          />
          <LeaderboardItem
            index="3"
            username="עילית"
            type="defender"
            gold="16363"
            soliders="49"
            workers="26"
          />
          <LeaderboardItem
            index="4"
            username="שלומקה"
            type="attdefer"
            gold="9466"
            soliders="32"
            workers="9"
          />
          <LeaderboardItem
            index="5"
            username="AvielO"
            type="attdefer"
            gold="1351"
            soliders="5"
            workers="5"
          />
        </tbody>
      </table>
    </>
  );
};

export default Leaderboard;
