import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function AppLayout({ children }: Props) {
  return (
    <div className="min-h-screen w-full flex justify-center pt-5">
      <div className="w-9/12">
        <div className="navbar bg-base-100">
          <a className="btn btn-ghost text-xl">LCC Commerce</a>
        </div>
        <div className="divider m-0"></div>
        <main>{children}</main>
      </div>
    </div>
  );
}
``;
export default AppLayout;
