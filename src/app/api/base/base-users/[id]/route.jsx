import {promises as fs} from "fs";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const file = await fs.readFile(process.cwd() + "/src/app/api/base/db.json", "utf-8");

    const lista = await JSON.parse(file);

    const id = params.id;

    if(id > 0 && id <= lista.usuarios.length) {
        return NextResponse.json(lista.usuarios.find((user)=> user.id = id));
    } else {
        return id == 0 ? NextResponse.json(lista.usuarios) : NextResponse.redirect("https://localhost:3000/error");
    }
}

export async function POST(request, response) {
    // Obtendo arquivo db.json em forma de string
    const file = await fs.readFile(process.cwd() + '/src/app/api/base/db.json', 'utf-8');

    // Transformando arquivo em um objeto e armazenando na variavel lista
    const lista = await JSON.parse(file);

    const userRequest = await request.json();

    try {
        // Procurando o usuario na lista de usuarios
        for(let i=0; i < lista.usuarios.length; i++) {
            const userInfo = lista.usuarios[i];

            if(userInfo.email == userRequest.email && userInfo.senha == userRequest.senha) {
                return NextResponse.json({"status": true, "user": userInfo});
            }
        }
    } catch (error) {
        console.log(error);
    }

    return NextResponse.json({"status": false})
}