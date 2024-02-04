abstract class ClientError {

    public status: number;
    public message: string;

    public constructor(status: number, message: string) {
        this.status = status;
        this.message = message;
    }
}

export class RouteNotFoundError extends ClientError {
    public constructor(route: string) {
        super(404, `Route: ${route} not found`);
    }
}

export class ResourceNotFoundError extends ClientError {
    public constructor(_id: string) {
        super(404, `ID: ${_id} not found`);
    }
}

export class ValidationError extends ClientError {
    public constructor(message: string) {
        super(400, message);
    }
}


