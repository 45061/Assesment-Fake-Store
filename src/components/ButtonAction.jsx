import "../styles/components/ButtonAction.scss";

function ButtonAction({ className, content }) {
  return (
    <button type="button" className={className}>
      {content}
    </button>
  );
}

export default ButtonAction;
