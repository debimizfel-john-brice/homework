import fsPromises from "fs/promises";


async function activityLogger(method: string, route: string, ip: string) {
    const now = new Date();
    let message = now.toLocaleString() + "\n";
    message += `Method: ${method}\nRoute: ${route}\nIP Adress: ${ip}\n`;
    message += "--------------------------\n";
    await fsPromises.appendFile("./src/1-assets/logs/activity.log", message);
}

export default {activityLogger};