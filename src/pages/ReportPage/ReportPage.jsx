import { useLoaderData } from "react-router-dom";

const ReportPage = () => {
  //const reportInformation = useLoaderData();

  return (
    <div className="mx-40 flex flex-col items-center gap-2 rounded-[85px] bg-sky-100 py-4">
      <span className="text-6xl font-semibold">תוצאות התקפה</span>
      <div className="flex w-full justify-evenly px-4">
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
                <span>50000</span>
              </div>

              <div className="flex flex-col items-center">
                <span>בונוס התקפה:</span>
                <span>50000</span>
              </div>
            </div>
            <span className="px-6 py-12 text-3xl font-semibold">AvielO</span>
          </div>
        </div>

        <span className="my-auto text-5xl font-semibold">ניצחון</span>

        <div className="flex">
          <span className="px-6 py-12 text-3xl font-semibold">Noa</span>
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
                <span>בונוס התקפה:</span>
                <span>50000</span>
              </div>

              <div className="flex flex-col items-center">
                <span>בונוס התקפה:</span>
                <span>50000</span>
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
              <span className="text-2xl">1000</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="h-12 w-12"
                src="/resources-icons/silver-icon.png"
                alt="silver-resource-icon"
              />
              <span className="text-2xl">1000</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="h-12 w-12"
                src="/resources-icons/gold-icon.png"
                alt="gold-resource-icon"
              />
              <span className="text-2xl">1000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function loader({ params }) {
  //const { id } = params;
  //const reportDetails = await getReportInformation(id);
  return null;
}

export default ReportPage;
