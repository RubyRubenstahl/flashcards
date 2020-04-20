module.exports.parseJson = (rawEmail, fields) => {
  const parsedEmail = Object.entries(
    rawEmail
  ).reduce((email, [key, value]) => {
      if (fields.includes(key)) {
          email[key] = JSON.parse(value);
      } else {
          email[key] = value;
      }
    return email;
  }, Object.assign({}, rawEmail));
    return parsedEmail;
};
