type statusProps = {
  status: "loading" | "success" | "error";
};

const Status = (props: statusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetch successfully";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return (
    <div>
      <h2>status - {message} </h2>
    </div>
  );
};

export default Status;
