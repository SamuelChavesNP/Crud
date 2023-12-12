const express = require("express");

const todoRoutes = express.Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// C - Create
todoRoutes.post("/todos", async(request, response) => {
    const {name} = request.body;
    const todo = await prisma.todo.create({
        data: {
            name
        }
    })
    return response.status(201).json(todo); 
})
//R - Read
todoRoutes.get("/todos", async(request, response) => {
    const todos = await prisma.todo.findMany()
    return response.status(201).json(todos);
})
//U - Update
todoRoutes.put("/todos", async(request, response) => {
    const {id, name, status} = request.body;

    if(!id) return response.status(400).json("Id is mandatory");

    const todoAlreadyExist = await prisma.todo.findUnique({ where: {id}});
    if(!todoAlreadyExist) return response.status(404).json("Todo not found");

    const todo = await prisma.todo.update({
        where: {
            id,
        },
        data: {
            name,
            status
        }
    })
    return response.status(201).json(todo);
})
//D
todoRoutes.delete("/todos/:id", async(request, response) => {
    const {id} = request.params;
    const idInt = parseInt(id);

    if(!idInt) return response.status(400).json("Id is mandatory");

    const todoAlreadyExist = await prisma.todo.findUnique({ where: {id: idInt}});
    if(!todoAlreadyExist) return response.status(404).json("Todo not found");

    await prisma.todo.delete({where: {id: idInt}});
    return response.status(200).send();
})

module.exports = todoRoutes;