const axios = require("axios");

const validIDs = ["p", "f", "e", "r"];

function isValidID(id) {
  return validIDs.includes(id);
}

async function fetchNumbers(id, timeout) {
  try {
    const response = await axios.get(`http://testserver.com/numbers/${id}`, {
      timeout,
    });
    return response.data.numbers ;
  } catch {
   ;
  }
}

module.exports = { isValidID, fetchNumbers };
