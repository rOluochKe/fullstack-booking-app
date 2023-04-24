import {Link} from "react-router-dom";

export default function IndexPage() {
  return (
    <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      <Link to={'/place/'}>
        <div className="bg-gray-500 mb-2 rounded-2xl flex">
          <img className="rounded-2xl object-cover aspect-square" src={''} alt=""/>
        </div>
        <h2 className="font-bold">address</h2>
        <h3 className="text-sm text-gray-500">title</h3>
        <div className="mt-1">
          <span className="font-bold">$price</span> per night
        </div>
      </Link>
    </div>
  );
}
