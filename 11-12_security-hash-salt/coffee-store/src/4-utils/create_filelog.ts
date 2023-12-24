import fsPromises from "fs/promises";


async function activityLogger(method: string, route: string, ip: string) {
    const now = new Date();
    let message = now.toLocaleString() + "\n";
    message += `Method: ${method}\nRoute: ${route}\nIP Adress: ${ip}\n`;
    message += "--------------------------\n";
    await fsPromises.appendFile("./src/1-assets/logs/activity.log", message);
}

async function errorsLogger(msg: string, err: any): Promise<void> {
    const now = new Date();
    let message = now.toLocaleString() + "\n";
    message += msg + "\n";
    if (typeof err === "string") message += err + "\n" // throw "Bla bla bla"
    if (err?.stack) message += `Stack: ${err.stack} \n`;
    message += "----------------------\n";
    await fsPromises.appendFile("./src/1-assets/logs/errors.log", message);
}

export default {
    activityLogger,
    errorsLogger
};