function convertToDate(date) {
  const d = new Date(date);

  const altered_date = d.setHours(0, 0, 0, 0);

  return altered_date;
}

export { convertToDate };
