import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProgramPage from "./ProgramPage";

describe("ProgramPage", () => {
  test("отображает заголовок страницы и приветственный текст при первом рендере", () => {
    render(<ProgramPage />);

    expect(
      screen.getByRole("heading", { name: /программы тренировок/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/выберите программу выше, чтобы увидеть подробный план/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /программа силовых тренировок/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /программа кардио-тренировок/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /йога и растяжка/i })
    ).toBeInTheDocument();
  });

  test("отображает детали выбранной программы после клика по кнопке", () => {
    render(<ProgramPage />);

    const strengthProgramButton = screen.getByRole("button", {
      name: /программа силовых тренировок/i,
    });

    // Имитируем клик по кнопке
    fireEvent.click(strengthProgramButton);

    // Приветственный текст больше НЕ должен отображаться
    expect(
      screen.queryByText(
        /выберите программу выше, чтобы увидеть подробный план/i
      )
    ).not.toBeInTheDocument();

    // Должен появиться заголовок выбранной программы
    expect(
      screen.getByRole("heading", { name: /программа силовых тренировок/i })
    ).toBeInTheDocument();

    // Проверим, что отображается хотя бы один день плана
    expect(
      screen.getByText(/понедельник \(грудь\/трицепс\)/i)
    ).toBeInTheDocument();

    // И одно из упражнений
    expect(screen.getByText(/жим лежа \(4x8\)/i)).toBeInTheDocument();
  });

  test("можно выбрать другую программу и увидеть её описание", () => {
    render(<ProgramPage />);

    const cardioButton = screen.getByRole("button", {
      name: /программа кардио-тренировок/i,
    });
    fireEvent.click(cardioButton);

    expect(
      screen.getByRole("heading", { name: /программа кардио-тренировок/i })
    ).toBeInTheDocument();

    // Проверяем одно из описаний из планов кардио
    expect(
      screen.getByText(/беговая дорожка: 30 минут, интервальный режим/i)
    ).toBeInTheDocument();
  });

  test("отображает программу йоги и растяжки после выбора соответствующей кнопки", () => {
    render(<ProgramPage />);

    const yogaButton = screen.getByRole("button", {
      name: /йога и растяжка/i,
    });
    fireEvent.click(yogaButton);

    // Заголовок программы
    expect(
      screen.getByRole("heading", { name: /йога и растяжка/i })
    ).toBeInTheDocument();

    // Проверим один из элементов плана
    expect(
      screen.getByText(/комплекс сурья намаскар \(10 циклов\)/i)
    ).toBeInTheDocument();
  });
});
