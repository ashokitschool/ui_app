export class User {

    name: string;
    email:string;
    pwd:string;
    mobile:string;
    userpic:string;

    constructor(name:string, email:string, pwd:string, mobile:string, userpic:string){
        this.name = name;
        this.email = email;
        this.pwd = pwd;
        this.mobile = mobile;
        this.userpic = userpic;
    }
}
