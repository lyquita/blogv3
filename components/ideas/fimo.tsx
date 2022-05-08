import fimo from "../../assets/image/fimo.png";
import Image from "next/image";
import Link from "next/link";

const Fimo = () => {
  return (
    <div className="mt-12">
      <Link href="https://fimo.hireoo.fun">
        <a target="_blank">
          <div className="card bg-[#FFFBF0]  hover:text-[#5bd692]  cursor-pointer shadow">
            <Image src={fimo} alt="" />
            <div className="card-body">
              <p className="card-title">Online movie booking platform</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Fimo;
