namespace todo_back.Dto;

public record UpdateTodoRequest(
        string Name,
        bool Done
    );