type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = ({name, messageCount, isLoggedIn}: GreetProps) => {
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcome ${name}! You have ${messageCount} unread message`
          : `Welcome to my app`}
      </h2>
    </div>
  );
};

export default Greet;
