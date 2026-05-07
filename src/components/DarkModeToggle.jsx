function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button onClick={toggleDarkMode}>
      Toggle {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
}

export default DarkModeToggle;