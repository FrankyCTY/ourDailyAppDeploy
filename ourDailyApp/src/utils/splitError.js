export default function splitError(alertArray) {
    const tupleArray = alertArray.map((alert) => alert.split("{SEPERATE}"));
    return tupleArray;
}