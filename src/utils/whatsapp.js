export const navigateWhatsapp = (data) => {
    const { fields, from } = data;
    const space = "%20";
    const newLine = "%0a";
    let baseURL = "https://api.whatsapp.com/send/?phone=%2B918825893275&text=";
    baseURL = `${baseURL}*From${space}:${space}${from}*${newLine}${newLine}`;
    for (let [name, value] of Object.entries(fields)) {
        baseURL += `*${ name.charAt(0).toUpperCase() + name.slice(1)}*${space}:${space}${value}.${newLine}`
    }
    baseURL = `${baseURL}${newLine}`
    baseURL = `${baseURL}*Thankyou*${newLine}`;
    window.location = baseURL
}