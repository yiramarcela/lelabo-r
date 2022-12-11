/**
 * return random int based to a min and max value
 *
 * @param {number}  min
 * @param {number}  max
 *
 * @return {number}     random int inside average
 */
export default function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
