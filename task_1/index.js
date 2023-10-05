import {encoded, translations} from './data.js'

console.log("Let's rock")


function decodeFields(encoded, translations) {
    const decoded = [];
    const uniqueIds = new Set();
  
    encoded.forEach((item) => {
      const decodedItem = { ...item };
  
      for (const key in decodedItem) {
        if (key.endsWith("Id") && !["groupId", "service", "formatSize", "ca"].includes(key)) {
          const id = decodedItem[key];
          if (id !== null && translations[id]) {
            decodedItem[key] = translations[id];
            uniqueIds.add(id);
          }
        }
      }
  
      decoded.push(decodedItem);
    });
  
    const uniqueIdList = Array.from(uniqueIds);
  
    return { decoded, uniqueIdList };
  }
  
  const { decoded, uniqueIdList } = decodeFields(encoded, translations);
  
  console.log("Decoded obj:");
  console.log(decoded);
  console.log("Unique Ids:");
  console.log(uniqueIdList);




