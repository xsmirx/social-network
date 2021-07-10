import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ProfileStatus } from "./ProfileStatus";
import userEvent from "@testing-library/user-event";

describe("ProfileStatus component", () => {
  const setStatus = jest.fn();
  beforeEach(() => {
    render(<ProfileStatus status={"123"} setStatus={setStatus} />);
  });

  test("status is rendered", () => {
    expect(screen.getByText("123")).toBeInTheDocument();
  });

  test("edit mode is activeted", () => {
    userEvent.dblClick(screen.getByText("123"));
    expect(screen.queryByText("123")).toBeNull();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveValue("123");
  });

  test("changed value on textbox", () => {
    userEvent.dblClick(screen.getByText("123"));
    expect(screen.getByRole("textbox")).toHaveFocus();
    userEvent.clear(screen.getByRole("textbox"));
    expect(screen.queryByRole("textbox")).not.toHaveValue();
    userEvent.type(screen.getByRole("textbox"), "React");
    expect(screen.getByRole("textbox")).toHaveValue("React");
  });

  test("edit mode is deactivated", () => {
    userEvent.dblClick(screen.getByText("123"));
    fireEvent.focusOut(screen.getByRole("textbox"));
    expect(setStatus).toBeCalled();
    expect(screen.queryByRole("textbox")).toBeNull();
    expect(screen.getByText("123")).toBeInTheDocument();
  });
});

describe("ProfileStatus component with empty status", () => {
  const setStatus = jest.fn();
  test("rendered with empty status", () => {
    render(<ProfileStatus status={""} setStatus={setStatus} />);
    expect(screen.getByText("enter status")).toBeInTheDocument();
  });
  
});

describe("rerender ProfileStatus component", () => {
  test("rerendered with another props.status", () => {
    const setStatus = jest.fn();
    const { rerender } = render(
      <ProfileStatus status={"123"} setStatus={setStatus} />
    );
    rerender(<ProfileStatus status={"321"} setStatus={setStatus} />);
    expect(screen.queryByText("123")).not.toBeInTheDocument();
    expect(screen.getByText("321")).toBeInTheDocument();
  });
});
