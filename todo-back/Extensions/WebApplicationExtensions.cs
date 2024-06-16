using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using todo_back.Data;
using todo_back.Dto;
using todo_back.Models;

namespace todo_back.Extensions;

public static class WebApplicationExtensions {
    public static void UseTodoEndpoints(this WebApplication app) {
        app.MapGet("/todos", async (TodoDbContext db) => {
            var todos = await db.Todos
                .AsNoTracking()
                .ToListAsync();

            return Results.Ok(todos);
        });

        app.MapPost("/todos", async (
            [FromBody] CreateTodoRequest req,
            [FromServices] TodoDbContext db) => {
            var todo = new Todo() {
                Done = false,
                Task = req.Task,
                CreatedAt = req.CreatedAt
            };

            await db.Todos.AddAsync(todo);
            await db.SaveChangesAsync();

            return Results.Created($"/todos/{todo.Id}", todo.Id);
        });

        app.MapGet("/todos/{id}",
            async ([FromRoute] int id,
                [FromServices] TodoDbContext db) => {
                var todo = await db.Todos
                    .AsNoTracking()
                    .SingleOrDefaultAsync(x => x.Id == id);

                return todo is null
                    ? Results.NotFound()
                    : Results.Ok(todo);
            });

        app.MapDelete("/todos/{id}",
            async ([FromRoute] int id,
                [FromServices] TodoDbContext db) => {
                var todo = await db.Todos.FindAsync(id);

                if (todo is null) {
                    return Results.NotFound();
                }

                db.Todos.Remove(todo);
                await db.SaveChangesAsync();

                return Results.NoContent();
            });

        app.MapPut("/todos/{id}",
            async ([FromRoute] int id,
                [FromServices] TodoDbContext db,
                [FromBody] UpdateTodoRequest req) => {
                var todo = await db.Todos.FindAsync(id);

                if (todo is null) {
                    return Results.NotFound();
                }

                todo.Task = req.Task;
                todo.Done = req.Done;

                db.Todos.Update(todo);

                await db.SaveChangesAsync();

                return Results.NoContent();
            });
    }
}