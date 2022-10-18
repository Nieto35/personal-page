import useDarkMode from "@hooks/useDarkMode";
import useLocalStorage from "@hooks/useLocalStorage";
const initialState = {
  languages: [
    {
      name: "Spanish",
      state: false,
    },
    {
      name: "English",
      state: true,
    },
  ],
  name: "Carlos",
};
const useInitialState = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const [state, setState] = useLocalStorage("data", initialState);
  const { languages, name } = state;
  // LANGUAGE'S FUNCTION
  const onSpanish = () => {
    const newLanguages = languages.map((language) => {
      return {
        ...language,
        state: language.name === "Spanish",
      };
    });
    setState((prev) => ({
      ...prev,
      languages: newLanguages,
    }));
  };
  const onEnglish = () => {
    const newLanguages = languages.map((language) => {
      return {
        ...language,
        state: language.name === "English",
      };
    });
    setState((prev) => ({
      ...prev,
      languages: newLanguages,
    }));
  };
  // CLOSE LANGUAGE'S FUNCTION
  // DARK MODE
  const handleClickOn = () => {
    setDarkMode(true);
  };
  const handleClickOff = () => {
    setDarkMode(false);
  };
  // CLOSE DARK MODE
  return {
    darkMode,
    languages,
    name,
    handleClickOn,
    handleClickOff,
    onSpanish,
    onEnglish,
  };
};
export default useInitialState;
