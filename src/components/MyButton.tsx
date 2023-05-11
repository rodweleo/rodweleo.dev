import {
  MouseEventHandler,
} from "react";

type Props = {
  type: string;
  onclick: MouseEventHandler;
  value: string;
};
export function Button(props: Props) {
  return <button onClick={props.onclick}>{props.value}</button>;
}
