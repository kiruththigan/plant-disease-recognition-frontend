// import { auth } from "@/auth";
import TableSection from "@/components/admin/TableSection";
import React from "react";

const AdminPage = async () => {
//   const session = await auth();
  return (
    <div className=" w-full my-16">
      <TableSection />
    </div>
  );
};

export default AdminPage;
