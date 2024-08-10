import { useState, useEffect, ReactNode } from "react";

type Props = {
  index: string;
  children: ReactNode | string;
  openIndex: string | null;
  onToggle: (name: string) => void;
};

function DropdownBtn({ children, openIndex, onToggle, index }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(openIndex === index);
  }, [openIndex]);

  return (
    <details className="dropdown" open={isOpen} onClick={() => onToggle(index)}>
      <summary className="btn text-lg w-40 bg-transparent border-0">
        {children}
      </summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </details>
  );
}

export default DropdownBtn;
