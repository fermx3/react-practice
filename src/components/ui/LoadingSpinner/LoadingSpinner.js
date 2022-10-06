import classes from "./LoadingSpinner.module.css";

const { spinnerContainer, loadingSpinner } = classes;

const LoadingSpinner = () => {
  return (
    <div className={spinnerContainer}>
      <div className={loadingSpinner} />
      <span>Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
