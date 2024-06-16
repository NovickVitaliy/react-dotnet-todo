namespace todo_back.Dto;

public record CreateTodoRequest(
    string Task,
    DateTime CreatedAt);