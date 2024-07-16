import { forwardRef, useEffect, useState } from "react";
const TextField = forwardRef((props, ref) => {
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   if (text.length > 10) setError(true);
  //   else setError(false);
  //   console.log(text)
  //   if(props.changeUserName){
  //     props.changeUserName(text)
  //   }
  // }, [text]);

  const onChange = (e) => {
    if (props.onChange) {
      props.onChange(e.target.value, props.field);
    }
    console.log(e.target.value, props.field);
  };
  return (
    <span className="ip">
      <label htmlFor="uname">{props.label}</label>

      <input
        style={props.error ? { borderColor: "red" } : {}}
        className="ip"
        disabled={props.isDisabled}
        type={props.type}
        name="username"
        id="uname"
        ref={ref}
        field={props.field}
        value={props.value}
        onChange={onChange}
        placeholder={props.placeholder}
      />
    </span>
  );
});
export default TextField;
