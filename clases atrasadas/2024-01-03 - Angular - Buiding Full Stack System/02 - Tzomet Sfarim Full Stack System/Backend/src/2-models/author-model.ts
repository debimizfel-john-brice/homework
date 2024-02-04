class AuthorModel{

    public id:number;
    public firstName:string;
    public lastName:string;

    public constructor(author:AuthorModel){
        this.id = author.id;
        this.firstName = author.firstName;
        this.lastName = author.lastName;
    }

}
export default AuthorModel