import dynamic from "next/dynamic";

// styles
import { Wrapper } from "./styles.styled";

// components
import NewTodo from "./NewTodo";

const TodoListDynamicComponentWithNoSSR = dynamic(() => import("./TodoList"), {
  ssr: false,
});

function Todo(): JSX.Element {
  return (
    <Wrapper>
      <NewTodo />
      <TodoListDynamicComponentWithNoSSR />
    </Wrapper>
  );
}

export default Todo;
