function isValid(resultJson: any, originJson: any): boolean {
  // Helper function to check if two objects have the same structure and values
  const compareStructureAndValues = (obj1: any, obj2: any): boolean => {
    if (typeof obj1 !== typeof obj2) return false;
    if (typeof obj1 !== "object" || obj1 === null || obj2 === null)
      return obj1 === obj2;

    if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;
    if (Array.isArray(obj1)) {
      if (obj1.length !== obj2.length) return false;
      for (let i = 0; i < obj1.length; i++) {
        if (!compareStructureAndValues(obj1[i], obj2[i])) return false;
      }
      return true;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (const key of keys1) {
      if (!keys2.includes(key)) return false;
      if (!compareStructureAndValues(obj1[key], obj2[key])) return false;
    }
    return true;
  };

  return compareStructureAndValues(resultJson, originJson);
}

// interface AddressComponent {
//   long_name: string;
//   short_name: string;
//   types: string[];
// }

// interface AddressJSON {
//   address_components: AddressComponent[];
//   formatted_address: string;
//   geometry: { location: any };
//   place_id: string;
//   html_attributions: any[];
//   utc_offset: number | undefined;
// }

// interface LongNames {
//   streetNumber: string;
//   route: string;
// }

// function getLongNames(json: AddressJSON): LongNames {
//   let streetNumber = "";
//   let route = "";

//   json.address_components.forEach((component) => {
//     if (component.types.includes("street_number")) {
//       streetNumber = component.long_name;
//     } else if (component.types.includes("route")) {
//       route = component.long_name;
//     }
//   });

//   return { streetNumber, route };
// }
export { isValid };
