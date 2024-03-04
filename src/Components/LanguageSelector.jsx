import React from "react";

const LanguageSelector = ({ onSelectLanguage }) => {
  const languages = [
    { id: "en", name: "English" },
    { id: "ta", name: "Eamil" },
    { id: "hi", name: "Hindi" },
    // Add more languages as needed
  ];

  return (
    <div>
      <h3>Select Language:</h3>
      <ul>
        {languages.map((lang) => (
          <li key={lang.id} onClick={() => onSelectLanguage(lang.id)}>
            {lang.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
