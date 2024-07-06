import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function AppLayout({ children }: Props) {
  return (
    <div className="min-h-screen w-full flex justify-center pt-5">
      <div className="w-9/12">
        <header className="text-center">
          <h1 className="text-4xl font-bold hover:cursor-pointer">
            Lick Cute Cats
          </h1>
        </header>
        <div className="divider m-0"></div>
        <section className="navbar flex justify-center">
          <ul className="flex justify-between w-3/6 text-2xl font-semibold">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Brand
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                조명
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Desk
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Chair
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Speaker
              </a>
            </li>
          </ul>
        </section>
        <main>{children}</main>
      </div>
    </div>
  );
}
``;
export default AppLayout;
