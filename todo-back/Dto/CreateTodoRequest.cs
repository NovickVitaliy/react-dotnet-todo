namespace todo_back.Dto;

public record CreateTodoRequest(
    string Name,
    DateTime CreatedAt);