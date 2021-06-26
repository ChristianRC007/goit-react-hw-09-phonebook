import './Notification.scss';

export default function Notification({ children }) {
  return (
    <div className="notification">
      <p>{children}</p>
    </div>
  );
}
