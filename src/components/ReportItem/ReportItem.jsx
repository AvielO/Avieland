import { Link } from "react-router-dom";
import { formatDate } from "../../utils/helpers";

const ReportItem = ({ report, index }) => {
  return (
    <tr
      className={`cursor-default text-center ${index % 2 === 0 ? "bg-sky-50" : ""} h-16`}
    >
      <td className="font-semibold">{index + 1}</td>
      <td>{formatDate(report.time)}</td>
      <td>{report.winner}</td>
      <td>{report.attacker.name}</td>
      <td>{report.defender.name}</td>
      <td className="font-semibold">
        <Link to={`/reports/${report.id}`}>ראה דוח</Link>
      </td>
    </tr>
  );
};

export default ReportItem;
