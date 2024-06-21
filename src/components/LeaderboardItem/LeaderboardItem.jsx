const typeToImgPath = {
  attacker: "/player-type-icons/attacker-icon.png",
  defender: "/player-type-icons/defender-icon.png",
  attdefer: "/player-type-icons/attdefer-icon.png",
};

const LeaderboardItem = ({
  index,
  username,
  type,
  gold,
  soliders,
  workers,
  group,
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
      <td>{group || "אין"}</td>
    </tr>
  );
};

export default LeaderboardItem;
