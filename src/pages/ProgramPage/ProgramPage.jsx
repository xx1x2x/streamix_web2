import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ProgramPage.module.css";

import InfoMessage from "../../components/InfoMessage";
import withCard from "../../components/withCard";
import { setSelectedProgramId } from "../../store/programSlice";
import {
  selectSelectedProgramId,
  selectSelectedProgram,
} from "../../store/programSelectors";

const PROGRAMS_DATA = [
  {
    id: 1,
    title: "Программа силовых тренировок",
    description:
      "Комплекс упражнений, направленный на увеличение мышечной массы и силы. Включает работу с весами, базовые и изолирующие упражнения.",
    planDetails: [
      {
        day: "Понедельник (Грудь/Трицепс)",
        exercises: [
          "Жим лежа (4x8)",
          "Жим гантелей на наклонной (3x10)",
          "Французский жим (3x12)",
        ],
      },
      {
        day: "Среда (Спина/Бицепс)",
        exercises: [
          "Тяга штанги в наклоне (4x8)",
          "Подтягивания (3xMax)",
          "Подъем гантелей на бицепс (3x12)",
        ],
      },
      {
        day: "Пятница (Ноги/Плечи)",
        exercises: [
          "Приседания со штангой (4x10)",
          "Жим ногами (3x12)",
          "Жим Арнольда (3x10)",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Программа кардио-тренировок",
    description:
      "Идеально подходит для улучшения выносливости и сжигания калорий. Включает бег, велотренажер, прыжки и интервальные тренировки.",
    planDetails: [
      {
        day: "Понедельник",
        exercises: ["Беговая дорожка: 30 минут, интервальный режим"],
      },
      { day: "Среда", exercises: ["Эллипс: 45 минут, умеренный темп"] },
      {
        day: "Пятница",
        exercises: ["HIIT: 20 минут (30 сек. спринт, 60 сек. отдых)"],
      },
    ],
  },
  {
    id: 3,
    title: "Йога и растяжка",
    description:
      "Программа для повышения гибкости, снятия стресса и улучшения общего самочувствия. Фокусируется на дыхании и глубокой работе с телом.",
    planDetails: [
      { day: "Утро", exercises: ["Комплекс Сурья Намаскар (10 циклов)"] },
      {
        day: "Вечер",
        exercises: [
          "Позы для расслабления: Шавасана, Баддха Конасана (по 5 минут)",
        ],
      },
    ],
  },
];

function ProgramPage() {
  const dispatch = useDispatch();

  // Берём выбранную программу из Redux
  const selectedProgramId = useSelector(selectSelectedProgramId);

  const selectedProgram = useSelector((state) =>
    selectSelectedProgram(state, PROGRAMS_DATA)
  );

  return (
    <main>
      <h1>Программы тренировок</h1>

      <InfoMessage title="Как выбрать программу?">
        <p>
          Выберите программу, которая подходит именно вам. Каждая программа
          разработана профессиональными тренерами Streamix.
        </p>
      </InfoMessage>

      <div className={styles.programMenu}>
        {PROGRAMS_DATA.map((program) => (
          <button
            key={program.id}
            onClick={() => dispatch(setSelectedProgramId(program.id))}
            className={
              selectedProgramId === program.id
                ? styles.activeButton
                : styles.menuButton
            }
          >
            {program.title}
          </button>
        ))}
      </div>

      {!selectedProgram && (
        <div className={styles.welcomeMessage}>
          <h2>
            Выберите программу выше, чтобы увидеть подробный план тренировок!
          </h2>
          <p>
            Нажмите на одну из кнопок, чтобы раскрыть информацию о силовых,
            кардио или йога-тренировках.
          </p>
        </div>
      )}

      {selectedProgram && (
        <section className={styles.programContent}>
          <h2>{selectedProgram.title}</h2>

          <p>{selectedProgram.description}</p>

          <div className={styles.trainingPlan}>
            <h3>Подробный план тренировок (Неделя 1)</h3>

            {selectedProgram.planDetails.map((dayPlan, index) => (
              <div key={index} className={styles.daySchedule}>
                <h4>{dayPlan.day}</h4>
                <ul className={styles.exerciseList}>
                  {dayPlan.exercises.map((exercise, idx) => (
                    <li key={idx}>{exercise}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

// Декоратор (HOC)
export default withCard(ProgramPage);
