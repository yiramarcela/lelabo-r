/**
 * return same array object with dates as Date type
 *
 * @param {Array.<Object>}  arrayElement
 * @param {String}  dateKey
 *
 * @return {Array.<Object>}
 */
export default function formatArrayListDates(arrayElement, dateKey) {
  return arrayElement.map((element) => {
    return {
      ...element,
      date: new Date(element[dateKey]),
    };
  });
}
