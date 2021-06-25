import './Notification.scss';

const Notification = ({children}) => {
  return (
    <div className="notification">
      <p>{children}</p>
    </div>
  );
};

export default Notification;
