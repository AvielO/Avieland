const Leaderboard = () => {
  //UseEffect for fetch data of all players
  //Need to think which information I want to dispaly
  //Design each column, Blue, White, Blue - Like that.
  //Optional - sort of the list.DF
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>שם משתמש</th>
            <th>זהב</th>
            <th>לוחמים</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <th>אביאל</th>
            <th>10005</th>
            <th>50</th>
          </tr>
          <tr>
            <th>2</th>
            <th>עילית</th>
            <th>8346</th>
            <th>40</th>
          </tr>
          <tr>
            <th>3</th>
            <th>שלומקה</th>
            <th>3526</th>
            <th>23</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
