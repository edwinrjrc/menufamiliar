export class Usuario {
    login: number;
    password: string;
    estado: string;
    fechaUltActualizaPass: Date;
    inCuentaCaduca: string;
    fechaCaduca: Date;
    idPersona: number;
    nombres: string;
    apellidos: string;
    email: string;

    getLogin(): number{
        return this.login
    }
    setLogin(login:number){
        this.login = login;
    }

    getNombres(): string{
        return this.nombres
    }
    setNombres(nombres:string){
        this.nombres = nombres;
    }

    getApellidos(): string{
        return this.apellidos
    }
    setApellidos(apellidos:string){
        this.apellidos = apellidos;
    }

    getEmail(): string{
        return this.email
    }
    setEmail(email:string){
        this.email = email;
    }

    getPassword(): string{
        return this.password
    }
    setPassword(password:string){
        this.password = password;
    }
}