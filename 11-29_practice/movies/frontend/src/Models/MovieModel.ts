export default class MovieModel {
    public movieId: number;
    public theaterId: number;
    public movieName: string;
    public movieDate: string;
    public movieDuration: number;


    // validation schema:
    public static TheaterValidation = {
        required: { value: true, message: "Theater is required" },
    }

    public static NameValidation = {
        required: { value: true, message: "Name is required" },
        minLength: { value: 2, message: "Name must be at least 2 characters" },
        maxLength: { value: 50, message: "Name cannot exceed 50 characters" }
    }

    public static DateValidation = {
        required: { value: true, message: "Date is required" }
    }

    public static DurationValidation = {
        required: { value: true, message: "Duration is required" },
        min: { value: 1, message: "Duration must be at least 1 minute" },
        max: { value: 500, message: "Duration cannot exceed 500 minutes" }
    }
}