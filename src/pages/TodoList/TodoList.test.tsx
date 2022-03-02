import React from "react"

import { render, screen, cleanup } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { TodoList } from "."

afterEach(cleanup)

describe("TodoList", () => {
  it("Renders TodoList", async () => {
    render(<TodoList />)

    expect(screen.getByText("Todo App")).toBeInTheDocument()
  })
  it("Changes the todo values", async () => {
    render(<TodoList />)
    const titleInput = screen.getByPlaceholderText(/Insert todo name/i)
    const descriptionTextarea = screen.getByPlaceholderText(
      /Insert todo description/i
    )

    userEvent.type(titleInput, "test 1")

    userEvent.type(descriptionTextarea, "test desc 1")

    expect(titleInput).toHaveDisplayValue("test 1")
    expect(descriptionTextarea).toHaveDisplayValue("test desc 1")
  })
  it("Adds a todo", async () => {
    render(<TodoList />)
    const titleInput = screen.getByPlaceholderText(/Insert todo name/i)
    const descriptionTextarea = screen.getByPlaceholderText(
      /Insert todo description/i
    )

    userEvent.type(titleInput, "test 1")
    userEvent.type(descriptionTextarea, "test desc 1")

    userEvent.tab()

    userEvent.keyboard("{enter}")

    // expect todo inputs to be clear
    expect(titleInput).toHaveDisplayValue("")
    expect(descriptionTextarea).toHaveDisplayValue("")

    expect(screen.getByText("test 1")).toBeInTheDocument()
    expect(screen.getByText("test desc 1")).toBeInTheDocument()
  })
  it("Removes a todo", async () => {
    render(<TodoList />)
    const titleInput = screen.getByPlaceholderText(/Insert todo name/i)
    const descriptionTextarea = screen.getByPlaceholderText(
      /Insert todo description/i
    )

    userEvent.type(titleInput, "test 1")
    userEvent.type(descriptionTextarea, "test desc 1")

    userEvent.tab()

    userEvent.keyboard("{enter}")

    userEvent.click(screen.getByText("-"))

    expect(screen.queryByText("test 1")).not.toBeInTheDocument()
    expect(screen.queryByText("test desc 1")).not.toBeInTheDocument()
  })
})
