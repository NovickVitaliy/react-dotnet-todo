namespace todo_back.Dto;

public record UpdateTodoRequest(
        string Task,
        bool Done
    );