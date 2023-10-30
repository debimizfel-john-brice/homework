import { NOTIFICATION_TYPE, Store } from 'react-notifications-component';

class NotifyService {

    static success(message: string, title: string = "Success!") {
        NotifyService.addNotification(title, message, "success");
    }

    static error(message: string, title: string = "Error!") {
        NotifyService.addNotification(title, message, "danger");
    }

    static info(message: string, title: string = "") {
        NotifyService.addNotification(title, message, "info");
    }

    private static addNotification(title: string, message: string, type: NOTIFICATION_TYPE) {
        Store.addNotification({
            title,
            message,
            type,
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });
    }
}

export default NotifyService;