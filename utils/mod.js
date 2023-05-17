// export const isPharmacyOpenPhrase = () => {
//   const date = new Date()
//   const current_time = date.toLocaleString("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: false,
//     timeZone: "America/Phoenix",
//   }).replace(":", "")
//   const dayOfWeek = date.getDay()
//   // console.log(current_time, dayOfWeek, "current_time")
//   // is not sunday or monday
//   if (dayOfWeek > 1) {
//     // is at least 1100
//     if (current_time > 1059 && current_time < 1900) {
//       // not 1430-1630
//       if (current_time > 1429 && current_time < 1630) {
//         return "We are closed until dinner"
//       }
//       return "Now open"
//     }
//     if (current_time > 1900) {
//       return "We are closed for the day"
//     } else {
//       return "We aren't open yet"
//     }
//   }
//   return "Not open today"
// }
