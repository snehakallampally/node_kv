const Options = (props) => {
  const onChange = (e) => {
    if (props.onChange) {
      props.onChange(e.target.value, props.field);
    }
  };

  return (
    <div className="ip">
      <label>{props.label}</label>
      <select
        className="select"
        onChange={onChange}
        value={props.value}
        field={props.field}
      >
        {props.op.map((item) => {
          return (
            <option key={item.id} disabled={item.isDisabled}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Options;
