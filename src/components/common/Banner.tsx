import { useState, ReactNode } from "react";

type Props = {
  children: ReactNode;
  color: string;
  hasCloser: boolean;
};
/**
 * 배너 컴퍼넌트.
 * @param {ReactNode} children - 배너에 표시할 내용.
 * @param {string} color - 배너의 색상. Tailwind CSS 색상을 사용.
 * @param {boolean} hasCloser - 닫기 버튼을 표시할지 여부.
 *
 */

function Banner({ children, color, hasCloser = false }: Props) {
  const [isShow, setIsShow] = useState<boolean>(true);

  const onClose = () => {
    setIsShow(false);
  };

  return (
    <div
      role="alert"
      className={`alert ${
        !isShow && "hidden"
      } flex flex-row justify-between ${color}`}
    >
      <span className="content w-full text-center">{children}</span>
      {hasCloser && (
        <button className="btn btn-circle btn-sm" onClick={onClose}>
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Banner;
