import formatArrayListDates from "./formatArrayListDates";

/**
 * return same array object sorting by recent dates first
 *
 * @param {Array.<Object>}  arrayElement
 * @param {String}  dateKey
 *
 * @return {Array.<Object>}
 */
export default function sortArrayListByDate(arrayElement, dateKey) {
  try {
    const formatedDatesList = formatArrayListDates(arrayElement, dateKey);
    return formatedDatesList.sort(
      (a, b) => Number(b.date) - Number(a.date)
    );
  } catch (e) {
    console.error(e);
  }
}
