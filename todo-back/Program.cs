using Microsoft.EntityFrameworkCore;
using todo_back.Data;
using todo_back.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options => {
    options.AddDefaultPolicy(policyBuilder => policyBuilder
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());
});

builder.Services.AddDbContext<TodoDbContext>(opt => {
    opt.UseSqlite(builder.Configuration.GetConnectionString("Default"));
});

var app = builder.Build();

app.UseCors();

app.UseTodoEndpoints();

app.Run();
