import styles from "./SearchBar.module.css";

function SearchBar({ value, onChange }) {
  return (
    <div className={styles.searchContainer}>
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <input
        type="text"
        placeholder="Search by title or description..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
      />
      {value && (
        <button className={styles.clearBtn} onClick={() => onChange("")}>
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;
