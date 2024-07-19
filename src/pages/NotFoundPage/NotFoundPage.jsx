import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 text-5xl">
      <h1 className="text-6xl">404</h1>
      <h1>הדף שהגעת שניווטת אליו לא נמצא</h1>
      <Link className="rounded-full bg-sky-200 p-4 text-2xl" to="/signin">
        לחץ עליי כדי להתחבר
      </Link>
    </div>
  );
};

export default NotFoundPage;
