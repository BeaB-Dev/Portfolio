import Info from "../components/Info";

export default function MainLayout({ children, modal }) {
  return (
    <div>
      {modal}
      <div className="cont">
        <div className="columns is-desktop">
          <Info />
          {children}
        </div>
      </div>
    </div>
  );
}
