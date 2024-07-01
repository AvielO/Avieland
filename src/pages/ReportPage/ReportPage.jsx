import { useLoaderData } from "react-router-dom";
import { getReportInformation } from "../../services/backendAPI";

const ReportPage = () => {
  const reportInformation = useLoaderData();

  return (
    <div className="mx-40 flex flex-col items-center gap-2 rounded-[85px] bg-sky-100 py-4">
      <span className="text-6xl font-semibold">תוצאות התקפה</span>
      <div className="flex w-full justify-evenly px-4 text-center">
        <div className="flex flex-col">
          <div className="flex">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col items-center">
                <img
                  className="h-64 w-64 rounded-full"
                  src="/user-icon.png"
                  alt="userIcon"
                />
                <span className="text-4xl font-semibold">תוקף</span>
              </div>

              <div className="flex flex-col items-center">
                <span>בונוס התקפה:</span>
                <span>{reportInformation.attacker.bonusPowerLevel}</span>
              </div>

              <div className="flex flex-col items-center">
                <span>כוח התקפה:</span>
                <span>{reportInformation.attacker.powerLevel}</span>
              </div>
            </div>
            <span className="px-6 py-12 text-3xl font-semibold">
              {reportInformation.attacker.name}
            </span>
          </div>
        </div>

        <span className="my-auto text-5xl font-semibold">
          {reportInformation.winner} המנצח
        </span>

        <div className="flex">
          <span className="px-6 py-12 text-3xl font-semibold">
            {reportInformation.defender.name}
          </span>
          <div className="flex">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col items-center">
                <img
                  className="h-64 w-64 rounded-full"
                  src="/user-icon.png"
                  alt="userIcon"
                />
                <span className="text-4xl font-semibold">מגן</span>
              </div>

              <div className="flex flex-col items-center">
                <span>בונוס הגנה:</span>
                <span>{reportInformation.defender.bonusPowerLevel}</span>
              </div>

              <div className="flex flex-col items-center">
                <span>כוח הגנה:</span>
                <span>{reportInformation.defender.powerLevel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <span className="text-5xl">משאבים שהושגו</span>
        <div className="flex">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <img
                className="h-12 w-12"
                src="/resources-icons/copper-icon.png"
                alt="copper-resource-icon"
              />
              <span className="text-2xl">{reportInformation.stolenCopper}</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="h-12 w-12"
                src="/resources-icons/silver-icon.png"
                alt="silver-resource-icon"
              />
              <span className="text-2xl">{reportInformation.stolenSilver}</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="h-12 w-12"
                src="/resources-icons/gold-icon.png"
                alt="gold-resource-icon"
              />
              <span className="text-2xl">{reportInformation.stolenGold}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function loader({ params }) {
  const { id } = params;
  const reportDetails = await getReportInformation(id);
  return reportDetails;
}

export default ReportPage;
