import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReportItem from "../../components/ReportItem/ReportItem";
import { CircularProgress } from "@mui/joy";
import { fetchWrapper } from "../../utils/fetchWarpper";
import PageNavigation from "../../components/PageNavigation/PageNavigation";

const ReportsPage = () => {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const username = useSelector((state) => state.user.username);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        setIsLoading(true);
        const { reports } = await fetchWrapper(
          `${process.env.SERVER_URL}/users/${username}/reports`,
        );
        setReports(reports);
        setIsLoading(false);
      } catch (err) {
        //Future Plan - Do something - Maybe print to the screen
      }
    };

    fetchReports();
  }, [username]);

  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center">
          <CircularProgress size="lg" variant="soft" />
        </div>
      )}
      {!isLoading && (
        <table className="w-full">
          <thead className="h-14 bg-sky-300 text-xl">
            <tr className="cursor-default select-none text-sky-900">
              <th id="index">#</th>
              <th className="w-96" id="date">
                תאריך
              </th>

              <th id="attacker">תוקף</th>
              <th id="defender">מגן</th>
              <th id="winner">מנצח</th>
              <th id="see-report">ראה דוח</th>
            </tr>
          </thead>
          <tbody className="bg-sky-100 text-center text-2xl text-sky-700">
            {reports.map((report, index) => (
              <ReportItem report={report} index={index} key={report.id} />
            ))}
          </tbody>
        </table>
      )}
      <PageNavigation />
    </>
  );
};

export default ReportsPage;
