using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace todo_back.Data.Migrations
{
    /// <inheritdoc />
    public partial class RenamePropertyNameToTask : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Todos",
                newName: "Task");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Task",
                table: "Todos",
                newName: "Name");
        }
    }
}
