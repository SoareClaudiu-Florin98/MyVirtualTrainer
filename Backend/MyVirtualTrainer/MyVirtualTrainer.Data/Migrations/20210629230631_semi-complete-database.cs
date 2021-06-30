using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MyVirtualTrainer.Data.Migrations
{
    public partial class semicompletedatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DiaryId",
                table: "User",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Diary",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Diary", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DailyReport",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DiaryId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DailyReport", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DailyReport_Diary_DiaryId",
                        column: x => x.DiaryId,
                        principalTable: "Diary",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Food",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Calories = table.Column<int>(type: "int", nullable: false),
                    Weight = table.Column<float>(type: "real", nullable: false),
                    Carbs = table.Column<float>(type: "real", nullable: false),
                    Fat = table.Column<float>(type: "real", nullable: false),
                    Fiber = table.Column<float>(type: "real", nullable: false),
                    Protein = table.Column<float>(type: "real", nullable: false),
                    Calcium = table.Column<float>(type: "real", nullable: false),
                    MealType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DailyReportId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Food", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Food_DailyReport_DailyReportId",
                        column: x => x.DailyReportId,
                        principalTable: "DailyReport",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_User_DiaryId",
                table: "User",
                column: "DiaryId");

            migrationBuilder.CreateIndex(
                name: "IX_DailyReport_DiaryId",
                table: "DailyReport",
                column: "DiaryId");

            migrationBuilder.CreateIndex(
                name: "IX_Food_DailyReportId",
                table: "Food",
                column: "DailyReportId");

            migrationBuilder.AddForeignKey(
                name: "FK_User_Diary_DiaryId",
                table: "User",
                column: "DiaryId",
                principalTable: "Diary",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_User_Diary_DiaryId",
                table: "User");

            migrationBuilder.DropTable(
                name: "Food");

            migrationBuilder.DropTable(
                name: "DailyReport");

            migrationBuilder.DropTable(
                name: "Diary");

            migrationBuilder.DropIndex(
                name: "IX_User_DiaryId",
                table: "User");

            migrationBuilder.DropColumn(
                name: "DiaryId",
                table: "User");
        }
    }
}
