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

