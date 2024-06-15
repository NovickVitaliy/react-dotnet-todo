using Microsoft.EntityFrameworkCore;
using todo_back.Models;

namespace todo_back.Data;

public class TodoDbContext : DbContext {
    
    public DbSet<Todo> Todos => Set<Todo>();

    public TodoDbContext(DbContextOptions<TodoDbContext> options) : base(options) {
    }
}