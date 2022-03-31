import adminDance from "../../assets/image/admin-dance.png";
import Image from "next/image";
import Link from "next/link";

const AdminDance = () => {
  return (
    <div>
      <Link href="https://admin-dance.hireoo.fun">
        <a target="_blank">
          <div className="card bg-[#FFFBF0]  hover:text-[#5bd692]  cursor-pointer shadow">
            <Image src={adminDance} alt="" />
            <div className="card-body">
              <p className="card-title">
                {" "}
                Analyze the booking record of a dance studio in Shanghai.{" "}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default AdminDance;
