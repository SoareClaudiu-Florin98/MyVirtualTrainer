using Microsoft.EntityFrameworkCore.Migrations;

namespace MyVirtualTrainer.Data.Migrations
{
    public partial class updatefoodforname : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Food",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Food");
        }
    }
}
