import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReportItem from "../../components/ReportItem/ReportItem";
import { CircularProgress } from "@mui/joy";
import { fetchWrapper } from "../../utils/fetchWarpper";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import { toast } from "react-toastify";

const ReportsPage = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const [reports, setReports] = useState([]);
  const username = useSelector((state) => state.user.username);

  const fetchReports = async () => {
    try {
      setIsLoading(true);
      const { reports, totalPages } = await fetchWrapper(
        `${process.env.SERVER_URL}/users/${username}/reports/${page}`,
      );
      setReports(reports);
      setTotalPages(totalPages);
      setIsLoading(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchReports();
  }, [username, page]);

  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center">
          <CircularProgress size="lg" variant="soft" />
        </div>
      )}
      {!isLoading && (
        <div className="flex flex-col gap-4">
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
          <PageNavigation
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        </div>
      )}
    </>
  );
};

export default ReportsPage;
