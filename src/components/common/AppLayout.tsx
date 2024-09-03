import { useState, ReactNode } from "react";
import DropdownBtn from "./DropdownBtn";
import { useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

function AppLayout({ children }: Props) {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const navigate = useNavigate();

  const onToggle = (index: string) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const onHeadingClick = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full flex justify-center pt-5">
      <div className="w-9/12">
        <header className="flex flex-row justify-between text-center">
          <h1
            className="text-4xl font-bold hover:cursor-pointer"
            onClick={onHeadingClick}
          >
            Lick Cute Cats
          </h1>
          <section>
            <button onClick={() => navigate("/admin")}>설정</button>
          </section>
        </header>
        <div className="divider m-0"></div>
        <section className="navbar flex justify-center">
          <ul className="flex justify-between w-3/6 text-2xl font-semibold">
            <li className="nav-item">
              <DropdownBtn
                index="brand"
                openIndex={openIndex}
                onToggle={onToggle}
              >
                Brand
              </DropdownBtn>
            </li>
            <li className="nav-item">
              <DropdownBtn
                index="light"
                openIndex={openIndex}
                onToggle={onToggle}
              >
                조명
              </DropdownBtn>
            </li>
            <li className="nav-item">
              <DropdownBtn
                index="desk"
                openIndex={openIndex}
                onToggle={onToggle}
              >
                Desk
              </DropdownBtn>
            </li>
            <li className="nav-item">
              <DropdownBtn
                index="chair"
                openIndex={openIndex}
                onToggle={onToggle}
              >
                Chair
              </DropdownBtn>
            </li>
            <li className="nav-item">
              <DropdownBtn
                index="speaker"
                openIndex={openIndex}
                onToggle={onToggle}
              >
                Speaker
              </DropdownBtn>
            </li>
          </ul>
        </section>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default AppLayout;
