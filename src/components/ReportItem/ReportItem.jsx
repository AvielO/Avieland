import { Link } from "react-router-dom";

const ReportItem = ({ report, index }) => {
  return (
    <tr className={`text-center ${index % 2 === 0 ? "bg-sky-50" : ""} h-16`}>
      <td>{index + 1}</td>
      <td>{report.time}</td>
      <td>{report.winner}</td>
      <td>{report.attacker.name}</td>
      <td>{report.defender.name}</td>
      <td>
        <Link to={`/reports/${report.id}`}>ראה דוח</Link>
      </td>
    </tr>
  );
};

export default ReportItem;
