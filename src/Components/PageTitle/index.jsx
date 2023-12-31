import "./styles.css";

export const PageTitle = ({ title, subtitle }) => {
  return (
    <div className="page-title-container">
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  );
};
