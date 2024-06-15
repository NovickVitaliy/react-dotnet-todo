namespace todo_back.Models;

public class Todo {
    public required int Id { get; init; }
    public required string Name { get; set; }
    public required DateTime CreatedAt { get; set; }
    public required bool Done { get; set; }
}