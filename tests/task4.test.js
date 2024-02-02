const getUserData = require("../task4.js");

const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');
require('@testing-library/jest-dom');


const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');

const { window } = new JSDOM(html);
global.document = window.document;

test("Отримання даних користувача", () => {
  const { name, phoneNumber, dataOfBirth, emailAddress } = getUserData();

  expect(name).toBe('Name');
  expect(phoneNumber).toBe('+380-00-000-0000');
  expect(dataOfBirth).toBe('2020-02-02');
  expect(emailAddress).toBe('softserve@softserve.com')
});
