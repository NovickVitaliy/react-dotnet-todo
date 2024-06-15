using Microsoft.EntityFrameworkCore;
using todo_back.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options => {
    options.AddDefaultPolicy(policyBuilder => policyBuilder
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowCredentials()
        .AllowCredentials());
});

builder.Services.AddDbContext<TodoDbContext>(opt => {
    opt.UseSqlite(builder.Configuration.GetConnectionString("Default"));
});

var app = builder.Build();

app.Run();
