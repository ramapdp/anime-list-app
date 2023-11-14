import { PulseLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="flex justify-center py-10 lg:py-6">
      <PulseLoader color="#0096FF" size={10} />
    </div>
  );
}
