import { useDispatch, useSelector } from 'react-redux';
//
import { MoonIcon, SunIcon } from './ThemeIcons';
import { setTheme, metadataSelector } from "../../../redux/metadataSlice";
import "./ThemeHandler.scss";

export default function ThemeHandler() {
  const dispatch = useDispatch();
  const metadata = useSelector(metadataSelector);

  function handleTheme() {
    dispatch(setTheme(metadata.theme === "light" ? "dark" : "light"));

    document.documentElement.classList.add("theming");
    document.documentElement.addEventListener("transitionend", () => {
      if (document.documentElement)
        document.documentElement.classList.remove("theming");
    }, { once: true });
    document.documentElement.classList.toggle("dark");
  };


  return (
    <div className="theme-toggle">
      <button onClick={handleTheme}>
        {metadata.theme === "dark" ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
};
