import { useState } from "react";
import styles from "./styles.module.css";
import { Input, OpeningHoursValues } from "@/types/types";
import { dayOrder } from "@/constants/variables";

const OpeningHours = () => {
  const [openingHours, setOpeningHours] = useState<OpeningHoursValues[]>([]);
  const [inputs, setInputs] = useState<Input[]>([]);
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [openTime, setOpenTime] = useState<string>("");
  const [closeTime, setCloseTime] = useState<string>("");

  const sortByDay = (a: OpeningHoursValues, b: OpeningHoursValues): number => {
    const day1 = a.day.toLowerCase();
    const day2 = b.day.toLowerCase();
    return dayOrder[day1] - dayOrder[day2];
  };

  if (inputs.length > 1) return setInputs([inputs[0]]);
  if (openingHours.length >= 2) {
    openingHours.sort(sortByDay);
  }

  const addNewHours = (day: string, open: string, close: string) => {
    if (!day || !open || !close) return;

    openingHours.sort(sortByDay);
    setOpeningHours([
      ...openingHours,
      { id: openingHours.length + 1, day, open, close },
    ]);
    setInputs([]);
    setSelectedDay("");
    setOpenTime("");
    setCloseTime("");
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedDay(e.target.value);

  const handleTime = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    if (value == "open") return setOpenTime(e.target.value);
    if (value == "close") return setCloseTime(e.target.value);
  };

  const addDay = () =>
    setInputs((prevInputs) => [...prevInputs, { id: Date.now(), value: "" }]);

  return (
    <div className={styles.openingHoursContainer}>
      <h2>Business Opening Hours</h2>
      <div className={styles.chooseContainer}>
        <label htmlFor="cars">Choose Day </label>
        <button onClick={addDay}>Choose Time</button>
      </div>
      {inputs.length <= 1 &&
        inputs.map((input) => (
          <div key={input.id} className={styles.openingHoursDisplay}>
            <div className={styles.chooseOptioneAndTime}>
              <div>
                <select onChange={handleSelectChange}>
                  <option value="">--none--</option>
                  <option value="Sunday">Sunday</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                </select>
              </div>
              <div className={styles.openCloseInputs}>
                <label>Open: </label>
                <input type="time" onChange={(e) => handleTime(e, "open")} />
                <label>Close: </label>
                <input type="time" onChange={(e) => handleTime(e, "close")} />
              </div>
            </div>
            <div>
              <button
                onClick={() => addNewHours(selectedDay, openTime, closeTime)}
              >
                Create Working Day
              </button>
            </div>
          </div>
        ))}

      {openingHours.map((value, index) => (
        <div key={index} className={styles.outputOpeningHoursContainer}>
          <div className={styles.outputOpeningHours}>
            <div>
              <span>{value.day}</span>
            </div>
            <div className={styles.outputTimes}>
              <label>Open: </label>
              <input
                type="time"
                value={value.open}
                onChange={(e) => handleTime(e, "open")}
              />
              <label>Close: </label>
              <input
                type="time"
                value={value.close}
                onChange={(e) => handleTime(e, "close")}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OpeningHours;
