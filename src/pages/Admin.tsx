import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminPageMenu } from "../config/adminMenu";

function Admin() {
  const { menu } = useParams();
  const navigate = useNavigate();

  const onClickMenuBtn = (name: string) => {
    navigate(`/admin/${name}`);
  };

  const Content = AdminPageMenu[menu as keyof typeof AdminPageMenu] || null;

  return (
    <div className="grid grid-cols-6 gap-4">
      <section className="flex flex-col gap-2 col-span-1">
        <button onClick={() => onClickMenuBtn("addProduct")}>
          add product
        </button>
        <button onClick={() => onClickMenuBtn("account")}>account</button>
      </section>
      <section className="col-span-5">
        {Content === null ? <div>컨탠프를 찾을 수 없습니다.</div> : <Content />}
      </section>
    </div>
  );
}

export default Admin;
