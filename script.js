const translations = {
  en: {
    form_title: "Registration Form",
    name_label: "Name",
    email_label: "Email",
    gender_label: "Gender",
    male: "Male",
    female: "Female",
    dob_label: "Date of Birth",
    country_label: "Country",
    country_ethiopia: "Ethiopia",
    country_usa: "USA",
    country_canada: "Canada",
    message_label: "Message",
    submit_btn: "Submit"
  },
  am: {
    form_title: "የመመዝገቢያ ቅፅ",
    name_label: "ስም",
    email_label: "ኢሜይል",
    gender_label: "ፆታ",
    male: "ወንድ",
    female: "ሴት",
    dob_label: "የትውልድ ቀን",
    country_label: "አገር",
    country_ethiopia: "ኢትዮጵያ",
    country_usa: "አሜሪካ",
    country_canada: "ካናዳ",
    message_label: "መልእክት",
    submit_btn: "አስገባ"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.getElementById("name").placeholder =
    lang === "am" ? "ስምዎን አስገባው" : "Enter your name";
  document.getElementById("email").placeholder =
    lang === "am" ? "ኢሜይልዎን አስገባው" : "Enter your email";
  document.getElementById("message").placeholder =
    lang === "am" ? "መልእክትዎን ያስገቡ..." : "Write your message...";
}
