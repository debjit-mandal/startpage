/*****************/
/* EDITABLE INFO */
/*****************/

/* -------------------------------------------------------- */

const NAME = "Debjit Mandal";

const CARDS = [
  {
    name: "Google",
    icon: "ri-google-fill",
    link: "https://www.google.com",
  },
  {
    name: "Youtube",
    icon: "ri-youtube-fill",
    link: "https://www.youtube.com",
  },
  {
    name: "GitHub",
    icon: "ri-github-fill",
    link: "https://github.com/debjit-mandal",
  },
  {
    name: "Website",
    icon: "ri-global-fill",
    link: "https://debjit-mandal.is-a.dev",
  },
  {
    name: "Gmail",
    icon: "ri-mail-fill",
    link: "https://mail.google.com/mail/u/0/#inbox",
  },
  {
    name: "Facebook",
    icon: "ri-facebook-fill",
    link: "https://facebook.com/",
  },
  {
    name: "Instagram",
    icon: "ri-instagram-fill",
    link: "https://www.instagram.com/",
  },
  {
    name: "Twitter",
    icon: "ri-twitter-fill",
    link: "https://twitter.com/",
  },
  {
    name: "Telegram",
    icon: "ri-telegram-fill",
    link: "https://web.telegram.org/#/im",
  },
  {
    name: "Mastodon",
    icon: "ri-mastodon-fill",
    link: "https://fosstodon.org/@iamdebjitmandal",
  },
  {
    name: "Linkedin",
    icon: "ri-linkedin-fill",
    link: "https://linkedin.com/in/",
  },
  {
    name: "Whatsapp",
    icon: "ri-whatsapp-fill",
    link: "https://web.whatsapp.com/",
  },
  {
    name: "Discord",
    icon: "ri-discord-fill",
    link: "https://canary.discord.com/channels/@me",
  },
  {
    name: "GitHub Page",
    icon: "ri-github-fill",
    link: "https://debjit-mandal.github.io",
  },
];

/* -------------------------------------------------------- */

/******************/
/* CLOCK FUNCTION */
/******************/

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const updateDate = () => {
  // Create a new Date object and get the complete Date/Time information
  const completeDate = new Date();

  // Time Variables
  let currentHour = formatDigit(completeDate.getHours());
  let currentMinute = formatDigit(completeDate.getMinutes());

  // Date Variables
  let currentDay = completeDate.getDay();
  let currentNumber = completeDate.getDate();
  let currentMonth = completeDate.getMonth();
  let currentYear = completeDate.getFullYear();

  // Update the Time
  currentTime.innerHTML = `${currentHour}:${currentMinute}`;

  // Update the Date
  currentDate.innerHTML = `${DAYS[currentDay]} ${currentNumber}, ${MONTHS[currentMonth]} ${currentYear}`;

  // Create a Loop
  setTimeout(() => {
    updateDate();
  }, 1000);
};

const formatDigit = (digit) => {
  return digit > 9 ? `${digit}` : `0${digit}`;
};

/******************/
/* CARDS FUNCTION */
/******************/

const printCards = () => {
  for (const card of CARDS) {
    let currentCard = document.createElement("a");
    let currentCardText = document.createElement("p");
    currentCardText.appendChild(document.createTextNode(card.name));
    let currentCardIcon = document.createElement("i");
    currentCardIcon.classList.add(card.icon);

    // Style the Card Element
    currentCard.classList.add("card");
    currentCard.href = card.link;

    // Style the Icon
    currentCardIcon.classList.add("card__icon");

    // Style the Text
    currentCardText.classList.add("card__name");

    currentCard.append(currentCardIcon);
    currentCard.append(currentCardText);
    cardContainer.appendChild(currentCard);
  }
};

/****************/
/* STARTER CODE */
/****************/

userName.innerTEXT = NAME;
printCards();
updateDate();
