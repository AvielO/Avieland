import { Link } from "react-router-dom";

const typeToImgPath = {
  attacker: "/player-type-icons/attacker-icon.png",
  defender: "/player-type-icons/defender-icon.png",
  attdefer: "/player-type-icons/attdefer-icon.png",
};

const LeaderboardItem = ({
  id,
  index,
  username,
  type,
  gold,
  soliders,
  workers,
  group,
  columnIndex,
}) => {
  return (
    <tr className={`text-center ${columnIndex % 2 === 0 ? "bg-sky-50" : ""}`}>
      <td>{index + 1}</td>
      <td>
        <Link to={`/user/${username}`}>{username}</Link>
      </td>
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
