import { Link } from "react-router-dom";

const ReportItem = ({ report }) => {
  return (
    <tr>
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
