assignment1();
assignment2();
assignment3();

// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.

/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function assignment1() {
  const emails = [
    "n.eeken@novi-education.nl",
    "t.mellink@novi.nl",
    "a.wiersma@outlook.com",
  ];

  for (i = 0; i < emails.length; i++) {
    let emailDomain = getEmailDomain(emails[i]);

    console.log(emailDomain);
  }
}

function getEmailDomain(emailAdress) {
  let result = emailAdress.substring(emailAdress.indexOf("@") + 1);

  return result;
}

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function assignment2() {
  const emails = [
    "n.eeken@novi-education.nl",
    "t.mellink@novi.nl",
    "novi.nlaapjesk@outlook.com",
    "a.wiersma@outlook.com",
  ];

  for (i = 0; i < emails.length; i++) {
    let domain = typeOfEmail(emails[i]);

    console.log(domain);
  }
}

function typeOfEmail(emailAdress) {
  let domain = emailAdress.substring(
    emailAdress.indexOf("@") + 1,
    emailAdress.lastIndexOf(".")
  );

  let result = "";

  if (domain === "novi") {
    result = "Student";
  } else if (domain === "novi-education") {
    result = "Medewerker";
  } else {
    result = "Extern";
  }

  return result;
}

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function assignment3() {
  const emails = [
    "n.eeken@novi.nl",
    "tessmellink@novi.nl",
    "n.eekenanovi.nl",
    "n.eeken@novinl.",
    "tessmellink@novi,nl",
  ];

  for (i = 0; i < emails.length; i++) {
    let isValid = checkEmailValidity(emails[i]);

    console.log(isValid);
  }
}

function checkEmailValidity(emailAdress) {
  let result = true;

  let hasAt = checkCharacter(emailAdress, "@");
  let hasComma = checkCharacter(emailAdress, ",");

  let hasDotAtTheEnd = checkHasDotAtTheEnd(emailAdress);

  if (!hasAt || hasComma || hasDotAtTheEnd) {
    result = false;
  }

  return result;
}

function checkCharacter(emailAdress, character) {
  let result = emailAdress.search(character);

  if (result === -1) {
    return false;
  }

  return true;
}

function checkHasDotAtTheEnd(emailAdress) {
  let length = emailAdress.length;

  let indexDot = emailAdress.lastIndexOf(".") + 1;

  if (length === indexDot) {
    return true;
  }

  return false;
}
