interface IAlertProps {
  text: string;
  isSuccess?: boolean;
}

const styles = {
  isError: {
    backgroundColor: "#fb5306",
    padding: "1rem",
    fontSize: "0.9rem",
    fontWeight: "500",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: "0.5rem",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    color: "#c4c4c4",
    width: "max-content",
    transition: "0.2s all",
  },
  isSuccess: {
    backgroundColor: "rgb(0, 78, 254)",
    padding: "1rem",
    fontSize: "0.9rem",
    fontWeight: "500",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: "0.5rem",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    color: "#c4c4c4",
    width: "max-content",
    transition: "0.2s all",
  },
};
const Alert = ({ text, isSuccess }: IAlertProps) => {
  return (
    <div style={isSuccess ? styles.isSuccess : styles.isError}>{text}</div>
  );
};

export default Alert;
