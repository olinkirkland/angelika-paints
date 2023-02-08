export default function Alert({ text, icon, onClick }) {
  return (
    <div
      className={`alert ${
        sessionStorage.getItem(`alert-${icon}`) === 'hidden'
          ? 'alert-hidden'
          : ''
      }`}
    >
      <div className="alert-content" onClick={onClick}>
        <i className={`fa fa-${icon}`} />
        <p>{text}</p>
      </div>

      <button
        className="btn-icon"
        onClick={(event) => {
          document.querySelector('.alert').classList.add('alert-hidden');
          sessionStorage.setItem(`alert-${icon}`, 'hidden');
        }}
      >
        <i className="fa fa-times" />
      </button>
    </div>
  );
}
