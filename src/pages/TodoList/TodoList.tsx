import React from "react"
import {
  append,
  assoc,
  eqBy,
  ifElse,
  join,
  path,
  pipe,
  propEq,
  props,
  toLower,
  trim,
  unless,
  when,
} from "ramda"

import { useState, useMemo } from "react"
import { Input } from "../../components/Input"
import Page from "../../components/Page"
import { Textarea } from "../../components/Textarea"
import WhiteSection from "../../components/WhiteSection"
import {
  Center,
  SaveButton,
  SaveButtonContainer,
  Wrapper,
} from "../../styles/utilities"
import { displayError, displaySuccess } from "../../utils/cogoToast"
import { ITodo, TodoKey } from "./TodoList.types"

const EMPTY_TODO = {
  name: "",
  description: "",
}

const showTodoSuccess = () => displaySuccess("Todo added successfully")

const showTodoError = () => displayError("Invalid todo")

const getEventVal = path(["target", "value"])

const getTodoId = pipe(props(["name", "description"]), join(""), toLower, trim)

function TodoList() {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [todo, setTodo] = useState<ITodo>(EMPTY_TODO)

  const isInvalid = useMemo(() => {
    const hasAllValues = Object.values(todo).every(Boolean)

    const isDuplicated = todos.some(eqBy(getTodoId)(todo))

    return !hasAllValues || isDuplicated
  }, [todo, todos])

  const updateTodo = (prop: TodoKey) => pipe(getEventVal, assoc(prop), setTodo)

  const cleanTodo = () => setTodo(EMPTY_TODO)

  const addTodoToListAndClean = pipe(() => setTodos(append(todo)), cleanTodo)

  const addTodoToListIfValid = unless(() => isInvalid, addTodoToListAndClean)

  const showFeedback = ifElse(() => isInvalid, showTodoError, showTodoSuccess)

  const addTodoAndShowFeedback = pipe(showFeedback, addTodoToListIfValid)

  const handleKeyPress = when(propEq("key", "Enter"), addTodoAndShowFeedback)

  const removeTodo = (i: number) => setTodos((t) => t.filter((_, j) => i !== j))

  return (
    <Page>
      <>
        <Wrapper>
          <Center>
            <WhiteSection>
              <Center>
                <Input
                  title="Todo title"
                  maxLength={20}
                  invalid={isInvalid}
                  onChange={updateTodo("name")}
                  placeholder="Insert todo name"
                  value={todo.name}
                  onKeyPress={handleKeyPress}
                />

                <Textarea
                  title="Todo description"
                  cols={10}
                  maxLength={60}
                  rows={3}
                  onChange={updateTodo("description")}
                  placeholder="Insert todo description"
                  value={todo.description}
                  onKeyPress={handleKeyPress}
                />

                <SaveButtonContainer>
                  <SaveButton onClick={addTodoAndShowFeedback}>
                    {"Save"}
                  </SaveButton>
                </SaveButtonContainer>
              </Center>
            </WhiteSection>
            {todos.map(({ name, description }, i) => (
              <WhiteSection key={i} title={name} onClick={() => removeTodo(i)}>
                <>{description}</>
              </WhiteSection>
            ))}{" "}
          </Center>
        </Wrapper>
      </>
    </Page>
  )
}

export default TodoList
