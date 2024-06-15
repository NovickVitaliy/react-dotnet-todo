namespace todo_back.Models;

public class Todo {
    public int Id { get; set; }
    public required string Name { get; set; }
    public required DateTime CreatedAt { get; set; }
    public required bool Done { get; set; }
}