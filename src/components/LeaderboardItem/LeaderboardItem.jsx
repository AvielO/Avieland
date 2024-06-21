const typeToImgPath = {
  attacker: "/player-type-icons/attacker-icon.png",
  defender: "/player-type-icons/defender-icon.png",
  attdefer: "/player-type-icons/attdefer-icon.png",
};

const LeaderboardItem = ({
  index = 0,
  username = "שם משתמש",
  type = "attacker",
  gold = "0",
  soliders = "5",
  workers = "5",
  group = "אין",
}) => {
  return (
    <tr className={`text-center ${index % 2 === 0 ? "bg-sky-50" : ""}`}>
      <td>{index}</td>
      <td>{username}</td>
      <td className="flex justify-center">
        <img
          className="h-16 w-16"
          src={typeToImgPath[type]}
          alt="player-type"
        />
      </td>
      <td>{gold}</td>
      <td>{soliders}</td>
      <td>{workers}</td>
      <td>{group}</td>
    </tr>
  );
};

export default LeaderboardItem;