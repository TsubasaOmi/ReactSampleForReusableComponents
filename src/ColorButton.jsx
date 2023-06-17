import { css } from "@emotion/css";

function ColorButton(props) {
  const onClickShowPopupMessage1 = () => {
    alert("ボタン１がクリックされました");
  };

  const backgroundColor = css`
    background-color: ${props.color};
  `;

  const style = css`
    padding: 10px;
  `;

  return (
    <div className={style}>
      <button
        type="button"
        onClick={onClickShowPopupMessage1}
        className={backgroundColor}
      >
        ボタン１
      </button>
    </div>
  );
}
export default ColorButton;
